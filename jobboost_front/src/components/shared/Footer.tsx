import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { Facebook, Github, Instagram, Mail, Sparkles, Twitter } from 'lucide-react'

export default function Footer() {
  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Ouverture du formulaire d\'abonnement')
  }

  return (
    <footer className="bg-gradient-to-r from-primary/10 via-primary/5 to-background pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-primary flex items-center">
              JobBoost <Sparkles className="ml-2 text-yellow-400" />
            </h2>
            <p className="text-muted-foreground">Propulsez votre carrière avec des opportunités et des insights basés sur l'IA.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { name: 'Commencer', href: '/commencer' },
                { name: 'Comment ça marche', href: '/comment-ca-marche' },
                { name: 'Contactez-nous', href: '/contactez-nous' }
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring' }}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Ressources</h3>
            <ul className="space-y-2">
              {[
                { name: 'Blog', href: '/blog' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' }
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring' }}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-primary">Restez Informé</h3>
            <p className="text-muted-foreground">Abonnez-vous à notre newsletter pour les dernières informations sur l'emploi.</p>
            <Button onClick={handleSubscribe} className="w-full">
              <Mail className="mr-2 h-4 w-4" /> S'abonner à la newsletter
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center space-y-4 mt-12 pt-8 border-t border-primary/10"
        >
          <div className="flex space-x-6">
            {[
              { icon: Facebook, href: 'https://facebook.com/jobboost' },
              { icon: Twitter, href: 'https://twitter.com/jobboost' },
              { icon: Instagram, href: 'https://instagram.com/jobboost' },
              { icon: Github, href: 'https://github.com/jobboost' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Icon size={24} />
                <span className="sr-only">{Icon.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} JobBoost. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}