import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, ChartLine, Users } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-primary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Boost Your Career with{' '}
              <span className="text-primary">JobBoost</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-6"
            >
              Unlock your potential and find your dream job with our AI-powered platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#get-started"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
          <div className="lg:w-1/2 relative">
            <JobBoostIllustration />
            <FloatingElement
              Icon={Briefcase}
              className="absolute top-0 left-0 text-primary"
            />
            <FloatingElement
              Icon={ChartLine}
              className="absolute bottom-0 left-1/4 text-secondary"
            />
            <FloatingElement
              Icon={Users}
              className="absolute top-1/4 right-0 text-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function JobBoostIllustration() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      width="100%"
      height="100%"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="250"
        cy="250"
        r="200"
        fill="url(#gradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="M250 150L350 300H150L250 150Z"
        fill="currentColor"
        className="text-primary"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.path
        d="M250 350L200 250L300 250L250 350Z"
        fill="currentColor"
        className="text-secondary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

function FloatingElement({ Icon, className }: { Icon: React.ElementType; className: string }) {
  return (
    <motion.div
      className={`p-3 rounded-full bg-background shadow-lg ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <Icon size={24} />
    </motion.div>
  )
}