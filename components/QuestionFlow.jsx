// components/QuestionFlow.jsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function QuestionFlow() {
  const router = useRouter();
  const { category } = router.query;
  const [step, setStep] = useState(0);
  const questions = category === "gaming" ? [
    "What genre do you prefer?",
    "Do you like multiplayer or single-player?",
    "Do you prefer fast-paced or slow-paced games?"
  ] : [
    "What type of meal are you preparing?",
    "What ingredients do you have?",
    "Do you have any dietary restrictions?"
  ];

  return (
    <div className="container">
      <h2>{questions[step]}</h2>
      <input type="text" className="input" placeholder="Your answer" />
      <button onClick={() => setStep(step - 1)} disabled={step === 0}>Back</button>
      <button onClick={() => step < questions.length - 1 ? setStep(step + 1) : router.push(`/recommendations?category=${category}`)}>Next</button>
    </div>
  );
}