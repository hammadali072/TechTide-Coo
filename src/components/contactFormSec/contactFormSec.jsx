"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  PaperPlaneTiltIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  XIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import { submitToCrm } from "@/lib/crm";
import clsx from "clsx";
import Link from "next/link";

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
      <button onClick={onClose} className="shrink-0 opacity-60 hover:opacity-100 duration-200">
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

const inputCls = "w-full bg-tint-black-2 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent duration-200";

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
    <section className="bg-tint-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px]" />
      </div>
      <div className="container">
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:flex-row-reverse">
          <div className="lg:col-span-5 flex flex-col gap-6 order-last lg:order-first">
            {/* Card 1: Email Us */}
            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 flex flex-col items-start gap-4 lg:flex-row">
              <div className="shrink-0 size-10 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center">
                <EnvelopeSimpleIcon size={20} weight="bold" className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Email Us</h3>
                <Link href="mailto:contact@fidayinsystems.ai" className="text-primary hover:text-primary/80 duration-200 block mb-1 text-sm font-medium">contact@fidayinsystems.ai</Link>
                <p className="text-xs text-white/50">We reply within 24 hours</p>
              </div>
            </div>

            {/* Card 2: Call Us */}
            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 flex flex-col items-start gap-4 lg:flex-row">
              <div className="shrink-0 size-10 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center">
                <PhoneIcon size={20} weight="bold" className="text-primary" />
              </div>
              <div className="w-full">
                <h3 className="text-base font-bold text-white mb-3">Call Us</h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex justify-start gap-3 items-center text-sm">
                    <Link href="tel:+442046205555" className="text-primary font-medium hover:text-primary/80 duration-200">+44 20 4620 5555</Link>
                    <span className="text-[10px] uppercase bg-[#1f1f1f] text-white/50 px-2 py-0.5 rounded font-semibold tracking-wider">UK</span>
                  </li>
                  <li className="flex justify-start gap-3 items-center text-sm">
                    <Link href="tel:+14388030005" className="text-primary font-medium hover:text-primary/80 duration-200">+1 438 803 0005</Link>
                    <span className="text-[10px] uppercase bg-[#1f1f1f] text-white/50 px-2 py-0.5 rounded font-semibold tracking-wider">CA</span>
                  </li>
                  <li className="flex justify-start gap-3 items-center text-sm">
                    <Link href="tel:+18888850688" className="text-primary font-medium hover:text-primary/80 duration-200">+1 888 885 0688</Link>
                    <span className="text-[10px] uppercase bg-[#1f1f1f] text-white/50 px-2 py-0.5 rounded font-semibold tracking-wider">USA</span>
                  </li>
                  <li className="flex justify-start gap-3 items-center text-sm">
                    <Link href="tel:+3197010280805" className="text-primary font-medium hover:text-primary/80 duration-200">+31 970 102 80805</Link>
                    <span className="text-[10px] uppercase bg-[#1f1f1f] text-white/50 px-2 py-0.5 rounded font-semibold tracking-wider">CH</span>
                  </li>
                </ul>
                <p className="text-xs text-white/50">Mon-Fri from 8am to 6pm</p>
              </div>
            </div>

            {/* Card 3: Visit Us */}
            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 flex flex-col items-start gap-4 lg:flex-row">
              <div className="shrink-0 size-10 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center">
                <MapPinIcon size={20} weight="bold" className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">Visit Us</h3>
                <p className="text-sm text-primary leading-relaxed">
                  11-12 Old Bond Street, Mayfair London W1S 4PN,<br />United Kingdom
                </p>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-4">Working Hours</h3>
              <ul className="space-y-3 text-xs md:text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="text-primary font-medium">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-primary font-medium">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white/40">Closed</span>
                </li>
              </ul>
            </div>
          </div>

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
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-white text-sm font-bold hover:opacity-95 duration-200 shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <PaperPlaneTiltIcon size={18} weight="bold" />
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
      <div className="relative z-10 mt-8 overflow-hidden w-full 2xl:h-[500px] md:h-[400px] sm:h-[300px] h-52">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.6!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sG3+Heaven+Mall%2C+Zaraar+Shaheed+Road%2C+Lahore!5e0!3m2!1sen!2spk!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TechTide Corporate Office Location"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 duration-500"
        />
      </div>
    </section>
  );
}
