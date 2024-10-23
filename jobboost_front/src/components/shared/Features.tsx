import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PenLine, 
  Sparkles, 
  Clock, 
  ThumbsUp 
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    icon: <PenLine className="h-6 w-6" />,
    title: "Rédaction Intelligente",
    description: "Transformez votre lettre de motivation existante en quelques clics grâce à notre IA avancée.",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Personnalisation Automatique",
    description: "Adaptation automatique de votre lettre en fonction de l'offre d'emploi ciblée.",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Gain de Temps",
    description: "Créez une lettre de motivation personnalisée en moins de 2 minutes.",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Résultats Professionnels",
    description: "Obtenez une lettre parfaitement adaptée aux standards professionnels français.",
    imageUrl: "/api/placeholder/600/400"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nos Fonctionnalités
        </h2>
        
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <Card 
                className="overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div 
                      className={`p-6 flex flex-col justify-center ${
                        index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="w-fit group-hover:translate-x-2 transition-transform duration-300"
                      >
                        En savoir plus →
                      </Button>
                    </div>
                    
                    <div 
                      className={`relative overflow-hidden ${
                        index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                      }`}
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={feature.imageUrl}
                          alt={feature.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;