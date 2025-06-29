import { Download, MoreHorizontal, Star } from "lucide-react";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ApplicationCard />
    </div>
  );
}

function ApplicationCard() {
  return (
    <div className="group relative mx-auto max-w-sm space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <button className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <MoreHorizontal className="size-5 text-gray-600" />
      </button>

      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          My Virtual Girlfriend
        </h3>
        <p className="text-sm text-gray-500">Mobile application</p>
      </div>

      <DownloadSection />
    </div>
  );
}

function DownloadSection() {
  return (
    <div className="group/download flex items-center justify-between rounded-md border border-gray-200 p-3 transition-colors group-hover/download:bg-gray-50">
      <div className="flex items-center gap-1">
        <Star className="size-4 text-gray-400 transition-colors group-hover/download:text-yellow-400" />
        <span className="text-sm text-gray-600 transition-colors group-hover/download:text-gray-900">
          4.8 rating
        </span>
      </div>

      <button className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700 transition-colors group-hover/download:bg-green-500 group-hover/download:text-white">
        <Download className="size-4" />
        Download
      </button>
    </div>
  );
}
