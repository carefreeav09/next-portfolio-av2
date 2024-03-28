import React, { useRef } from "react";

const TestSection = ({ color }: { color: string }) => {
  const ref = useRef(null);

  return (
    <section
      className="h-screen"
      style={{
        scrollSnapAlign: "center",
        perspective: "500px",
      }}
    >
      <div className={`h-screen w-screen ${color}`} ref={ref}>
        TestSection
      </div>
    </section>
  );
};

export default TestSection;
