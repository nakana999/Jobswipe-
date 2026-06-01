import { useState } from "react";

export default function App() {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York",
    },
    {
      title: "Marketing Associate",
      company: "Growth Inc",
      location: "Miami",
    },
    {
      title: "Financial Analyst",
      company: "Capital Group",
      location: "Chicago",
    },
  ];

  const [index, setIndex] = useState(0);

  const swipe = () => {
    if (index < jobs.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "350px",
          boxShadow: "0 0 20px rgba(0,0,0,.1)",
          textAlign: "center",
        }}
      >
        <h1>JobSwipe</h1>

        <h2>{jobs[index].title}</h2>
        <p>{jobs[index].company}</p>
        <p>{jobs[index].location}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button onClick={swipe}>❌ Pass</button>
          <button onClick={swipe}>❤️ Apply</button>
        </div>
      </div>
    </div>
  );
}
