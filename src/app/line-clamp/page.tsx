export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPostCard />
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
        How I Achieved CSS Enlightenment by Adding 47 Classes to a Single Div
      </h2>

      <p className="line-clamp-3 text-gray-600 dark:text-gray-300">
        Fellow utility warriors, are you tired of writing actual CSS like some
        kind of amateur stylesheet peasant? Do you find yourself pathetically
        using semantic class names like &apos;button&apos; instead of the
        superior &apos;bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
        px-4 rounded shadow-lg transform hover:scale-105 transition-all
        duration-200 ease-in-out&apos;? Well, buckle up your flexboxes because
        I&apos;m about to drop some LIFE-ALTERING WISDOM that will literally
        reprogram your HTML. After studying the sacred Tailwind documentation
        for an entire weekend and achieving Utility-First Enlightenment,
        I&apos;ve discovered the secret to true developer happiness: never write
        custom CSS again, embrace the chaos of 73-character class names, and
        remember that if you&apos;re not using at least 15 utility classes per
        element, you&apos;re basically still writing CSS like it&apos;s 2005.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Published 2 days ago
        </span>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          Read more
        </button>
      </div>
    </div>
  );
}
