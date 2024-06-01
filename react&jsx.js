//App.js
import React from "react";
import ReactDOM from "react-dom/client";

//pure React:
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React"
);
console.log(heading);

//jsx (it is transpiled before it reaches the js engine) -> Parcel -> Bebel
const jsxHeading = <h1>Nanaste React using JSX</h1>
console.log(jsxHeading);

//these two will get out the same console output object.just that react syntax is not developer friendly, thats why we use jsx.
// JSX React.createE1ement => ReactE1ement => JS Object => HTMLEIement(render)
// attributes in jsx are in camelcase.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading ) ;

