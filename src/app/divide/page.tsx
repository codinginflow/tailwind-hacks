export default function Page() {
  const actresses = [
    "Jenna J.",
    "Lisa A.",
    "Riley R.",
    "Mia K.",
    "Sasha G.",
    "Tera P.",
    "Abella D.",
    "Brandi L.",
    "Adriana C.",
    "Angela W.",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          My Favorite Actresses
        </h2>
        <div className="divide-y divide-gray-200 dark:divide-gray-600">
          {actresses.map((actress) => (
            <div key={actress} className="py-3">
              <p className="text-gray-700 dark:text-gray-300">{actress}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
