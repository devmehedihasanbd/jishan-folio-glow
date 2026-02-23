import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  ShieldCheck,
  Target,
  Building2,
  BadgeCheck,
} from "lucide-react";

const services = [
  { icon: Facebook, title: "Facebook Accounts", desc: "High-quality, aged Facebook accounts ready for advertising and business use." },
  { icon: Instagram, title: "Instagram Accounts", desc: "Verified and trusted Instagram accounts for marketing and brand building." },
  { icon: MessageCircle, title: "WhatsApp Accounts", desc: "Business-ready WhatsApp accounts for customer engagement and outreach." },
  { icon: Mail, title: "Gmail Accounts", desc: "Aged and verified Gmail accounts for business operations and marketing." },
  { icon: ShieldCheck, title: "Verified Business Managers", desc: "Fully verified Meta Business Managers with clean history." },
  { icon: Target, title: "High-Trust Ad Accounts", desc: "Premium ad accounts with high spending limits and trust scores." },
  { icon: Building2, title: "Meta Agency Ad Accounts", desc: "Agency-level ad accounts for managing multiple client campaigns." },
  { icon: BadgeCheck, title: "Verification Support", desc: "Complete account verification assistance for Meta and Google platforms." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass rounded-xl p-6 group cursor-pointer hover:glow-primary transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow duration-300">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
