"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-semibold tracking-tight"
        >
          Certifications
        </motion.h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Training and courses I&apos;ve completed.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={stagger}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.article key={cert.slug} variants={fadeUp} className="surface p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-primary">
                    <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-xs font-medium text-muted-foreground">{cert.period}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold leading-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.summary}</p>
              <Button asChild className="mt-5">
                <Link href="/certifications">
                  View certificate <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
