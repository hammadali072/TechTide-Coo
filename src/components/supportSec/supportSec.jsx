"use client";

import { useForm } from "react-hook-form";
import clsx from "clsx";
import {
  SparkleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartLineUpIcon,
  UsersThreeIcon,
  ShieldCheckIcon,
  ClockCountdownIcon,
} from "@phosphor-icons/react/dist/ssr";


const whyBookData = [
  {
    icon: ChartLineUpIcon,
    title: "Customized Growth Roadmap",
    desc: "We'll analyze your current bottlenecks and map out a solution.",
  },
  {
    icon: CheckCircleIcon,
    title: "Predictable Results",
    desc: "Learn how we've helped others achieve 3-5x lead growth.",
  },
  {
    icon: UsersThreeIcon,
    title: "Expert Guidance",
    desc: "Direct access to our senior strategists to answer your questions.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Zero Obligation",
    desc: "A high-value session focused on your ROI, no pushy sales.",
  },
];

const officeHours = [
  { day: "Mon – Sat", hours: "10:00 AM – 2:00 AM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

export default function SupportSec() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    // Simulate async submission (swap with your real API call)
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section className="py-24 bg-tint-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-1/4 right-0 w-[400px] h-[400px] bg-primary-start/8 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              <SparkleIcon size={14} weight="fill" />
              <span>Free Strategy Session</span>
            </span>

            <h2 className="heading-h2">
              Ready to{" "}
              <span className="text-gradient">Scale Your Business?</span>
            </h2>

            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">Book your 15-minute growth strategy call today and let&rsquo;s map out your path to 3-5x more leads.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 md:p-8">
              <h3 className="heading-h5 mb-6">Book Your Free Consultation</h3>

              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircleIcon
                    size={52}
                    weight="fill"
                    className="text-primary"
                  />
                  <p className="text-white font-semibold text-lg">You&rsquo;re on the list!</p>
                  <p className="text-white/60 text-sm">We&rsquo;ll reach out within 24 hours to confirm your strategy call.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      error={errors.name?.message}
                      htmlFor="support-name"
                    >
                      <input
                        id="support-name"
                        type="text"
                        placeholder="Full Name"
                        {...register("name", {
                          required: "Name is required",
                        })}
                        className={inputCls(!!errors.name)}
                      />
                    </Field>

                    <Field
                      label="Work Email"
                      error={errors.email?.message}
                      htmlFor="support-email"
                    >
                      <input
                        id="support-email"
                        type="email"
                        placeholder="john@company.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        className={inputCls(!!errors.email)}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Phone / WhatsApp"
                      error={errors.phone?.message}
                      htmlFor="support-phone"
                    >
                      <input
                        id="support-phone"
                        type="tel"
                        placeholder="e.g. +92 300 1234567"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className={inputCls(!!errors.phone)}
                      />
                    </Field>

                    <Field
                      label="Project Type"
                      error={errors.projectType?.message}
                      htmlFor="support-project-type"
                    >
                      <input
                        id="support-project-type"
                        type="text"
                        placeholder="e.g. Lead Gen Website, SaaS, Marketing"
                        {...register("projectType", {
                          required: "Project type is required",
                        })}
                        className={inputCls(!!errors.projectType)}
                      />
                    </Field>
                  </div>

                  <Field
                    label="Your Goals"
                    error={errors.goals?.message}
                    htmlFor="support-goals"
                  >
                    <textarea
                      id="support-goals"
                      rows={4}
                      placeholder="What are your primary goals for this project?"
                      {...register("goals", {
                        required: "Please describe your goals",
                        minLength: {
                          value: 20,
                          message: "Please provide at least 20 characters",
                        },
                      })}
                      className={clsx(inputCls(!!errors.goals), "resize-none")}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-white font-semibold text-base shadow-lg shadow-primary/25 duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Booking…</span>
                      </>
                    ) : (
                      <>
                        <span>Book My Strategy Call</span>
                        <ArrowRightIcon size={18} weight="bold" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 md:p-8 flex-1">
                <h3 className="heading-h5 mb-6">Why book a call?</h3>
                <ul className="space-y-5">
                  {whyBookData.map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex-shrink-0 size-9 rounded-md bg-primary/10 shadow-sm shadow-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon size={18} weight="duotone" className="text-primary" />
                      </span>
                      <div>
                        <h6 className="text-white font-medium text-sm leading-snug">{title}</h6>
                        <p className="text-white/50 text-sm mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-tint-black border border-white/8 rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-2.5 mb-5">
                  <ClockCountdownIcon size={24} weight="duotone" className="text-primary" />
                  <h4 className="heading-h6">Office Hours</h4>
                </div>
                <ul className="space-y-3">
                  {officeHours.map(({ day, hours, closed }) => (
                    <li
                      key={day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/60">{day}</span>
                      <span
                        className={clsx(
                          "font-medium",
                          closed ? "text-primary" : "text-white"
                        )}
                      >
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(hasError) {
  return clsx(
    "w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/30",
    "bg-black/40 border duration-150",
    hasError
      ? "border-red-500/60 focus:border-red-500"
      : "border-white/10 focus:border-primary/50"
  );
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium text-white/50 uppercase tracking-wider"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400 mt-0.5">{error}</p>
      )}
    </div>
  );
}
