// create nesting:
/* <div>
    <div>
        <h1></h1>
        <h2></h2>   (sibling)
    </div>
</div>
if a div has multiple children then you can pass it as array, as shown in the code:

ReactElement(Object) = HTML(Browser understands)

ReactElement: ("what type of tag it is", {object}, "children")
*/

const parent = React.createElement(
    "div",
    { id: "parent"},
    React.createElement("div", {id: "child"}, 
    [React.createElement("h1", {}, "Hello Im h1 tag!" ), 
    React.createElement("h2", {}, "Hello Im h2 tag!" )] //passed as an array(siblings)
    ));

console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
