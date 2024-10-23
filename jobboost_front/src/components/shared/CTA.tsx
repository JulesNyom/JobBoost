import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import LetterIllustration from "./Letter";

const Cta = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 animate-pulse" />
          <CardContent className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr,200px] gap-8 items-center">
              <div className="text-center md:text-left space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Prêt à Transformer 
                    <br className="hidden md:inline" /> 
                    Votre Lettre de Motivation?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Créez une lettre parfaitement adaptée en quelques minutes. 
                    Essayez gratuitement dès maintenant!
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="group">
                    Commencer Gratuitement
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    Voir un Exemple
                    <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500">
                  Pas besoin de carte bancaire • Annulation à tout moment
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-full aspect-square relative">
                  <LetterIllustration />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Trust indicators below the card */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex justify-center gap-4">
            {/* Add your trust badges/logos here */}
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
          </div>
          <p className="text-sm text-gray-500">
            Rejoint par plus de 10 000 chercheurs d'emploi en France
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;