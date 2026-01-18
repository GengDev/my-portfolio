"use client";
import { useLanguage } from "@/context/LanguageContext";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Watchara.geng.work@gmail.com",
    href: "mailto:Watchara.geng.work@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "095-962-5861",
    href: "tel:+66959625861"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
    href: "#"
  }
];

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = `${t.contact.form.name} ${t.contact.form.required}`;
    if (!formData.email.trim()) newErrors.email = `${t.contact.form.email} ${t.contact.form.required}`;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t.contact.form.invalidEmail;
    if (!formData.message.trim()) newErrors.message = `${t.contact.form.message} ${t.contact.form.required}`;
    else if (formData.message.trim().length < 10) newErrors.message = t.contact.form.shortMessage;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In real app, you would send to your backend/email service

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 cosmic-section relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow font-orbitron">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 font-orbitron">{t.contact.navigate}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const label = info.label === 'Email' ? t.contact.emailLabel :
                  info.label === 'Phone' ? t.contact.phoneLabel :
                    t.contact.locationLabel;
                const value = info.label === 'Location' ? t.about.locationValue : info.value;

                return (
                  <div key={index} className="group flex items-center space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm font-medium text-gray-400 uppercase tracking-wide">{label}</p>
                      <a
                        href={info.href}
                        className="text-white hover:text-indigo-300 transition-colors duration-300 text-base md:text-lg font-medium break-all"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                {t.contact.description}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur"></div>
            <div className="relative bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-emerald-300 font-medium">{t.contact.form.success}</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-red-300 font-medium">{t.contact.form.error}</span>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm ${errors.name ? 'border-red-400' : 'border-white/20'
                      }`}
                    placeholder={t.contact.form.namePlaceholder}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm ${errors.email ? 'border-red-400' : 'border-white/20'
                      }`}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none ${errors.message ? 'border-red-400' : 'border-white/20'
                      }`}
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.contact.form.sending}
                    </>
                  ) : (
                    t.contact.form.send
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
