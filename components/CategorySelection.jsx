// components/CategorySelection.jsx
import { useRouter } from "next/router";

export default function CategorySelection() {
  const router = useRouter();

  const handleSelect = (category) => {
    router.push(`/${category}`);
  };

  return (
    <div className="container">
      <h1>Select a Category</h1>
      <button onClick={() => handleSelect("gaming")} className="btn">Gaming</button>
      <button onClick={() => handleSelect("cooking")} className="btn">Cooking</button>
    </div>
  );
}