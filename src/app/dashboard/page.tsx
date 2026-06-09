"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: "home", active: true },
  { label: "Properties", icon: "building", active: false },
  { label: "Clients", icon: "users", active: false },
  { label: "Deals", icon: "handshake", active: false },
  { label: "Reports", icon: "chart", active: false },
];

const stats = [
  { label: "Total Properties", value: "124", change: "+12%", color: "blue" },
  { label: "Active Clients", value: "89", change: "+8%", color: "green" },
  { label: "Open Deals", value: "34", change: "+23%", color: "purple" },
  { label: "Revenue (MTD)", value: "\u20b918.5L", change: "+15%", color: "orange" },
];

const recentDeals = [
  { id: 1, property: "3BHK Flat - Whitefield", client: "Rajesh Sharma", amount: "\u20b985L", status: "Negotiation" },
  { id: 2, property: "Villa - Electronic City", client: "Priya Patel", amount: "\u20b91.2Cr", status: "Closed Won" },
  { id: 3, property: "2BHK - Koramangala", client: "Amit Kumar", amount: "\u20b972L", status: "Viewing" },
  { id: 4, property: "Plot - Devanahalli", client: "Sneha Reddy", amount: "\u20b945L", status: "Lead" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center gap-3 px-6 h-16 border-b border-gray-200">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900">CRM<span className="text-blue-600">Estate</span></span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                {item.icon === "home" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                  </svg>
                )}
                {item.icon === "building" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )}
                {item.icon === "users" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197V21" />
                  </svg>
                )}
                {item.icon === "handshake" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {item.icon === "chart" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Powered by{" "}
            <a href="https://trishulhub.in" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:text-blue-400">
              TrishulHub
            </a>
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              U
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600 font-medium mt-1">{stat.change} from last month</p>
              </div>
            ))}
          </div>

          {/* Recent Deals */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Recent Deals</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Property</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Client</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Amount</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentDeals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{deal.property}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{deal.client}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{deal.amount}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            deal.status === "Closed Won"
                              ? "bg-green-100 text-green-700"
                              : deal.status === "Negotiation"
                              ? "bg-yellow-100 text-yellow-700"
                              : deal.status === "Viewing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {deal.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
