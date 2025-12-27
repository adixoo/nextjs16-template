export default function NotFound() {
  return (
    <main className="relative flex grow flex-col items-center justify-center overflow-hidden p-4 py-12 md:py-20">
      {/* Decorative background element */}
      <div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="z-10 flex w-full max-w-240 flex-col items-center gap-10 text-center">
        {/* Illustration Area */}
        <div className="relative flex aspect-square w-full max-w-[320px] items-center justify-center">
          {/* Abstract illustration placeholder */}
          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat opacity-90 dark:opacity-80"
            data-alt="Abstract minimal geometric shape floating in empty space representing error"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6neqByrPwYZVtN2IEp3rKl0-uYKwSQ750JHjkhHD9f7sf3e2UlJoK5RUPj9YJjD-kP2wUTC63Bxmu_oudkBPKxwviEWSqYAKqv4QNwoqu1Z8kSWXFB3HWHPIeJdnP7Ie1BMa5d3qNpb1tNy5nJk9Ji8A9qcRcbtKjXyeZYxGLhzVfwWcsIhWsLlr3y5q6E3-MvMbKaSjrysnfKmDjnbt7ki9MemH2k6ROkSRPF42wc_YwQdxqwL22k0lO28R22pBYd8Hr8oTy8Fo")'
            }}
          ></div>
          {/* Floating icon overlay */}
          <div className="absolute -right-4 -bottom-4 flex items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-[#2a1a1a]">
            <span className="material-symbols-outlined text-primary text-4xl">
              broken_image
            </span>
          </div>
        </div>
        {/* Text Content */}
        <div className="flex max-w-140 flex-col items-center gap-4">
          <h1 className="text-primary text-8xl leading-none font-black tracking-tighter opacity-20 select-none md:text-9xl dark:opacity-40">
            404
          </h1>
          <h2 className="-mt-6 text-3xl font-bold tracking-tight text-[#181111] md:text-4xl dark:text-white">
            Page not found
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
            Oops! The page you are looking for doesn&pos;t exist or has been
            moved. We might have cleaned up a bit, but we&apos;re here to get
            you back on track.
          </p>
        </div>
        {/* Actions */}
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="bg-primary shadow-primary/20 flex h-12 w-full items-center justify-center gap-2 rounded-lg px-8 text-sm font-bold text-white shadow-lg transition-colors hover:bg-red-600 sm:w-auto">
            <span className="material-symbols-outlined text-[20px]">home</span>
            Go back home
          </button>
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 text-sm font-bold text-[#181111] transition-colors hover:bg-gray-50 sm:w-auto dark:border-gray-700 dark:bg-[#2a1a1a] dark:text-white dark:hover:bg-[#332222]">
            <span className="material-symbols-outlined text-[20px]">
              support_agent
            </span>
            Contact Support
          </button>
        </div>
        {/* Quick Links (Secondary Nav) */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <a className="hover:text-primary transition-colors" href="#">
            Help Center
          </a>
          <span className="my-auto h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <a className="hover:text-primary transition-colors" href="#">
            Status Page
          </a>
          <span className="my-auto h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <a className="hover:text-primary transition-colors" href="#">
            Report a Bug
          </a>
        </div>
      </div>
    </main>
  );
}
