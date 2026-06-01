import { useState } from "react";

export default function App() {
  const jobs = [
    { title: "Software Engineer", company: "Tech Corp", location: "New York" },
    { title: "Marketing Associate", company: "Growth Inc", location: "Miami" },
    { title: "Financial Analyst", company: "Capital Group", location: "Chicago" },
  ];

  const [index, setIndex] = useState(0);

  const nextJob = () => {
    if (index < jobs.length - 1) setIndex(index + 1);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>JobSwipe</h1>
      <h2>{jobs[index].title}</h2>
      <p>{jobs[index].company}</p>
      <p>{jobs[index].location}</p>
      <button onClick={nextJob}>Next Job</button>
    </div>
  );
}
