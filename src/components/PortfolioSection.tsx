import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

const projects = [
  {
    title: "Multi Platform Account",
    desc: "Unified account management across 9+ global marketplaces — one dashboard, all platforms.",
    tags: ["Multi-Platform", "Account Management", "Global"],
    status: "On Going",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="portfolio" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">What's Next</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Future <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 group cursor-pointer hover:glow-primary transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <Rocket className="text-primary" size={18} />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-medium">
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
