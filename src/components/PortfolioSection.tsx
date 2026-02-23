import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Ad Campaign Setup",
    desc: "Configured and managed ad accounts for a major e-commerce brand, achieving 3x ROAS.",
    tags: ["Media Buying", "Ad Accounts", "Strategy"],
  },
  {
    title: "Business Manager Verification",
    desc: "Verified 50+ Business Managers for an agency, enabling multi-client ad management.",
    tags: ["Verification", "BM Setup", "Compliance"],
  },
  {
    title: "Multi-Platform Account Setup",
    desc: "Provided full suite of social accounts for a startup's digital marketing launch.",
    tags: ["Facebook", "Instagram", "WhatsApp"],
  },
  {
    title: "Agency Ad Account Portfolio",
    desc: "Built and delivered agency-level ad accounts with high trust scores for scaling campaigns.",
    tags: ["Agency Accounts", "Scaling", "Ad Accounts"],
  },
  {
    title: "Client Retention Program",
    desc: "Developed recurring account supply system for long-term client partnerships.",
    tags: ["Client Handling", "Account Management"],
  },
  {
    title: "High-Trust Account Pipeline",
    desc: "Established reliable pipeline for delivering high-trust accounts at scale.",
    tags: ["Trust Scores", "Quality", "Delivery"],
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 group cursor-pointer hover:glow-primary transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <ExternalLink className="text-primary" size={18} />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
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
