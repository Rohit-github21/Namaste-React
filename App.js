import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1 id="heading">Namaste React Using Jsx</h1>;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(jsxheading);

//React Element

const heading = (
<h1 className="react">Namaste React Functional Component</h1>
);

// React Functional Component

const fn = () => true;

const fn2 = () => {
  return true;
};

const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}

const HeadingComponent3 = () => (
  <div id="main">
    <h1 className="head">Namaste React Functional Component</h1>
  </div>
);

const HeadingComponent2 = () =>  <h1>Namaste React Functional Component</h1>

root.render(<HeadingComponent3 />);
root.render(<HeadingComponent />);