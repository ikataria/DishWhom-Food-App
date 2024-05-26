import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Headers";
import Body from "./Body";
import Footer from "./Footer";

/************************************ Assignment 4 ************************************/
/**
 * Header
 *  - Logo
 *  - NavItems
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


const AppLayout = () => {
    return(
        <div className="AppLayout">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

/************************************ Assignment 3 ************************************/
/** Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”) */ 
/** Using reactElement */
// const heading1 = React.createElement("h1", { className: "title" }, "Heading1");
// const heading2 = React.createElement("h2", { className: "title" }, "Heading2");
// const heading3 = React.createElement("h3", { className: "title" }, "Heading3");
// const heading = React.createElement("div", { className: "container" }, [
//   heading1,
//   heading2,
//   heading3,
// ]);

// Q: Create the same element using JSX
// const heading1 = <h1 className="title">Heading1</h1>;
// const heading2 = <h2 className="title">Heading2</h2>;
// const heading3 = <h3 className="title">Heading3</h3>;
// const heading = (<div className="key">
//     {heading1}
//     {heading2}
//     {heading3}
// </div>)

// Q: Create a functional component of the same with JSX
// const heading1 = <h1 className="title">Heading1</h1>;
// const heading2 = <h2 className="title">Heading2</h2>;
// const heading3 = <h3 className="title">Heading3</h3>;
// const Heading = () => {
//     return (
//         <div className="title">
//             {heading1}
//             {heading2}
//             {heading3}
//         </div>
//     )
// }

// Q: Pass attribute into the tag in JSX
// const heading1 = <h1 className="title" >Heading1</h1>;
// const heading2 = <h2 className="title">Heading2</h2>;
// const heading3 = <h3 className="title" style={{"font-size": "54px"}}>Heading3</h3>;
// const heading = (<div className="key">
//     {heading1}
//     {heading2}
//     {heading3}
// </div>)

// Q: Composition of Component(Add a component inside another)
// const Body = () => {
//     return (
//         <div className="body">
//             <h2>This is body component</h2>
//         </div>
//     )
// }
// const Header = () => {
//     return (
//         <div className="head">
//             <h1>This is Head component</h1>
//              <Body/>
//         </div>
//     )
// }

// Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
// const element = <h1>This is title element</h1>; // element title
// const TitleComponent = () => { // Title component
//     return (
//         <div>
//             <h1>This is Title component</h1>
//         </div>
//     )
// }
// const Component3 = () => {
//     return (
//         <div>
//             {element}
//             {/* <h1>This is heading component3</h1> */}
//             <TitleComponent/>
//             <TitleComponent></TitleComponent>
//             <h1>This is body component3</h1>
//         </div>
//     )
// }

// Q: Create a Header Component from scratch using Functional Components with JSX
// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img src="https://img.freepik.com/premium-vector/lion-logo-design_334319-13.jpg?w=2000" alt="Logo" className="logo"/>
//             </div>
//             <div className="search-container">
//                 <textarea className="searchBar" id=""></textarea>
//                 <h1 className="search">Search</h1>
//             </div>
//             <div className="userIcon-container">
//                 <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="userIcon" className="userIcon"/>
//             </div>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);
