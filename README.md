# Namaste React!

# parcel
dev Build
Local server
HMR - Hot Module Replacement
File Watching ALgorithm - Written in C++
caching - Faster Builds
Image optimization
Minification
Bundling
Compressing
Consistent Hashing
Code Spiliting
Differential Bundling - support older Browser
Diagnostic
Error Handling
Https 
Tree Shaking - remove unused code
 web dev and production

 *********This is Core React******

  const heading = React.createElement("h1", {id: "heading",}, "Hello World From React!");

 console.log(heading) // object
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);

 ReactElement(object) => HTML(Browser Understand)
const parent = React.createElement( "div",{id: "parent"},
    React.createElement(
        "div",{id: "child"},[
React.createElement("h1",{},"I am H1 Tag"),
React.createElement("h2",{},"I am H2")
]),
React.createElement(
    "div",{id: "child2"},[
React.createElement("h1",{},"I am H1 Tag"),
React.createElement("h2",{},"I am H2 Tag")
]),
);

// assign the root in the browser and inject in the div in html.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


React.createElement => ReactElement-JS Object => HtmlElement(render)

JSX => React.createElement =>  ReactElement-JS Object => HtmlElement(render)