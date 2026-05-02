"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { EventItem } from "../../data/events";

type FormState = {
  name: string;
  email: string;
  phone: string;
  className: string;
  semester: string;
  teamLead: string;
  teamMembers: string;
};

export default function RegisterForm({ event }: { event: EventItem }) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [form, setForm] = useState<FormState>({
    teamName: "",
    teamLeadName: "",
    teamLeadWhatsapp: "",
    teamLeadEmail: "",
    teamSize: "",
    college: "",
    campusName: "",
    schoolName: "",
    degreeName: "",
    specialization: "",
    year: "",
    semester: "",
  });

  const stepOneValid = form.teamName.trim() && form.teamLeadName.trim() && form.teamLeadWhatsapp.trim() && form.teamLeadEmail.trim() && form.teamSize.trim();
  const stepTwoValid = form.college.trim() && form.campusName.trim() && form.schoolName.trim();
  const stepThreeValid = form.degreeName.trim() && form.specialization.trim() && form.year.trim() && form.semester.trim();

  const submit = async (eventClick: React.FormEvent) => {
    eventClick.preventDefault();
    if (!stepOneValid || !stepTwoValid || !stepThreeValid) {
      return;
    }
    setStatus("submitting");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          eventName: event.title,
          eventId: event.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="relative rounded-[2rem] border border-orange-500/20 bg-black/60 p-8 shadow-[0_0_40px_rgba(255,140,0,0.05)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10">
        <p className="text-[0.65rem] uppercase tracking-[0.5em] text-orange-400/50">
          Registration Form
        </p>
        <h3 className="font-heading mt-4 text-3xl tracking-wide text-orange-50">
          {event.title}
        </h3>
        <label className="floating-field mt-8 text-sm">
          <span className="sr-only">Event Name</span>
          <input
            readOnly
            value={event.title}
            className="floating-input"
            placeholder=" "
          />
          <span className="floating-label">Event Name</span>
        </label>

        <div className="mt-8 flex gap-4 text-[0.65rem] uppercase tracking-[0.4em] font-semibold">
          <span className={`transition-colors duration-300 ${step === 1 ? "text-orange-400 drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]" : "text-orange-400/30"}`}>
            01 Team
          </span>
          <span className={`transition-colors duration-300 ${step === 2 ? "text-orange-400 drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]" : "text-orange-400/30"}`}>
            02 Campus
          </span>
          <span className={`transition-colors duration-300 ${step === 3 ? "text-orange-400 drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]" : "text-orange-400/30"}`}>
            03 Academic
          </span>
        </div>

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-8 grid gap-6"
          >
            {[
              { key: "teamName", label: "Team Name" },
              { key: "teamLeadName", label: "Team Leader Name" },
              { key: "teamLeadWhatsapp", label: "Team Leader WhatsApp" },
              { key: "teamLeadEmail", label: "Team Leader Email ID" },
              { key: "teamSize", label: "Team Size" },
            ].map((field) => (
              <label key={field.key} className="floating-field text-sm">
                <span className="sr-only">{field.label}</span>
                <input
                  required
                  type={field.key === "teamLeadEmail" ? "email" : field.key === "teamLeadWhatsapp" ? "tel" : "text"}
                  value={form[field.key as keyof FormState]}
                  onChange={(eventChange) =>
                    setForm((prev) => ({
                      ...prev,
                      [field.key]: eventChange.target.value,
                    }))
                  }
                  className="floating-input"
                  placeholder=" "
                />
                <span className="floating-label">{field.label}</span>
              </label>
            ))}
            <button
              type="button"
              onClick={() => stepOneValid && setStep(2)}
              className="gradient-ember mt-4 rounded-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-all hover:scale-[1.02] disabled:scale-100 disabled:opacity-50"
              disabled={!stepOneValid}
            >
              Continue
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-8 grid gap-6"
          >
            {[
              { key: "college", label: "Your College" },
              { key: "campusName", label: "Your Campus Name" },
              { key: "schoolName", label: "Your School Name" },
            ].map((field) => (
              <label key={field.key} className="floating-field text-sm">
                <span className="sr-only">{field.label}</span>
                <input
                  required
                  type="text"
                  value={form[field.key as keyof FormState]}
                  onChange={(eventChange) =>
                    setForm((prev) => ({
                      ...prev,
                      [field.key]: eventChange.target.value,
                    }))
                  }
                  className="floating-input"
                  placeholder=" "
                />
                <span className="floating-label">{field.label}</span>
              </label>
            ))}
            <div className="mt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="rounded-full border border-orange-500/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-orange-100/80 transition-colors hover:border-orange-400/60 hover:bg-orange-950/30 hover:text-orange-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => stepTwoValid && setStep(3)}
                className="gradient-ember flex-1 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-all hover:scale-[1.02] disabled:scale-100 disabled:opacity-50"
                disabled={!stepTwoValid}
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-8 grid gap-6"
          >
            {[
              { key: "degreeName", label: "Degree Name" },
              { key: "specialization", label: "Specialization" },
              { key: "year", label: "Year" },
              { key: "semester", label: "Semester" },
            ].map((field) => (
              <label key={field.key} className="floating-field text-sm">
                <span className="sr-only">{field.label}</span>
                <input
                  required
                  type="text"
                  value={form[field.key as keyof FormState]}
                  onChange={(eventChange) =>
                    setForm((prev) => ({
                      ...prev,
                      [field.key]: eventChange.target.value,
                    }))
                  }
                  className="floating-input"
                  placeholder=" "
                />
                <span className="floating-label">{field.label}</span>
              </label>
            ))}
            <div className="mt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="rounded-full border border-orange-500/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-orange-100/80 transition-colors hover:border-orange-400/60 hover:bg-orange-950/30 hover:text-orange-50"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!stepThreeValid || status === "submitting"}
                className="gradient-ember flex-1 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-all hover:scale-[1.02] disabled:scale-100 disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center"
            >
              <p className="font-heading text-lg text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
                You are now part of the movement.
              </p>
              <p className="mt-2 text-sm text-green-400/70">Registration successful.</p>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center"
            >
              <p className="font-heading text-lg text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]">
                Something went wrong.
              </p>
              <p className="mt-2 text-sm text-red-400/70">Please try again.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
