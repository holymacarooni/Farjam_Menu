import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCategory from '@/components/MenuCategory';
import { menuCategories } from '@/data/menuData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {menuCategories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}

