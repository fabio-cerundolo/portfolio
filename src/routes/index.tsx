import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { profile as p } from "@/lib/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fabio Cerundolo — Developer Portfolio" },
      { name: "description", content: "Portfolio di Fabio Cerundolo: sviluppatore full-stack e AI, Web Solution Architect presso ITS ICT Piemonte, Torino." },
      { property: "og:title", content: "Fabio Cerundolo — Developer Portfolio" },
      { property: "og:description", content: "Progetti full-stack e AI, competenze e contatti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["about", "projects", "skills", "education", "contact"];

const A = ({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className={`text-term-cyan underline decoration-dotted underline-offset-4 hover:text-primary ${className}`}>
    {children}
  </a>
);

function Cmd({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 text-sm">
      <span className="text-term-green">fabio@portfolio</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-term-magenta">~</span>
      <span className="text-muted-foreground">$ </span>
      <span>{children}</span>
    </div>
  );
}

function Window({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg bg-background shadow-window">
      <div className="flex items-center gap-2 border-b bg-card px-4 py-2 text-xs text-muted-foreground">
        <span className="size-3 rounded-full bg-term-red" />
        <span className="size-3 rounded-full bg-term-yellow" />
        <span className="size-3 rounded-full bg-term-green" />
        <span className="flex-1 text-center">{title}</span>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </div>
  );
}

function Section({ id, cmd, title, children }: { id: string; cmd: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:py-24">
      <p className="text-sm text-term-yellow">## {id}</p>
      <h2 className="mb-8 mt-1 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <Window title={`alacritty — ${cmd}`}>
        <Cmd>{cmd}</Cmd>
        {children}
      </Window>
    </section>
  );
}

function Typed({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN(n + 1), 45);
    return () => clearTimeout(t);
  }, [n, text]);
  return (
    <>
      {text.slice(0, n)}
      <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-primary" />
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-sm">
          <a href="#top" className="text-term-green">~/fabio</a>
          <div className="hidden gap-5 sm:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n}`} className="text-muted-foreground transition-colors hover:text-primary">./{n}</a>
            ))}
          </div>
          <a href={`mailto:${p.email}`} className="rounded border border-primary px-3 py-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            hire --me
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-16 pt-16 sm:pt-28 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm text-muted-foreground">// ciao, sono</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-6xl">
              Fabio<br /><span className="text-primary">Cerundolo</span>
            </h1>
            <p className="mt-5 min-h-[3.5em] text-lg text-term-blue sm:text-xl">
              <Typed text="Full-stack developer · AI applicata ai processi aziendali" />
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Web Solution Architect @ ITS Academy ICT Piemonte. Cerco uno stage curriculare a {p.location.split(",")[0]}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="#projects" className="rounded bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90">$ ls ./projects</a>
              <A href={p.github} className="rounded border px-5 py-2.5 no-underline">github ↗</A>
              <A href={p.linkedin} className="rounded border px-5 py-2.5 no-underline">linkedin ↗</A>
            </div>
          </div>
          <Window title="alacritty — neofetch">
            <div className="space-y-1 text-sm">
              <div><span className="text-term-green">fabio</span>@<span className="text-term-blue">torino</span></div>
              <div className="text-muted-foreground">-----------------</div>
              {[
                ["role", "Web Solution Architect"],
                ["focus", "Back-end · Front-end · AI"],
                ["stack", "Python · TS · Java · Go"],
                ["infra", "Docker · Linux · Postgres"],
                ["ai", "Groq · Llama 3.3 · Ollama"],
                ["status", "open to internship"],
              ].map(([k, v]) => (
                <div key={k}><span className="text-term-yellow">{k}</span>: {v}</div>
              ))}
              <div className="flex gap-1 pt-3">
                {["bg-term-red", "bg-term-green", "bg-term-yellow", "bg-term-blue", "bg-term-magenta", "bg-term-cyan"].map((c) => (
                  <span key={c} className={`h-3 w-6 ${c}`} />
                ))}
              </div>
            </div>
          </Window>
        </section>

        <Section id="about" cmd="cat about.md" title="Chi sono">
          <p className="max-w-3xl leading-relaxed">{p.about}</p>
          <p className="mt-4 text-muted-foreground">› {p.goal}</p>
        </Section>

        <Section id="projects" cmd="ls -la ./projects" title="Progetti selezionati">
          <div className="grid gap-4 md:grid-cols-2">
            {p.projects.map((pr) => (
              <a key={pr.name} href={pr.url} target="_blank" rel="noreferrer" className="group rounded border bg-card p-5 transition-colors hover:border-primary">
                <div className="text-xs text-term-blue">drwxr-xr-x ./{pr.name}</div>
                <h3 className="mt-2 font-semibold group-hover:text-primary">{pr.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pr.desc}</p>
                <p className="mt-3 text-xs text-term-magenta">[{pr.stack}]</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">altri su <A href={p.github}>github.com/fabio-cerundolo</A></p>
        </Section>

        <Section id="skills" cmd="cat skills.json" title="Competenze">
          <div className="grid gap-3 text-sm sm:grid-cols-[8rem_1fr]">
            {p.skills.map(([k, v]) => (
              <div key={k} className="contents">
                <span className="text-term-green">"{k}"</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4 text-sm text-muted-foreground">
            {p.soft.map((s) => <div key={s}><span className="text-primary">✓</span> {s}</div>)}
          </div>
        </Section>

        <Section id="education" cmd="git log --education" title="Formazione">
          <div className="space-y-5 text-sm">
            {p.education.map(([d, t, s]) => (
              <div key={t} className="border-l-2 border-term-yellow/60 pl-4">
                <div className="text-term-yellow">{d}</div>
                <div className="font-semibold">{t}</div>
                <div className="text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" cmd="./contact.sh" title="Lavoriamo insieme">
          <div className="grid gap-2 text-sm sm:grid-cols-[8rem_1fr]">
            <span className="text-term-green">email</span><A href={`mailto:${p.email}`}>{p.email}</A>
            <span className="text-term-green">phone</span><A href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</A>
            <span className="text-term-green">github</span><A href={p.github}>github.com/fabio-cerundolo</A>
            <span className="text-term-green">linkedin</span><A href={p.linkedin}>linkedin.com/in/fabio-cerundolo</A>
          </div>
          <a href={`mailto:${p.email}`} className="mt-8 inline-block rounded bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">$ send --email</a>
        </Section>
      </main>

      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {p.name} · exit 0
      </footer>
    </div>
  );
}
