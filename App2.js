// ✅ JSX Rule:
// Anything inside {} is treated as JavaScript, not plain text.

import React from "react";
import ReactDOM from "react-dom/client";

// This is a JSX expression that creates a React element
// JSX is compiled to React.createElement(...), and inside that call, anything inside {} becomes part of the JavaScript runtime logic.

const elem = <span>React element</span>


// JSX in react Element

const title = (
  <h1 className="head" tabIndex= "5">
    {elem}
    Namaste React using Jsx
    </h1>
);
// React Component
 // Rohit yadav

const Title = () => (
  <h1 className="head" tabIndex= "5">
    Namaste React using Component
    </h1>
);

const HeadingComponent = () => (
  <div id="container"> 
     {Title()}          {/* Valid: calling the component like a function */}
    <Title />          {/* Preferred: JSX way to render components */}
    <Title></Title>    {/* Also valid: JSX with opening and closing tag */}

    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
{title}              {/*     we have render both */}
<HeadingComponent />
 </>
); // react Component
// root.render(title); // react element
