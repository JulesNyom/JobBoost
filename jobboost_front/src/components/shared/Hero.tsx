'use client'

import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const Page3D = () => {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 4, 0.2]} />
      <meshStandardMaterial color="#ffffff" />
      <mesh position={[0, 0, 0.101]}>
        <planeGeometry args={[2.8, 3.8]} />
        <meshBasicMaterial color="#f0f0f0" />
      </mesh>
      <mesh position={[0, 1.7, 0.11]}>
        <planeGeometry args={[2.6, 0.3]} />
        <meshBasicMaterial color="#e0e0e0" />
      </mesh>
      <mesh position={[0, 1.2, 0.11]}>
        <planeGeometry args={[2.6, 0.1]} />
        <meshBasicMaterial color="#e0e0e0" />
      </mesh>
      <mesh position={[0, 0.7, 0.11]}>
        <planeGeometry args={[2.6, 0.1]} />
        <meshBasicMaterial color="#e0e0e0" />
      </mesh>
    </mesh>
  )
}

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* 3D Background */}
        <div className="absolute inset-0 -z-10">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Page3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-6xl font-bold tracking-tight text-primary">
            Moti<span className="text-primary">Pro</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Transformez votre lettre de motivation en quelques clics avec l'IA
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8"
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
              <Card className="p-4 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors duration-300">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-primary">{feature.title}</h3>
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
            src="https://www.pexels.com/fr-fr/photo/photo-d-hommes-faisant-des-coups-de-poing-3184302/"
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
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Commencer Maintenant
          </Button>
          <p className="text-sm text-muted-foreground">
            Optimisez votre recherche d'emploi dès aujourd'hui
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection