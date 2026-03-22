import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      </div>

      <div className="container mx-auto px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Docs-as-Code · Philosophy · AI Insights
          </div>

          <Heading as="h1" className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {siteConfig.title}
          </Heading>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:w-auto"
              to="/docs/intro"
            >
              Start Reading
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-2">
          {/* 文档卡片 */}
          <Link
            className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-card backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/30 dark:hover:bg-slate-900/30"
            to="/docs/intro"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  Knowledge Base
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Explorations in Philosophy of Science, AI Interpretability, and Product Management.
                </div>
              </div>
              <div className="mt-0.5 rounded-xl border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                /docs
              </div>
            </div>
            <div className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              Explore Docs → 
            </div>
          </Link>

          {/* 博客卡片（替换了原来的 API 卡片） */}
          <Link
            className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-card backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/30 dark:hover:bg-slate-900/30"
            to="/blog"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  Latest Blog
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Reflections on Vibe Coding, technical workflows, and the future of AI development.
                </div>
              </div>
              <div className="mt-0.5 rounded-xl border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                /blog
              </div>
            </div>
            <div className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              Read Posts → 
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Modern documentation for AI-integrated workflows and philosophy.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}