'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, ArrowRight } from "lucide-react"
import hero from '../../assets/images/hero.webp';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex items-center justify-center p-4">
      <div className="max-w-5xl mx-auto text-center space-y-12 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-primary">
            Moti<span className="text-primary">Pro</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformez votre lettre de motivation en quelques clics avec l'IA
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Commencer Maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
        >
          {[
            { title: "Personnalisé", description: "Adapté à chaque offre d'emploi" },
            { title: "Rapide", description: "Résultats en quelques secondes" },
            { title: "Professionnel", description: "Ton adapté et convincant" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative w-full max-w-lg mx-auto"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <img 
            src={hero}
            alt="Illustration de MotiPro"
            className="relative rounded-lg shadow-xl mx-auto"
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-sm text-muted-foreground">
            Optimisez votre recherche d'emploi dès aujourd'hui
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection