import { useState } from "react";

export default function SecondPage() {
    return (<div>
      <BakeryItem breadName = "Sourdough"></BakeryItem>
      <BakeryItem breadName = "Hot dog bun"></BakeryItem>
      <BakeryItem breadName = "bagel"></BakeryItem>
    </div>)
}

function BakeryItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h4>{props.breadName}</h4>
            <img src={props.breadImage} />
            <div className="breadDescription">{props.children}</div>
        </div>
    )
}