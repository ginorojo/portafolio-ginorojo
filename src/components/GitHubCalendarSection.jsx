import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubCalendarSection = () => {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px" }} className="w-full">
      <GitHubCalendar
        username="ginorojo"  // Cambia aquí por tu usuario real de GitHub
        blockSize={16}
        blockMargin={4}
        fontSize={16}
      />
    </div>
  );
};

export default GitHubCalendarSection;
