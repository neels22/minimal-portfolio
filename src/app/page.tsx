"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "indraneel",
//   description: "engineer at the intersection of design and web development",
// };

// Icon component for consistent logo display
const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex border border-2 items-center justify-center w-10 h-10 bg-neutral-2 dark:bg-neutral-dark-2 rounded-lg overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className="object-contain"
      crossOrigin="anonymous"
    />
  </div>
);

export default function Home() {
  const [showCoditasDetails, setShowCoditasDetails] = useState(false);

  return (
    <main className="mx-auto max-w-screen-md px-4 py-32 flex flex-col gap-8">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header/Intro Section */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <div>
          <h1 className="text-4xl text-neutral-8 dark:text-neutral-dark-8 lowercase tracking-tighter text-balance">
            hi I'm <span className="font-semibold">Indraneel</span>,
            <div>student / software engineer*</div>
          </h1>
        </div>
      </div>

      <aside className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <div className="w-full max-w-32 flex sm:justify-end">
          <p className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
            *
          </p>
        </div>
        <div>
          <p className="lowercase text-neutral-7 dark:text-neutral-dark-7 text-balance text-sm">
            i love building stuff—been at it for sometime now. also into ai
            agents, and a bunch of other cool stuff.
          </p>

          {/* Categories Section */}
          <div className="flex gap-3 mt-3">
            <Link
              href="#engineering"
              className="lowercase border text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-1 rounded-md"
            >
              software engineering
            </Link>
            <Link
              href="#ai"
              className="lowercase border text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-1 rounded-md"
            >
              gen-ai
            </Link>
            <Link
              href="#design"
              className="lowercase border text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-1 rounded-md"
            >
              life
            </Link>
          </div>
        </div>
      </aside>

      {/* Experience Section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-bold text-xl sm:text-xl tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              experience
            </h2>
          </div>
        </div>
        <ol className="flex flex-col gap-4">
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon
                  src="https://ext.same-assets.com/1107240702/3005105550.svg"
                  alt="Inploi logo"
                />
              </div>
              <div>
                <header className="flex gap-1.5 lowercase text-lg">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    Coditas solutions
                  </h3>
                  <div className="inline text-neutral-8 dark:text-neutral-dark-8">
                    ( associate software intern ) jan 2024 - jun 2024
                  </div>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-lg font-semibold">
                  gen-ai, Langchain, python, RAG, LLM's, Django
                </p>
                <button
                  // Best Practice: Explicitly set type to prevent accidental form submission
                  type="button"
                  onClick={() => setShowCoditasDetails(!showCoditasDetails)}
                  // Kept original styles + added active state for subtle feedback
                  className="mt-2 min-w-24 lowercase text-neutral-7 dark:text-neutral-dark-7 border border-2 rounded p-1 text-sm hover:text-neutral-8 dark:hover:text-neutral-dark-8 focus:outline-none focus-visible:underline active:text-neutral-8 dark:active:text-neutral-dark-8"
                  // Accessibility: Links button to the content it controls via ID
                  // <-- Connects to the div below
                  // Accessibility: Indicates whether the controlled content is expanded or collapsed
                  aria-expanded={showCoditasDetails}
                  // Optional: Indicate the button's purpose more clearly to assistive tech
                  aria-label={
                    showCoditasDetails
                      ? "Hide details about Coditas experience"
                      : "Show details about Coditas experience"
                  }
                >
                  {/* Visually hidden text could be added here too if needed, but aria-label often suffices */}
                  {showCoditasDetails ? "hide details" : "show details"}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showCoditasDetails
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                    <span className="text-4xl font-bold text-white">.</span>
                    Leveraged the Langchain framework to build
                    Retrieval-Augmented Generation (RAG) applications, enabling
                    natural language querying on diverse data sources such as
                    PDFs, YouTube videos, and web-scraped content.
                    <br />
                    <span className="text-4xl font-bold text-white">.</span>
                    Acquired in-depth knowledge of generative AI, including
                    large language models (LLMs), vector databases, embeddings,
                    context length considerations, and various prompting
                    techniques. <br />
                    <span className="text-4xl font-bold text-white">.</span>
                    Designed a RAG system that interfaces with SQL databases,
                    allowing users to query database contents in natural
                    language and receive relevant responses.
                    <br />
                    <span className="text-4xl font-bold text-white">.</span>
                    Implemented a Streamlit-based interface to dynamically
                    visualize query results through generated graphs,
                    facilitating easier data interpretation and insights.
                    <br />
                    <span className="text-4xl font-bold text-white">.</span>
                    Acquired expertise in Python, Django, HTML, CSS, JavaScript,
                    and SQL through intensive training sessions and applied
                    these skills to internship projects.
                  </div>
                </div>
                {/* --- Dropdown Implementation END --- */}
              </div>
            </div>
          </li>
        </ol>
      </section>

      {/* Selected Projects Section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              ongoing projects
            </h2>
          </div>
        </div>
        <ol className="flex flex-col gap-4">
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon
                  src="https://ext.same-assets.com/1107240702/366769914.svg"
                  alt="Inploi SDK logo"
                />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link
                      href="https://github.com/notcodesid/Accountability-App"
                      className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg"
                    >
                      accountability app
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  A App (Blockchain) that will enable users to commit to
                  personal goals, stake money on their success, and compete with
                  others to stay accountable.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon
                  src="https://ext.same-assets.com/1107240702/1618200265.svg"
                  alt="Inploi SDK logo"
                />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link
                      href="https://instantinterior.vercel.app/"
                      className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg"
                    >
                      instant interior
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  This application provides AI-powered interior design services,
                  allowing users to transform their spaces with various design
                  options.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon
                  src="https://ext.same-assets.com/1107240702/4164160248.svg"
                  alt="Winden UI logo"
                />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link
                      href="https://travelhomes-frontend.vercel.app/"
                      className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg"
                    >
                      travels homes
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  a travel project that helps people plan and enjoy road trips
                  in camper vans, rvs, and motorhomes, giving them the freedom
                  to explore at their own pace.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      {/* projects section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              projects
            </h2>
          </div>
        </div>
        <ol className="flex flex-col gap-4">
          {/* Lolify project is currently down */}
          {/* <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/2209693309.svg" alt="React Router Typesafe logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://lolify.io/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    lolify ( frontend )
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                lolify creates branded memes to boost engagement and drive better campaign results.
                </p>
              </div>
            </div>
          </li> */}
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon
                  src="https://ext.same-assets.com/1107240702/366769914.svg"
                  alt="Drizzle Toolbelt logo"
                />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link
                      href="https://sidblogs.vercel.app/"
                      className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg"
                    >
                      blogging website ( full stack )
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  a blogging site for exploring code, sharing knowledge, and
                  building the future.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon
                  src="https://ext.same-assets.com/1107240702/2531423430.svg"
                  alt="Zustand Context logo"
                />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link
                      href="https://learnwebdev.vercel.app/"
                      className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg"
                    >
                      learn web dev
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  a basic roadmap and resources for learning Web development.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <div className="flex items-center justify-center w-10 h-10 bg-neutral-2 rounded-lg overflow-hidden">
                  <span className="text-neutral-7 text-lg">T</span>
                </div>
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link
                      href="https://ama-beige.vercel.app/"
                      className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg"
                    >
                      ask me anything
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  for getting all the doubts and question at one place
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              Contact
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <ol className="flex gap-2 -mx-1.5">
              <li>
                <Link
                  href="https://x.com/notcodesid"
                  className="lowercase border  text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  Twitter / x
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/notcodesid"
                  className="lowercase border  text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  GitHub
                </Link>
              </li>
              {/* LinkedIn */}
              <li>
                <Link
                  href="https://www.linkedin.com/in/sidharthh-pandro"
                  className="lowercase border  text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  LinkedIn
                </Link>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:notcodesid@gmail.com?subject=Hey%20Sidharth"
                  className="lowercase border  text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  say hello
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
