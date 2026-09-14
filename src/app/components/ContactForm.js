"use client";

import { Mail, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.665-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const ContactForm = () => {
  const [message, setMessage] = useState(
    "Hi Genesis, I reviewed your portfolio and would like to connect about an upcoming project!"
  );

  const topics = [
    { label: "Freelance Project", text: "Hi Genesis, I'm reaching out regarding a freelance project. We need help with..." },
    { label: "Job Opportunity", text: "Hi Genesis, I have a job opportunity that might interest you. We are looking for..." },
    { label: "Tech Consultation", text: "Hi Genesis, I'd like to schedule a tech consultation to discuss..." },
  ];

  const handleTopicClick = (text) => {
    setMessage(text);
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = "584245583492"; // WhatsApp Number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" className="w-full mt-24 md:mt-32 mb-12 md:mb-16">
      <div className="w-full max-w-[1280px] mx-auto px-3 md:px-6">
        <div className="glass-card rounded-2xl p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 bg-primary/10 w-96 h-96 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high border border-white/10 text-xs font-mono text-on-surface-variant mb-6 uppercase tracking-wider w-max">
              AVAILABLE FOR NEW PROJECTS
            </div>
            
            <h2 className="font-headline text-3xl md:text-4xl lg:text-[40px] font-bold text-on-surface mb-6 leading-tight">
              <span className="text-primary drop-shadow-[0_0_15px_rgba(255,177,192,0.5)]">Let's build</span> Something <br className="hidden md:block"/> Great.
            </h2>
            
            <p className="text-base md:text-lg text-on-surface-variant mb-10 md:mb-12 max-w-md leading-relaxed">
              Direct line for rapid communication. Skip the inbox queue and start a real-time discussion about engineering opportunities, architecture consulting, or product development.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:escalonagenesis97@gmail.com" className="flex items-center justify-between p-2 md:p-5 rounded-xl bg-surface-container-high border border-white/5 hover:bg-surface-container-highest transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-on-surface-variant mb-1">Email Direct</p>
                    <p className="text-on-surface text-sm md:text-base font-medium">escalonagenesis97@gmail.com</p>
                  </div>
                </div>
              </a>

              <div className="flex items-center justify-between p-2 md:p-5 rounded-xl bg-surface-container-high border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-on-surface-variant mb-1">Availability & Location</p>
                    <p className="text-on-surface text-sm md:text-base font-medium">Remote • UTC-5 (EST / LatAm Friendly)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 z-10 flex flex-col">
            <div className="bg-[#1a1b26] border border-white/5 p-6 sm:p-8 rounded-2xl w-full">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">Instant WhatsApp Chat</h3>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-mono text-on-surface-variant mb-3">Select a topic or preset:</p>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleTopicClick(topic.text)}
                      className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-bright border border-white/5 hover:border-white/10 text-xs font-medium text-on-surface transition-colors"
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-mono text-on-surface-variant mb-3">Your Message / Project Scope:</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors text-sm resize-none"
                />
              </div>

              <button
                onClick={handleWhatsAppChat}
                className="w-full bg-primary-container text-white font-bold text-base md:text-lg py-3 md:py-4 rounded-xl shadow-[0_0_30px_rgba(255,76,131,0.4)] hover:shadow-[0_0_40px_rgba(255,76,131,0.6)] hover:bg-[#ff5d8f] transition-all duration-300 flex items-center justify-center gap-3 mb-4"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Chat on WhatsApp
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
