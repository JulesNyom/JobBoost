import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface Feature {
  emoji: string
  title: string
  description: string
  imageUrl: string
}

const features: Feature[] = [
  {
    emoji: "✍️",
    title: "Rédaction Intelligente",
    description: "Transformez votre lettre de motivation existante en quelques clics grâce à notre IA avancée.",
    imageUrl: "/placeholder.svg?height=400&width=600"
  },
  {
    emoji: "✨",
    title: "Personnalisation Automatique",
    description: "Adaptation automatique de votre lettre en fonction de l'offre d'emploi ciblée.",
    imageUrl: "/placeholder.svg?height=400&width=600"
  },
  {
    emoji: "⏱️",
    title: "Gain de Temps",
    description: "Créez une lettre de motivation personnalisée en moins de 2 minutes.",
    imageUrl: "/placeholder.svg?height=400&width=600"
  },
  {
    emoji: "👍",
    title: "Résultats Professionnels",
    description: "Obtenez une lettre parfaitement adaptée aux standards professionnels français.",
    imageUrl: "/placeholder.svg?height=400&width=600"
  }
]

const MotionCard = motion(Card)

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Fonctionnalités
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <MotionCard 
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="text-5xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      {feature.emoji}
                    </motion.div>
                    <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {feature.description}
                  </p>
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button 
                          variant="default" 
                          className="group/button bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                        >
                          En savoir plus 
                          <motion.div 
                            className="inline-block ml-2"
                            initial={{ x: 0 }}
                            animate={{ x: 5 }}
                            transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}