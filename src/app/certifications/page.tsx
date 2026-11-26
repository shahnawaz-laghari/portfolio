import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certificates and completed training programmes.",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24">
      <Link
        href="/#certifications"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
      </Link>

      <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        Certifications
      </h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Certificates from training programmes I have completed.
      </p>

      <div className="mt-10 grid gap-8">
        {certifications.map((cert) => (
          <article key={cert.slug} className="surface p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold tracking-tight">{cert.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{cert.period}</p>

            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-muted/40 p-3 sm:p-5">
              <Image
                src={cert.image}
                alt={`Certificate of Completion for ${cert.title}, awarded to Shah Nawaz Ahmed`}
                width={1240}
                height={880}
                className="mx-auto h-auto w-full max-w-4xl rounded-lg object-contain"
                priority
              />
            </div>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Issued by</dt>
                <dd className="mt-1 text-sm">{cert.issuer}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Programme</dt>
                <dd className="mt-1 text-sm">{cert.program}</dd>
              </div>
            </dl>

            <ul className="mt-6 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
              {cert.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <Button asChild variant="outline" className="mt-6">
              <a href={cert.image} target="_blank" rel="noopener noreferrer">
                Open full certificate <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
