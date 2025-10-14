import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-6 sm:p-10 mt-10">
      <main className="row-start-2 mx-auto w-full max-w-[1312px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold tracking-tight mb-12">
          Build a better website, faster.
        </h1>

        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-24 gap-4 md:gap-4 lg:gap-5"
          aria-label="Feature cards"
        >
          <article
            style={{ paddingBottom: "0 !important" }}
            className="flex flex-col rounded-[12px] overflow-hidden bg-background p-6 md:p-7 lg:p-8 border border-solid border-border-muted sm:border-foreground lg:border-border-muted col-span-1 lg:col-span-11 relative"
          >
            <div
              className="absolute inset-0 rounded-[12px] pointer-events-none sm:hidden"
              style={{
                background:
                  "radial-gradient(circle at center, var(--color-ellipse-1) 0%, transparent 100%)",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                100+ sections and components
              </h3>
              <p className="mt-2 mb-6 text-sm md:text-base text-muted-foreground max-w-[52ch]">
                All the elements you need to build a modern, responsive, and
                accessible landing page.
              </p>
            </div>
            <div className="relative mt-auto z-10">
              <Image
                src="/images/light-mode/black-globe.svg"
                alt="Black globe illustration"
                width={512}
                height={512}
                className="hidden lg:block mx-auto w-auto h-auto scale-110"
              />
              <Image
                src="/images/light-mode/orange-globe.svg"
                alt="Orange globe illustration"
                width={512}
                height={512}
                className="block lg:hidden mx-auto w-full h-auto scale-140 sm:scale-110 mt-4 sm:mt-0"
              />
            </div>
          </article>

          <article
            className="flex flex-col rounded-[12px] overflow-hidden border border-border-muted-darker bg-tile p-6 md:p-7 lg:p-8 col-span-1 lg:col-span-13 relative"
            style={{ paddingBottom: "0 !important" }}
          >
            <div
              className="absolute inset-0 rounded-[12px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, var(--color-ellipse-1) 0%, transparent 100%)",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                You're in control
              </h3>
              <p className="mt-2 mb-6 text-sm md:text-base text-muted-foreground max-w-[52ch]">
                This is not a component library. It's a collection of re-usable
                components that you can copy and paste into your apps.
              </p>
            </div>
            <div className="relative mt-auto z-10">
              <Image
                src="/images/light-mode/fusee.svg"
                alt="Rocket illustration"
                width={356}
                height={356}
                className="mx-auto w-full sm:w-auto h-auto mt-4 sm:mt-0"
              />
            </div>
          </article>

          <article
            className="rounded-[12px] col-span-1 lg:col-span-13 relative"
            style={{
              padding: "0.8px",
              background:
                "linear-gradient(to bottom, var(--color-border-muted-darker) 0%, var(--color-border-muted) 0.35%, var(--color-border-muted) 100%)",
            }}
          >
            <div className="rounded-[12px] bg-background p-6 md:p-7 lg:p-8 h-full overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-[12px] pointer-events-none md:hidden"
                style={{
                  background:
                    "radial-gradient(circle at center, var(--color-ellipse-1) 0%, transparent 100%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Fits right into your stack
                </h3>
                <p className="mb-6 mt-2 text-sm md:text-base text-muted-foreground max-w-[52ch]">
                  Built with modern web technologies and tools that fit right
                  into any React project.
                </p>
              </div>
              <div className="relative z-10">
                <Image
                  src="/images/light-mode/stack.svg"
                  alt="Stack illustration"
                  width={512}
                  height={512}
                  className="mx-auto w-auto h-auto scale-150 sm:scale-130 lg:scale-100 mt-15 mb-15 sm:mt-10 sm:mb-10"
                />
              </div>
            </div>
          </article>

          <article
            className="rounded-[12px] col-span-1 lg:col-span-11"
            style={{
              padding: "0.8px",
              background:
                "linear-gradient(to bottom, var(--color-border-muted-darker) 0%, var(--color-border-muted) 0.35%, var(--color-border-muted) 100%)",
            }}
          >
            <div className="rounded-[12px] bg-background p-6 md:p-7 lg:p-8 h-full overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-[12px] pointer-events-none block sm:hidden lg:block"
                style={{
                  background:
                    "radial-gradient(circle at center, var(--color-ellipse-1) 0%, transparent 100%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Data-agnostic
                </h3>
                <p className="mb-6 mt-2 text-sm md:text-base text-muted-foreground max-w-[52ch]">
                  All the data is separate from components so you can edit it in
                  seconds or make it dynamic.
                </p>
              </div>
              <div className="relative z-10">
                <Image
                  src="/images/light-mode/chat.svg"
                  alt="Chat illustration"
                  width={512}
                  height={512}
                  className="mx-auto w-auto h-auto md:scale-110 lg:scale-100"
                />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
