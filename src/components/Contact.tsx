import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "Laxmanpur, Shivraj Municipality, Kapilvastu, Nepal",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+977 9807585951",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "janchetanacsschool@gmail.com",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Have questions about admissions, academics, or anything else?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                   transition-colors duration-200 bg-gray-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                   transition-colors duration-200 bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                 transition-colors duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                 transition-colors duration-200 bg-gray-50 hover:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary
                               text-white font-semibold rounded-xl hover:bg-primary/90 transition-all
                               duration-200 hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-gray-100
                             hover:border-accent/30 hover:shadow-card transition-all duration-200"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-gray-700 text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div className="p-5 bg-primary rounded-xl text-white">
              <h4 className="font-bold mb-3 text-sm">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Sunday – Friday</span>
                  <span className="font-medium">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Saturday</span>
                  <span className="font-medium text-accent">Closed</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-card h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d83.05!3d27.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMzJzAwLjAiTiA4M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2snp!4v1621923456789!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="School Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
