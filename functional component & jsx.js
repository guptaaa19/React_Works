//App.js

import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

//React Functional Componenet: it returns some jsx element

const number = 100000;

//Component Composition:
const HeadingComponent = () => (
    <div id="container">
        <h2>{number}</h2>
        {console.log("heehehehehhe!")}
    {/* {Title} this makes go our app in infinite loop */}
    <h1 className="heading">Hello to Functioanl Componenets!</h1>;
    </div>
);
//can write any js in {} in the functional



//puting element in an element:
const Title = (  //This is react element
    <h1 className="title">
        {elem}
        Hello Title!
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        {HeadingComponent ()}

        {/* all the above fn calls are same and can call as many times */}
        </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent />) ; //This is how we render functional componenet earlier we were rendering the element and now componenets thats why syntax difference.

//{}: we can also call js functoion too

root.render(Title);
