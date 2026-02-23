import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "TechScale Agency",
  "AdVenture Media",
  "PixelPeak Digital",
  "GrowthBox Co.",
  "MediaPulse Inc.",
  "ScaleForce",
];

const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24" ref={ref}>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 flex items-center justify-center h-24 cursor-pointer group hover:glow-primary transition-all duration-300"
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground group-hover:gradient-text transition-colors duration-300 text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
