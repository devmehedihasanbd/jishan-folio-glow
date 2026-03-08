import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "eCommerce Growth", level: 96 },
  { name: "Meta Ads (Facebook & Instagram)", level: 95 },
  { name: "Google Ads", level: 90 },
  { name: "TikTok Ads", level: 88 },
  { name: "Amazon Seller Marketing", level: 85 },
  { name: "Media Buying", level: 93 },
  { name: "Account Management", level: 92 },
  { name: "Client Handling", level: 90 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ boxShadow: "0 0 12px hsl(250 80% 60% / 0.5)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
