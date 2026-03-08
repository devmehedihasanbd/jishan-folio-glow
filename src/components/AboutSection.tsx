import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, TrendingUp, Globe, Award } from "lucide-react";

const stats = [
  { icon: ShoppingCart, label: "Orders Completed", value: "350K+" },
  { icon: Globe, label: "Global Marketplaces", value: "9" },
  { icon: TrendingUp, label: "Account Types", value: "297+" },
  { icon: Award, label: "Years Experience", value: "7+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Your Trusted Partner in{" "}
              <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm Jishan Ahmed Robin, a professional digital marketer, eCommerce specialist, and premium digital account provider. With 7+ years of experience, I have successfully completed 350,000+ orders across 9 different global marketplaces.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We provide 297+ types of premium digital accounts, including gaming accounts, gift cards, game top-up services, software subscriptions, verified ad accounts, and verified social media accounts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our main expertise is eCommerce growth and paid advertising on platforms like Meta Ads, Google Ads, TikTok Ads, and Amazon Seller Marketing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:glow-primary transition-shadow duration-300"
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
