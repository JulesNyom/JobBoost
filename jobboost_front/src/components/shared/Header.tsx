import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-left"
          >
            <h1 className="text-2xl font-bold text-primary">Logo Here</h1>
          </motion.div>
          
          <div className="hidden md:flex space-x-6">
            {['Fonctionnalités', 'Prix', 'Contact'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-right space-x-2"
          >
            <Button variant="outline" className="hidden sm:inline-flex">Start</Button>
            <Button>Buy More Jetons</Button>
          </motion.div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background border-t border-border/40"
        >
          <div className="container mx-auto px-4 py-2 space-y-2">
            {['Fonctionnalités', 'Prix', 'Contact'].map((link) => (
              <a key={link} href="#" className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                {link}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full">Start</Button>
              <Button className="w-full">Buy More Jetons</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}