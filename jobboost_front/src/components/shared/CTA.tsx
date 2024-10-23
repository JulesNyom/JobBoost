import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import LetterIllustration from "./Letter";

const MotionCard = motion(Card);

export default function Cta() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <MotionCard 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <CardContent className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr,300px] gap-12 items-center">
              <div className="text-center md:text-left space-y-8">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Transformez Votre 
                    <br className="hidden md:inline" /> 
                    Lettre de Motivation
                  </h2>
                  <p className="text-muted-foreground text-xl">
                    Créez une lettre parfaitement adaptée en quelques minutes. 
                    Essayez gratuitement dès maintenant!
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button size="lg" className="group text-lg px-6 py-3 rounded-full bg-primary hover:bg-primary/90">
                    Commencer Gratuitement
                    <motion.span
                      className="ml-2 text-2xl"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      👉
                    </motion.span>
                  </Button>
                  <Button variant="outline" size="lg" className="group text-lg px-6 py-3 rounded-full">
                    Voir un Exemple
                    <motion.span
                      className="ml-2 text-2xl"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      ✨
                    </motion.span>
                  </Button>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Pas besoin de carte bancaire • Annulation à tout moment
                </motion.p>
              </div>
              
              <motion.div 
                className="hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="w-full aspect-square relative">
                  <LetterIllustration />
                </div>
              </motion.div>
            </div>
          </CardContent>
        </MotionCard>
        
        {/* Trust indicators below the card */}
        <motion.div 
          className="mt-12 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex justify-center gap-8">
            {['🔒', '⭐', '🚀'].map((emoji, index) => (
              <motion.div 
                key={index}
                className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-3xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            Rejoint par plus de 10 000 chercheurs d'emploi en France
          </p>
        </motion.div>
      </div>
    </section>
  );
}