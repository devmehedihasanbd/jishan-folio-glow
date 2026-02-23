import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: Shield, label: "Accounts Delivered", value: "500+" },
  { icon: TrendingUp, label: "Ad Campaigns", value: "200+" },
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Award, label: "Years Experience", value: "5+" },
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
              I'm Jishan Ahmed, a seasoned digital account and ad solution provider with over 5 years of experience
              in the industry. I specialize in providing high-quality, verified accounts and premium ad solutions
              that help businesses scale their digital presence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From verified Facebook Business Managers to high-trust ad accounts, I deliver solutions
              that are reliable, secure, and optimized for performance. My commitment to quality and
              client satisfaction has earned me the trust of over 150 clients worldwide.
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
