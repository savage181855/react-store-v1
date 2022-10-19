import { memo } from "react";
import { useStore } from "../store";


function A() {
  const store = useStore();
  const { count } = store.usePicker(["count", "increment"]);
  console.debug("A rendered");
  return (
    <div>
      <h2>I'm the A</h2>
      <div>number：{count}</div>
    </div>
  );
}

export default memo(A);
