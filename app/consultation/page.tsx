"use client";
import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle,
  Info,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  reason: z
    .string()
    .min(10, "Please provide more details about your consultation"),
});

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      consultationSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please give us some informations ...", {
        duration: 4000,
        style: {
          background: "#FF5757",
          color: "#fff",
          borderRadius: "10px",
          padding: "16px",
        },
        icon: "⚠️",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Consultation booked successfully!", {
        duration: 5000,
        style: {
          background: "#10B981",
          color: "#fff",
          borderRadius: "10px",
          padding: "16px",
        },
        icon: "✅",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
      });
    } catch {
      toast.error("Failed to book consultation", {
        duration: 4000,
        style: {
          background: "#FF5757",
          color: "#fff",
          borderRadius: "10px",
          padding: "16px",
        },
        icon: "❌",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (field: string) => {
    return errors[field] ? (
      <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Professional Healthcare Consultation
        </h1>
        <p className="text-lg text-blue-100 mb-8">
          Schedule a personalized consultation with our expert healthcare
          professionals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["24/7 Support", "Expert Doctors", "Secure & Private"].map(
            (feature) => (
              <div
                key={feature}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold">{feature}</h3>
              </div>
            )
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Before Your Consultation
            </h3>
            <ul className="text-blue-100 space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                Please have your medical history ready
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                List any current medications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                Prepare specific questions for the doctor
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                Choose a quiet place for your virtual consultation
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Book Your Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {renderError("name")}
            </div>

            <div className="space-y-2">
              <label className="text-white flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {renderError("email")}
            </div>

            <div className="space-y-2">
              <label className="text-white flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {renderError("phone")}
            </div>

            <div className="space-y-2">
              <label className="text-white flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              {renderError("date")}
            </div>

            <div className="space-y-2">
              <label className="text-white flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time
              </label>
              <input
                type="time"
                value={formData.time}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
              {renderError("time")}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Reason for Consultation
            </label>
            <textarea
              value={formData.reason}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              rows={4}
              onChange={(e) =>
                setFormData({ ...formData, reason: e.target.value })
              }
            />
            {renderError("reason")}
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
                Processing...
              </>
            ) : (
              "Schedule Consultation"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
