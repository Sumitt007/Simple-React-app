import React, { useState } from "react";

// short circuit evalution
export const ShortCirEva = () => {
  const [demo, setDemo] = useState("");
  return (
    <div>
      <h1 className="h1Style">
        {demo || (
          <>
            <h1>vinod</h1>
            <p> "hi, how are you?"</p>
          </>
        )}
      </h1>
      <h2 className="h1Style">i m the best</h2>
    </div>
  );
};
