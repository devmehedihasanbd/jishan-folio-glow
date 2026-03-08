import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CreditCard,
  Gift,
  Gamepad2,
  Joystick,
  BadgeCheck,
  ShieldCheck,
  Target,
  Headphones,
} from "lucide-react";

const services = [
  { icon: CreditCard, title: "Premium Subscription Accounts", desc: "Netflix, Spotify, Adobe, and 297+ premium software & streaming subscriptions." },
  { icon: Gift, title: "Gift Cards", desc: "Google Play, iTunes, Amazon, Steam, and more — instant delivery worldwide." },
  { icon: Gamepad2, title: "Game Top-Up Services", desc: "Fast and secure top-up for PUBG, Free Fire, Genshin Impact, and all popular games." },
  { icon: Joystick, title: "Gaming Accounts", desc: "High-level gaming accounts across all major platforms and titles." },
  { icon: BadgeCheck, title: "Verified Social Media Accounts", desc: "Verified Facebook, Instagram, Twitter/X, and TikTok accounts for business use." },
  { icon: ShieldCheck, title: "Verified Support & Account Recovery", desc: "Professional account verification and recovery services for all platforms." },
  { icon: Target, title: "Sales Funnel Setup & Conversion Optimization", desc: "End-to-end funnel design and optimization to maximize your ROI." },
  { icon: Headphones, title: "Order Processing & Customer Support", desc: "Dedicated support and seamless order processing for your business needs." },
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
