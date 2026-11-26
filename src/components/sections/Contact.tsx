"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }
      toast.success("Message sent! I will get back to you soon.");
      setSent(true);
      reset();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Left column: Text, Email, Socials distributed to match form height */}
          <div className="flex flex-col justify-between py-2 sm:py-4">
            <div>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
                Contact
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships, junior roles and freelance work.
              </p>
            </div>

            <div className="space-y-4 pt-6 lg:pt-0">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3.5 text-base font-medium text-foreground transition-colors hover:text-primary sm:text-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="break-all">{profile.email}</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:shadow-sm"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:shadow-sm"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Form Card */}
          <div className="surface flex flex-col justify-between p-6 sm:p-8">
            {sent && (
              <div
                role="status"
                className="mb-5 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3"
              >
                <LottiePlayer
                  src="/lottie/success-check.json"
                  className="h-12 w-12 shrink-0"
                  loop={false}
                  label="Message sent successfully"
                />
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Message delivered
                  </p>
                  <p className="text-xs text-muted-foreground">Thanks for reaching out — I&apos;ll reply soon.</p>
                </div>
              </div>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              onInput={() => sent && setSent(false)}
              className="flex flex-col gap-5"
            >
              <div>
                <Label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </Label>
                <Input id="name" placeholder="Your name" {...register("name")} />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="name@example.com" {...register("email")} />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  {...register("message")}
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={loading} className="mt-1 w-full sm:w-auto sm:self-start px-8">
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}