// Manipulation of DOM with Javascript
// const headingTag = document.createElement("h1");
// headingTag.innerHTML = "Hello world with Javascript!";
// const root = document.getElementById('root');
// root.appendChild(headingTag);

// Manipulation of DOM with React🚀
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    style: {
      background: "red",
    },
  },
  "Hello World with React 🚀🚀"
); // React element => Object

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    style: {
      background: "yellow",
    },
  },
  "This is heading 2"
);

const heading = React.createElement(
    "div",
    {
      id: "container",
      className: "container",
      style: {
        background: "grey",
        border: "2px solid black"
      },
    },
    [heading1, heading2]
  );
  

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the react element
root.render(heading);
