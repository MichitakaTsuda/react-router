import { BrowserRouter, Link } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link>Home</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
}
