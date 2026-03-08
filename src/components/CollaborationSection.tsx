import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "TechScale Agency", initials: "TS" },
  { name: "AdVenture Media", initials: "AV" },
  { name: "PixelPeak Digital", initials: "PP" },
  { name: "GrowthBox Co.", initials: "GB" },
  { name: "MediaPulse Inc.", initials: "MP" },
  { name: "ScaleForce", initials: "SF" },
  { name: "DigiVault Pro", initials: "DV" },
  { name: "MarketEdge", initials: "ME" },
  { name: "AdSphere Global", initials: "AG" },
  { name: "CloudNine Digital", initials: "CN" },
  { name: "BlueWave Agency", initials: "BW" },
  { name: "NovaTech Solutions", initials: "NT" },
];

const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Duplicate for seamless infinite scroll
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

      {/* Infinite carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        {/* Gradient fade edges */}
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
          className="flex gap-8 w-max"
        >
          {duplicatedPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 glass rounded-xl p-6 flex flex-col items-center justify-center w-40 h-36 group hover:glow-primary transition-all duration-300 cursor-pointer"
            >
              {/* Logo placeholder */}
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-primary">{partner.initials}</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CollaborationSection;
