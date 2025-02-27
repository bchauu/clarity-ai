// components/Recommendations.jsx
import { useRouter } from "next/router";

export default function Recommendations() {
  const router = useRouter();
  const { category } = router.query;
  const recommendations = category === "gaming" ? [
    "The Witcher 3", "Dark Souls 3", "Resident Evil 4"
  ] : [
    "Air Fryer", "Japanese Chef Knife", "Sous Vide Machine"
  ];

  return (
    <div className="container">
      <h1>AI Recommendations for {category}</h1>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => router.push("/")}>Start Over</button>
    </div>
  );
}