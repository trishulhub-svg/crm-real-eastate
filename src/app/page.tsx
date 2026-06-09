import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">CRM<span className="text-blue-600">Estate</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Real Estate CRM Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Manage Properties.<br />
            Close Deals.<br />
            <span className="text-blue-600">Grow Faster.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            The all-in-one CRM built for real estate professionals. Track listings, manage clients, automate follow-ups, and close more deals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Start Free Trial
            </Link>
            <a
              href="#features"
              className="text-gray-700 px-8 py-3.5 rounded-xl text-base font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Manage Real Estate</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From lead capture to deal closing, our CRM handles every step of your real estate workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Property Management",
                desc: "Add, organize, and track all your property listings in one place. Upload photos, set pricing, manage availability status effortlessly."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Client CRM",
                desc: "Track every client interaction, manage contacts, schedule viewings, and never miss a follow-up with automated reminders and activity logs."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Analytics & Reports",
                desc: "Get real-time insights on deal pipeline, revenue forecasts, agent performance, and market trends with beautiful visual dashboards."
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started in 3 Steps</h2>
            <p className="text-gray-600">Up and running in minutes, not weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Add Your Properties", desc: "Import or manually add your property listings with photos, pricing, and details." },
              { step: "2", title: "Manage Clients", desc: "Track leads, schedule viewings, and maintain a complete history of every client interaction." },
              { step: "3", title: "Close Deals Faster", desc: "Use automated follow-ups, pipeline tracking, and analytics to close more deals in less time." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
              </svg>
            </div>
            <span className="text-white font-bold">CRM<span className="text-blue-400">Estate</span></span>
          </div>
          <p className="text-xs">
            Built with ❤️ by{" "}
            <a
              href="https://trishulhub.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              TrishulHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
