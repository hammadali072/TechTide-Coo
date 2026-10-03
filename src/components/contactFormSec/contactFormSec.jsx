"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  PaperPlaneTiltIcon,
  LightningIcon,
  UsersThreeIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { submitToCrm } from "@/lib/crm";
import clsx from "clsx";

function Toast({ type, message, onClose }) {
  if (!message) return null;
  const isSuccess = type === "success";
  return (
    <div
      className={clsx(
        "flex items-start gap-3 p-4 rounded-lg border text-sm font-medium mb-6",
        isSuccess
          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
          : "bg-red-500/10 border-red-500/20 text-red-400"
      )}
    >
      {isSuccess ? (
        <CheckCircleIcon size={20} weight="fill" className="shrink-0 mt-0.5" />
      ) : (
        <WarningCircleIcon size={20} weight="fill" className="shrink-0 mt-0.5" />
      )}
      <span className="flex-1">{message}</span>
      <button onClick={onClose} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity">
        <XIcon size={16} weight="bold" />
      </button>
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400 mt-1">{error.message}</p>
      )}
    </div>
  );
}

const inputCls = "w-full bg-tint-black-2 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

const whyChoose = [
  {
    icon: LightningIcon,
    title: "Fast Response Time",
    desc: "We respond to all inquiries within 24 hours during business days.",
  },
  {
    icon: UsersThreeIcon,
    title: "Expert Team",
    desc: "Work directly with experienced engineers, designers, and strategists.",
  },
];

export default function ContactFormSec() {
  const [toast, setToast] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setToast({ type: "", message: "" });
    try {
      await submitToCrm("contact", data);
      setToast({
        type: "success",
        message: "Thank you! We've received your message and will be in touch within 24 hours.",
      });
      reset();
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again or email us directly at info@techtidecorporate.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-tint-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div className="lg:col-span-7">
            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-7 lg:p-10">
              <h2 className="heading-h3 text-white mb-2">Send Us a Message</h2>
              <p className="text-sm text-white/50 mb-8">Fill out the form below and we&rsquo;ll get back to you within 24 hours.</p>

              <Toast
                type={toast.type}
                message={toast.message}
                onClose={() => setToast({ type: "", message: "" })}
              />

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First Name" required error={errors.firstName}>
                    <input
                      {...register("firstName", {
                        required: "First name is required",
                        pattern: {
                          value: /^[a-zA-Z\s\-']+$/,
                          message: "Letters, spaces, hyphens, and apostrophes only",
                        },
                      })}
                      placeholder="Ahmad"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Last Name" required error={errors.lastName}>
                    <input
                      {...register("lastName", {
                        required: "Last name is required",
                        pattern: {
                          value: /^[a-zA-Z\s\-']+$/,
                          message: "Letters, spaces, hyphens, and apostrophes only",
                        },
                      })}
                      placeholder="Khan"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Email" required error={errors.email}>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      placeholder="ahmad@company.com"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Phone" error={errors.phone}>
                    <input
                      type="tel"
                      {...register("phone", {
                        pattern: {
                          value: /^(03\d{9}|\+\d{7,15})$/,
                          message: "Use 03XXXXXXXXX or +country code format",
                        },
                      })}
                      placeholder="03001234567 or +1..."
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="Subject" required error={errors.subject}>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Letters and spaces only",
                      },
                    })}
                    placeholder="Web Development Project"
                    className={inputCls}
                  />
                </Field>

                <Field label="Message" required error={errors.message}>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 20, message: "Please write at least 20 characters" },
                    })}
                    rows={5}
                    placeholder="Tell us about your project — scope, timeline, budget..."
                    className={clsx(inputCls, "resize-none")}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-r from-primary-start to-primary-end text-white text-sm font-bold hover:opacity-95 transition-all shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <PaperPlaneTiltIcon size={18} weight="bold" />
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">

            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-7">
              <h3 className="heading-h5 text-white mb-6">Why Choose TechTide?</h3>
              <div className="space-y-5">
                {whyChoose.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="shrink-0 size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon size={20} weight="bold" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                      <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-tint-black-2 border border-white/8 rounded-2xl overflow-hidden flex-1 min-h-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.6!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sG3+Heaven+Mall%2C+Zaraar+Shaheed+Road%2C+Lahore!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechTide Corporate Office Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
