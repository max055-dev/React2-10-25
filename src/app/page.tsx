import Image from "next/image";
import natuurImage from "./Assets/natuur.webp"; // pad relatief aan page.tsx

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
          <div key={card} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={natuurImage}
              alt="Natuur in Europa"
              className="w-full h-50 object-cover"
              width={400}
              height={160}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Natuurplek {card}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Ontdek de mooiste natuur in Europa. Bergen, fjorden, bossen en meer.
              </p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Lees meer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
