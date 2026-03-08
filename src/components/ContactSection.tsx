import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Mail, label: "Email", value: "Jishanahmedrobin@gmail.com", href: "mailto:Jishanahmedrobin@gmail.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=Jishanahmedrobin@gmail.com&su=${mailtoSubject}&body=${mailtoBody}`,
      "_blank"
    );

    toast({
      title: "Opening Gmail...",
      description: "A new window will open with your message details pre-filled.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputVariants = {
    focus: { scale: 1.01, borderColor: "hsl(var(--primary))" },
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm uppercase text-primary mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Ready to grow your digital business? Reach out and let's discuss how I can help you scale.
            </motion.p>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.03, x: 8 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 glass rounded-xl p-4 group hover:glow-primary transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center"
                >
                  <link.icon className="text-primary" size={18} />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">{link.value}</p>
                </div>
                <motion.div whileHover={{ x: 4, y: -4 }}>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
            className="glass rounded-xl p-8 space-y-5"
          >
            {[
              { label: "Your Name *", type: "text", key: "name" as const, placeholder: "Your full name", required: true },
              { label: "Email *", type: "email", key: "email" as const, placeholder: "your@email.com", required: true },
              { label: "Subject", type: "text", key: "subject" as const, placeholder: "What's this about?", required: false },
            ].map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <label className="text-sm text-muted-foreground mb-2 block">{field.label}</label>
                <motion.input
                  type={field.type}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder={field.placeholder}
                  required={field.required}
                  whileFocus={inputVariants.focus}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
              <motion.textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your requirements..."
                required
                whileFocus={inputVariants.focus}
              />
            </motion.div>
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium glow-primary transition-shadow hover:opacity-90"
            >
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Send size={16} />
              </motion.span>
              Send via Gmail
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
