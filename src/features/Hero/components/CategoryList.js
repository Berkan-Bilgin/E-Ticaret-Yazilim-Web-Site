import CategoryItem from "./CategoryItem";

const categories = [
  "kategori1",
  "kategori2",
  "kategori3",
  "kategori4",
  "kategori5",
  "kategori6",
  "kategori7",
  "kategori8",
  "kategori9",
  "kategori10",
];

const CategoryList = () => {
  return (
    <ul className="bg-red-500 px-2">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;
