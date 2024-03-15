import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import IShort from "./Elements/IShort";
import ILong from "./Elements/ILong";
import IDimension from "./Elements/IDimension";
import IWeight from "./Elements/IWeight";
import IImage from "./Elements/IImage";
let root = ReactDom.createRoot(document.getElementById("root"));

function Main() {
    let elementwidth = 200;
    let a = "https://m.media-amazon.com/images/I/71bnH6YuK9L._AC_SL1500_.jpg";
    let obj = {
        name: { type: "short", ans: "sunshade" },
        description: { type: "long", ans: "water" },
        dimension: { type: "dimension", ans: { length: "12", width: "12", height: "20", unit: "in" } },
        weight: { type: "weight", ans: { value: "120", unit: "lb" } },
        image: { type: "image", ans: a }
    }
    return <>
        <div>
            <p>Add Button</p>
            <select className=" text-center" onChange={(e)=>{
                
            }}>
                <option value={"Short"}>Add+</option>
                <option value={"Short"}>Short</option>
                <option value={"Long"}>Long</option>
                <option value={"Image"}>Image</option>
                <option value={"Dimension"}>Dimension</option>
                <option value={"Weight"}>Weight</option>
            </select>
        </div>
        <div className=" flex flex-wrap bg-yellow-200 w-full">
            {Object.keys(obj).map(val => {
                return <div className="" style={{ padding: "20px" }}>{Element(obj, val, elementwidth)}</div>;
            })}
        </div>
        <button onClick={(e) => {
            console.log(obj)
        }}>click</button>
    </>
}

root.render(<Main />);

function Element(obj, val, elementwidth) {
    switch (obj[val].type) {
        case "short": {
            return <IShort o={obj[val]} ok="ans" width={elementwidth}>{val}</IShort>
        }
            break;
        case "long": {
            return <ILong o={obj[val]} ok="ans" width={elementwidth}>{val}</ILong>
        }
            break;
        case "dimension": {
            return <IDimension o={obj[val]} ok="ans" width={elementwidth}>{val}</IDimension>
        }
            break;
        case "weight": {
            return <IWeight o={obj[val]} ok="ans" width={elementwidth}>{val}</IWeight>
        }
            break;
        case "image": {
            return <IImage o={obj[val]} ok="ans" width={elementwidth}>{val}</IImage>
        }
            break;
        default:
            break;
    }
}