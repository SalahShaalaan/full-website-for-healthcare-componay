"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please Enter A vaild Email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.success("Thank You, We will review your message soon.", {
          duration: 4000,
          style: {
            background: "#10B981",
            color: "#fff",
            borderRadius: "10px",
          },
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch {
        toast.error("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      details: ["1-800-HEALTH", "Available 24/7"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Weekend: 10AM - 4PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#41729F] to-[#274472]">
      <Toaster position="top-center" />

      <section className="text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10 background-pattern"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We&apos;re here to help you with any questions about our healthcare
            services. Your health is our priority.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto -mt-16 relative z-20">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className={` p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-400`}
          >
            <div className="text-white mb-4">{info.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {info.title}
            </h3>
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-blue-50">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-16 px-4 pb-20">
        <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all"
                />
                {errors.name && (
                  <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all"
                />
                {errors.email && (
                  <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-white mb-2">
                <MessageSquare className="w-4 h-4" />
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all"
              />
              {errors.message && (
                <p className="mt-2 text-red-400 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-lightGreen text-white rounded-xl font-semibold 
              hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 
              flex items-center justify-center gap-2 text-lg
              ${
                isSubmitting
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
