"use client";

import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { initialFormState } from "@/lib/validation/contact-schema";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialFormState
  );
  const formRef = useRef(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const inputClasses =
    "w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-base disabled:opacity-50 disabled:cursor-not-allowed";
  const inputErrorClasses =
    "w-full bg-surface-container-highest border border-error/50 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition-colors text-base";

  const getInputClass = (field) =>
    state.errors[field] ? inputErrorClasses : inputClasses;

  const isSuccess = state.status === "success";
  const isError = state.status === "error";

  return (
    <section id="contact" className="w-full mt-24 md:mt-32 mb-12 md:mb-16">
      <div className="w-full max-w-[1280px] mx-auto px-3 md:px-6">
        <div className="glass-card rounded-2xl p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 bg-primary/10 w-96 h-96 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-[40px] font-bold text-on-surface mb-6">
              <span className="text-primary">Lets build</span> Something Great.
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant mb-10 md:mb-12 max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to say hi,
              my inbox is always open.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5 text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-mono text-sm text-on-surface-variant mb-1">Email</p>
                  <p className="text-on-surface">escalonagenesis97@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5 text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-mono text-sm text-on-surface-variant mb-1">Location</p>
                  <p className="text-on-surface">Remote (UTC-5)</p>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            action={formAction}
            className="w-full lg:w-1/2 z-10 flex flex-col gap-6"
          >
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label
                  className="block font-mono text-sm text-on-surface-variant mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isPending}
                  aria-invalid={Boolean(state.errors.name)}
                  className={getInputClass("name")}
                  placeholder="John Doe"
                />
                {state.errors.name && (
                  <p className="mt-2 text-xs text-error flex items-center gap-1">
                    <AlertCircle size={12} />
                    {state.errors.name}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="block font-mono text-sm text-on-surface-variant mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isPending}
                  aria-invalid={Boolean(state.errors.email)}
                  className={getInputClass("email")}
                  placeholder="john@example.com"
                />
                {state.errors.email && (
                  <p className="mt-2 text-xs text-error flex items-center gap-1">
                    <AlertCircle size={12} />
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="block font-mono text-sm text-on-surface-variant mb-2"
                htmlFor="message"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={isPending}
                aria-invalid={Boolean(state.errors.message)}
                className={`${getInputClass("message")} resize-none`}
                placeholder="Tell me about your project..."
              ></textarea>
              {state.errors.message && (
                <p className="mt-2 text-xs text-error flex items-center gap-1">
                  <AlertCircle size={12} />
                  {state.errors.message}
                </p>
              )}
            </div>

            {(isSuccess || isError) && state.message && (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-start gap-2 px-4 py-3 rounded-lg border text-sm ${
                  isSuccess
                    ? "bg-primary-container/10 border-primary-container/30 text-primary"
                    : "bg-error/10 border-error/30 text-error"
                }`}
              >
                {isSuccess ? (
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                )}
                <span>{state.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isPending || isSuccess}
              className="w-full bg-primary-container text-white font-bold text-lg py-4 rounded-lg btn-primary-glow hover:opacity-90 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending && <Loader2 size={18} className="animate-spin" />}
              {isPending && "Sending..."}
              {!isPending && isSuccess && (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent
                </>
              )}
              {!isPending && !isSuccess && (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
