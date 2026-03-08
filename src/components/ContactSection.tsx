import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle, Mail, Globe, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: MessageCircle, label: "Telegram", value: "@jishanahmedrobin", href: "https://t.me/jishanahmedrobin" },
  { icon: Mail, label: "Email", value: "Jishanahmedrobin@gmail.com", href: "mailto:Jishanahmedrobin@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+880 1XXX-XXXXXX", href: "https://wa.me/8801XXXXXXXXX" },
  { icon: Globe, label: "Website", value: "jishanahmedrobin.com", href: "#" },
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

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to grow your digital business? Reach out through any of these channels
              and let's discuss how I can help you scale.
            </p>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 glass rounded-xl p-4 group hover:glow-primary transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <link.icon className="text-primary" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">{link.value}</p>
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your requirements..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium glow-primary transition-shadow hover:opacity-90"
            >
              <Send size={16} />
              Send via Gmail
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
