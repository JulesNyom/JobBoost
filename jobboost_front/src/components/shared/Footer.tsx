import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "/features" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Témoignages", href: "/testimonials" },
      { label: "Guide d'utilisation", href: "/guide" },
      { label: "Mises à jour", href: "/updates" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Carrières", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Presse", href: "/press" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions d'utilisation", href: "/terms" },
      { label: "Politique de confidentialité", href: "/privacy" },
      { label: "Mentions légales", href: "/legal" },
      { label: "Cookies", href: "/cookies" },
      { label: "RGPD", href: "/gdpr" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Centre d'aide", href: "/help" },
      { label: "Documentation API", href: "/api", external: true },
      { label: "Statut du service", href: "/status" },
      { label: "FAQ", href: "/faq" },
      { label: "Partenaires", href: "/partners" },
    ],
  },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/youraccount",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/yourcompany",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourcompany",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/youraccount",
    icon: Instagram,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="mt-12 border-t pt-8">
          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">
                Restez informé
              </h4>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button>S'inscrire</Button>
              </div>
              <p className="text-xs text-gray-500">
                En vous inscrivant, vous acceptez notre{" "}
                <a href="/privacy" className="underline hover:text-gray-900">
                  politique de confidentialité
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">
                Suivez-nous
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-gray-200 p-2 hover:border-gray-300 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                © {currentYear} VotreProduit. Tous droits réservés.
              </span>
              <span className="text-sm text-gray-500">
                🇫🇷 Made in France
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Français
              </Button>
              <a
                href="#top"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Retour en haut ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;