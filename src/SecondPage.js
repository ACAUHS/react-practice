import { useState } from "react";
import bread1 from "./assets/bread1.jpg"
import bread2 from "./assets/bread2.jpg"

export default function SecondPage() {
    return (<div className="flex mainContent">
      <BakeryItem breadName="Sourdough" breadImage={bread1}>This is the description</BakeryItem>
      <BakeryItem breadName="Hot dog bun" breadImage={bread2}>This is another description</BakeryItem>
      <BakeryItem breadName="bagel" breadImage={bread1}>I love eating bread with peanut butter</BakeryItem>
    </div>)
}

const BakeryItem = ({breadName, breadImage, children}) => { 
    
    const [open, setOpen] = useState(false);

    const handleClick = event => {
        setOpen(current => !current);
    }

    return (
        <div className="breadCard flex">
            <h4 onClick={handleClick}>{breadName}</h4> 
            {open &&
            <div>
                <img src={breadImage} />
                <div>{children}</div>
            </div>}
        </div>
    )}