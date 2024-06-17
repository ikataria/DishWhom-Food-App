import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const { singleCategory } = props;
     
    const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        !showItems ? setShowItems(true) : setShowItems(false);  
    }
    // console.log("Clicked value:", showItems)
    
    return (
        <div className="mt-5 border-b-8 gray-black">
            <div className="flex justify-between shadow-md p-2 cursor-pointer" onClick={handleClick}> 
                <span className="font-extrabold text-xl">{singleCategory?.title}({singleCategory?.itemCards?.length || singleCategory?.categories?.length})</span>
                <span>🔻</span>
            </div>
            <div>
                { showItems && <ItemList key={1} categoryItems = {singleCategory?.itemCards || singleCategory?.categories}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;