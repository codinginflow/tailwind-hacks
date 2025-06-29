export default function Page() {
  const people = [
    {
      name: "Chad Optimizington",
      title: "Chief Synergy Evangelist",
      email: "chad.buzzwords@corp.com",
    },
    {
      name: "Bryce Disruptington",
      title: "Senior Paradigm Shifter",
      email: "bryce.disrupts@innovation.biz",
    },
    {
      name: "Madison Leverage",
      title: "VP of Low-Hanging Fruit",
      email: "madison.lowfruit@consulting.pro",
    },
    {
      name: "Tyler Blockchain",
      title: "Director of Circle-Back Operations",
      email: "tyler.circles@meetings.org",
    },
    {
      name: "Ashley Pivot",
      title: "Chief Ideation Catalyst",
      email: "ashley.brainstorms@creative.ninja",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto">
        <table className="mx-auto border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-100">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-100">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-100">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr
                key={person.email}
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950"
              >
                <td className="border border-gray-300 px-4 py-2 text-gray-900 dark:border-gray-600 dark:text-gray-100">
                  {person.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-900 dark:border-gray-600 dark:text-gray-100">
                  {person.title}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-900 dark:border-gray-600 dark:text-gray-100">
                  {person.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
