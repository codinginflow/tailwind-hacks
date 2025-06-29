import lotti1 from "@/assets/lotti1.jpeg";
import lotti2 from "@/assets/lotti2.jpg";
import lotti3 from "@/assets/lotti3.jpeg";
import lotti4 from "@/assets/lotti4.jpeg";
import lotti5 from "@/assets/lotti5.jpg";
import Image from "next/image";

export default function Page() {
  const images = [lotti1, lotti2, lotti3, lotti4, lotti5];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-600 dark:bg-gray-800">
        <SnapPointIndicator />
        <div className="flex snap-x gap-4 overflow-x-auto px-64">
          {images.map((image, index) => (
            <div key={index} className="flex-none snap-center">
              <Image
                src={image}
                alt={`Lotti ${index + 1}`}
                className="h-80 w-64 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SnapPointIndicator() {
  return (
    <div className="absolute top-0 left-1/2 z-10 h-full w-0.5 -translate-x-1/2 bg-red-500 opacity-50"></div>
  );
}
