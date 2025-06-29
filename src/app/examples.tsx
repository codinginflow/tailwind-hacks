"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Examples() {
  const [showExamples, setShowExamples] = useState(false);

  const examples = [
    { href: "/prose", title: "Prose" },
    { href: "/container", title: "Container" },
    { href: "/text-balance", title: "Text Balance" },
    { href: "/size", title: "Size" },
    { href: "/group", title: "Group" },
    { href: "/peer", title: "Peer" },
    { href: "/scroll-snap", title: "Scroll Snap" },
    { href: "/line-clamp", title: "Line Clamp" },
    { href: "/odd-even", title: "Odd/Even" },
    { href: "/divide", title: "Divide" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <button
          onClick={() => setShowExamples(!showExamples)}
          className="flex cursor-pointer items-center gap-2 text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          {showExamples ? "Hide examples" : "Show all examples"}
          {showExamples ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </button>
      </div>

      {showExamples && (
        <div className="mx-auto max-w-2xl">
          <ul className="grid gap-3 sm:grid-cols-2">
            {examples.map((example) => (
              <li key={example.href}>
                <Link
                  href={example.href}
                  className="block rounded-lg border border-gray-200 bg-white px-4 py-3 text-center font-medium text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-green-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-green-400"
                >
                  {example.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
