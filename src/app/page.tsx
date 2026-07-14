const technologies = [
  { label: "Next.js", href: "https://nextjs.org" },
  { label: "React", href: "https://react.dev" },
  { label: "TypeScript", href: "https://www.typescriptlang.org" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com" },
  { label: "Axios", href: "https://axios-http.com" },
  { label: "Zustand", href: "https://zustand-demo.pmnd.rs" },
  { label: "Zod", href: "https://zod.dev" },
  { label: "TanStack Query", href: "https://tanstack.com/query/latest" },
  { label: "TanStack Form", href: "https://tanstack.com/form/latest" },
  { label: "TanStack Table", href: "https://tanstack.com/table/latest" },
];

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center px-8 font-sans">
      <div className="flex max-w-3xl flex-col gap-y-8 items-center">
        <div className="flex flex-col gap-y-4 items-center text-center">
          <div className="flex flex-row gap-x-0">
            <span className="rounded-full border px-4 py-2 text-[11px] font-medium leading-normal tracking-widest uppercase bg-mist-200 text-mist-600 border-mist-400/40">
              Boilerplate
            </span>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-0">
              <h1 className="bg-linear-to-r bg-clip-text text-[53px] font-bold leading-normal tracking-normal text-transparent from-mist-400 to-mist-600">
                Next.js{" "}
                <span className="italic font-normal font-serif tracking-normal">
                  Feature-Based
                </span>
              </h1>
              <h2 className="text-[53px] font-bold leading-none tracking-wide text-mist-800">
                Boilerplate
              </h2>
            </div>
            <div className="flex flex-col gap-y-0">
              <p className="max-w-xl text-[15px] font-medium leading-normal tracking-wide text-mist-600">
                A production-ready Next.js boilerplate featuring Feature-Based
                Architecture, TypeScript, Tailwind CSS, Axios, Zustand, Zod, and
                TanStack.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row justify-center gap-2">
          {technologies.map((technology) => (
            <a
              key={technology.label}
              href={technology.href}
              target="_blank"
              className="rounded-full border px-4 py-2 text-[13px] font-medium tracking-wide focus:outline-none text-mist-600 border-mist-200 bg-white hover:bg-mist-200/20"
            >
              {technology.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
