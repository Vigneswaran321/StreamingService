"use client";

import { useState } from "react";
import Link from "next/link";

// Sample headlines for demonstration
const sampleHeadlines = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

export default function News() {
  const [activeTab, setActiveTab] = useState("breaking");

  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar />
      <section>
        {" "}
        <div id="loop">
          <h1>
            <b>CYBER</b>FICTION IS THE{" "}
            <b>
              <i>REAL</i>
            </b>{" "}
            <span>STORY</span> IN THE{" "}
            <span>
              <i>METAVERSE.</i>
            </span>
          </h1>
        </div>
      </section>
      <section
        id="news"
        className="h-fit min-h-screen w-full flex relative items-center justify-center p-8"
      >
        <div className="w-full max-w-7xl">
          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-8">
            <Tab
              label="Breaking News"
              active={activeTab === "breaking"}
              onClick={() => setActiveTab("breaking")}
            />
            <Tab
              label="Sports News"
              active={activeTab === "sports"}
              onClick={() => setActiveTab("sports")}
            />
            <Tab
              label="Technology News"
              active={activeTab === "technology"}
              onClick={() => setActiveTab("technology")}
            />
          </div>

          {/* News cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleHeadlines.map((headline, index) => (
              <NewsCard key={index} headline={headline} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm sm:text-base font-bold ${
        active
          ? "text-fuchsia-500 bg-gray-100 border border-fuchsia-500 rounded-lg px-4 py-2"
          : "text-gray-500 hover:text-fuchsia-500"
      } transition-colors`}
    >
      {label}
    </button>
  );
}

function NewsCard({ headline }: { headline: string }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h3 className="text-lg font-bold">{headline}</h3>
    </div>
  );
}
function Navbar() {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <h3 className="font-bold">NEWGENIUS</h3>
        <ul className="flex gap-8">
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base">
            <Link href="/news">News</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
