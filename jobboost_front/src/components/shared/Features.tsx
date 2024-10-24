import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Feature {
  emoji: string;
  title: string;
  description: string;
  imageUrl: string;
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
];

const MotionCard = motion(Card);

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Fonctionnalités
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <MotionCard 
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
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
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="text-4xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      {feature.emoji}
                    </motion.div>
                    <h3 className="text-xl font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group/button hover:bg-primary/10 transition-all duration-300"
                  >
                    En savoir plus 
                    <motion.span 
                      className="inline-block ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}