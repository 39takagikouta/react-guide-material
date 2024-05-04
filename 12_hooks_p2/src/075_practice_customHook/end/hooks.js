import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState();
  const countUp = () => {
    setCount(count + 1);
  };
  return { count, countUp };
};
