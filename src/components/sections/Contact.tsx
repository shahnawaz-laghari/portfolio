"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
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
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Left column: Text, Email, Socials distributed to match form height */}
          <div className="flex flex-col justify-between py-2 sm:py-4">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Have a project in mind? Let&apos;s talk.
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
          <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card/60 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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