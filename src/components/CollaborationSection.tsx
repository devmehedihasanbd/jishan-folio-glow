import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import tradingpoolLogo from "@/assets/logos/tradingpool.jpg";
import apexLogo from "@/assets/logos/apex.jpg";
import onlyscaleLogo from "@/assets/logos/onlyscale.jpg";
import captainLogo from "@/assets/logos/captain.jpg";
import luxwatchLogo from "@/assets/logos/luxwatch.jpg";
import catLogo from "@/assets/logos/cat.jpg";
import fastrackLogo from "@/assets/logos/fastrack.jpg";
import dubaiLogo from "@/assets/logos/dubai.jpg";
import tradingviewLogo from "@/assets/logos/tradingview.jpg";

const partners = [
  { name: "TradingPool", logo: tradingpoolLogo },
  { name: "Apex", logo: apexLogo },
  { name: "OnlyScale Management", logo: onlyscaleLogo },
  { name: "Captain Barbershop", logo: captainLogo },
  { name: "Lux Watch Supply", logo: luxwatchLogo },
  { name: "CAT", logo: catLogo },
  { name: "Fastrack", logo: fastrackLogo },
  { name: "Dubai", logo: dubaiLogo },
  { name: "TradingView", logo: tradingviewLogo },
];

const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Partnerships</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted <span className="gradient-text">Collaborations</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-6 w-max"
        >
          {duplicatedPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 rounded-xl overflow-hidden w-24 h-24 group hover:glow-primary transition-all duration-300 cursor-pointer p-[3px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CollaborationSection;
