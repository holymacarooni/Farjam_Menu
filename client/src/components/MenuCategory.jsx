import MenuItem from "./MenuItem";

export default function MenuCategory({ category }) {
  return (
    <section className="mb-12">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-amber-600">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-4xl font-bold text-gray-800 text-right">
          {category.name}
        </h2>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
