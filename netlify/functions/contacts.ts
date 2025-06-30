// netlify/functions/contact.ts

import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { insertContactSubmissionSchema } from "../../shared/schema"; // Adjust the path as needed
import { logger } from "../../server/utils/logger"; // Adjust the path as needed
import { emailService } from "../../server/utils/emailService"; // Adjust the path as needed
// You might need to adapt your storage implementation to work in a serverless environment.
// import { storagePromise } from "../../server/storage"; // Adjust the path as needed

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Request body is missing." }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Validate the data using insertContactSubmissionSchema
    const validatedData = insertContactSubmissionSchema.parse(data);

    // --- Placeholder for creating a contact submission ---
    // You will need to implement the logic to save the validatedData
    // to your chosen storage solution (e.g., a database, a different service).
    // Example:
    // const storage = await storagePromise; // If you've adapted your storage for serverless
    // const submission = await storage.createContactSubmission(validatedData);
    const submission = { id: "placeholder_id", ...validatedData }; // Replace with actual submission

    logger.info("Contact form submission received", {
      email: validatedData.email,
    });
    // --- End of placeholder ---


    // --- Placeholder for sending an email notification ---
    // Implement your email sending logic here using the emailService.
    // Remember that sending emails in a serverless function might require
    // configuring environment variables for your email service credentials
    // in Netlify.
    emailService.sendContactNotification(submission).catch((emailError) => {
      logger.error("Failed to send email notification", emailError as Error);
      // Decide how to handle email sending errors - usually you wouldn't
      // fail the HTTP request just because the email failed.
    });
    // --- End of placeholder ---

    logger.info("Contact form processing complete", { submissionId: submission.id });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: submission.id }),
    };
  } catch (error) {
    logger.error("Contact form submission failed", error as Error);

    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        error: "Invalid form data or submission failed.",
        details: (error as Error).message // Include error message for debugging
      }),
    };
  }
};

export { handler };