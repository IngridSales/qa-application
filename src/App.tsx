import { useState } from "react";
import "./App.css";
interface Project {
  src: string;
  location: string;
  name: string;
}

const projects: Project[] = [
  {
    src: "https://seeklogo.com/images/R/robot-framework-logo-FED576FF0B-seeklogo.com.png",
    location: "https://github.com/IngridSales",
    name: "robot",
  },
  {
    src: "https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png",
    location: "https://github.com/IngridSales",
    name: "playwright",
  },
  {
    src: "https://static-00.iconduck.com/assets.00/cypress-icon-512x512-zi8589rq.png",
    location: "https://github.com/IngridSales",
    name: "cypress",
  },
  {
    src: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
    location: "https://github.com/IngridSales",
    name: "typescript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    location: "https://github.com/IngridSales",
    name: "python",
  },
];

function App() {
  const [isOn, setIsOn] = useState(true);
  return (
    <>
      <div>
        {projects.map(({ location, name, src }) => (
          <img
            src={src}
            className="logo react"
            alt="React logo"
            data-testId={"project-" + name}
            onClick={() => {
              window.location.href = location;
            }}
          />
        ))}
      </div>
      <h1>Lorem ipsum</h1>
      <div className="card">
        <button onClick={() => setIsOn(() => !isOn)}>
          {!isOn ? "Desligado" : "Ligado"}
        </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <p className="read-the-docs">Click on the logos to see the projects</p>
      <div>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
          className="logo react"
          alt="React logo"
          data-testId={"linkedin-logo"}
          style={{ height: "2em" }}
          onClick={() => {
            // window.location.href = location;
          }}
        />
        <img
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
          className="logo react"
          alt="React logo"
          data-testId={"linkedin-logo"}
          style={{ height: "2em" }}
          onClick={() => {
            // window.location.href = location;
          }}
        />
      </div>
    </>
  );
}

export default App;