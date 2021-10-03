import "./styles.css";
import Component from "./Component.js";

export default function App() {
  const name = "Hell";
  const name2 = "Yup";
  return (
    <Component
      title="Hello, world!"
      value={<pre> {name === undefined ? name2 : name}</pre>}
    />
  );
}
