import { Examples } from "./examples";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100">
            Tailwind Hacks
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tailwind tips and tricks you need to know, by{" "}
            <a
              href="https://www.youtube.com/c/codinginflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
            >
              Coding in Flow
            </a>
          </p>
        </div>

        <Examples />
      </div>
    </div>
  );
}
