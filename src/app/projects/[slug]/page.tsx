import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Case Study`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-bold md:text-5xl">{project.title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{project.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-muted px-3 py-1 text-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {(project.platform === "Android" ? project.images.slice(0, 2) : project.images).map((img, i) => (
          <div key={i} className="flex justify-center">
            <PhoneFrame src={img} alt={`${project.title} screenshot ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-semibold">Overview</h2>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
          <h2 className="mt-6 font-heading text-2xl font-semibold">Problem</h2>
          <p className="mt-2 text-muted-foreground">{project.problem}</p>
          <h2 className="mt-6 font-heading text-2xl font-semibold">Role</h2>
          <p className="mt-2 text-muted-foreground">{project.role}</p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold">Key features</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          {project.results && (
            <>
              <h2 className="mt-6 font-heading text-2xl font-semibold">Results</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.appStore && (
              <Button asChild variant="outline">
                <Link href={project.links.appStore}>App Store</Link>
              </Button>
            )}
            {project.links.playStore && (
              <Button asChild variant="outline">
                <Link href={project.links.playStore}>Play Store</Link>
              </Button>
            )}
            {project.links.github && (
              <Button asChild variant="outline">
                <Link href={project.links.github}>GitHub</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-end">
        <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-2 font-medium text-primary">
          Next: {next.title} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}