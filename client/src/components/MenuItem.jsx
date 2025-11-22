export default function MenuItem({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={e => {
            e.target.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23e5e7eb" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Item Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 text-right">
          {item.name}
        </h3>

        {/* Ingredients */}
        <p className="text-sm text-gray-600 mb-4 text-right flex-grow">
          {item.ingredients}
        </p>

        {/* Price */}
        <div className="flex items-center pt-3 border-t border-gray-200">
          <span className="text-2xl font-bold text-amber-600">
            {item.price}
          </span>
          <span className="text-sm pr-2 text-gray-500">تومان</span>
        </div>
      </div>
    </div>
  );
}
