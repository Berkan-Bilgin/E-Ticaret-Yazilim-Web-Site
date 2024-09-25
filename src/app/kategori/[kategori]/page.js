// app/kategori/[kategori]/page.js
import ProductCatalog from "@/features/ProductCatalog/ProductCatalog";

export default function CategoryPage({ params }) {
  const { kategori } = params;

  return (
    <div className="bg-gray-100">
      <div className="container ">
        <h1 className="text-3xl font-semibold text-text-primary  py-4">
          Ürün Listesi: {kategori}
        </h1>
        <ProductCatalog />
      </div>
    </div>
  );
}
