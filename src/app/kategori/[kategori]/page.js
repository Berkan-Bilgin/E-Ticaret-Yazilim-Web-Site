// app/kategori/[kategori]/page.js
import ProductCatalog from "@/features/ProductCatalog/ProductCatalog";

export default function CategoryPage({ params }) {
  const { kategori } = params; // params ile dinamik olarak kategori değerini alıyoruz

  return (
    <div className="container bg-gray-100 ">
      <h1>Ürün Listesi: {kategori}</h1>
      <hr />
      <ProductCatalog />
    </div>
  );
}
