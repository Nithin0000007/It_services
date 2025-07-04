import { ArrowRight, ChevronDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTypewriter } from "@/hooks/use-typewriter";
import { scrollToSection } from "@/hooks/use-scroll";
import heroImage from "@assets/Gemini_Generated_Image_j77lpkj77lpkj77l.png";

export default function Hero() {
  const { displayText: typewriterText } = useTypewriter({
    text: "Next-Gen IT Solutions",
    speed: 100,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      <img
        src={heroImage}
        className="hero-image"
        alt="Professional working with advanced technology solutions"
      />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-1">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-32 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rotate-45 opacity-40"
        />
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-40 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-70"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-foreground">
              Transform Your Business with AI-Powered Solutions
            </span>
            <Zap className="w-4 h-4 text-purple-600" />
          </motion.div>

          {/* Main Heading with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight typewriter-text"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-gradient animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-[length:400%_400%]">
              {typewriterText}
              <span className="cursor">|</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Empowering businesses with cutting-edge ServiceNow solutions,
            AI-driven automation, and strategic IT consulting that propels your
            organization into the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              onClick={() => scrollToSection("services")}
              className="btn-primary text-lg px-10 py-6 h-auto group"
            >
              Explore Solutions
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link href="/contact">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                variant="outline"
                className="btn-secondary text-lg px-10 py-6 h-auto border-0"
              >
                Start Your Journey
              </Button>
            </Link>
          </motion.div>

          {/* Stats or Trust Indicators */}
        </motion.div>
      </div>
    </section>
  );
}
