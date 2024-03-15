import { useEffect, useRef, useState } from "react";

export default function IShort({
    children,
    width,
    o,ok
}){
    let placeholder = useRef();
    let InRef = useRef();
    let [output,setoutput] = useState(o[ok]);
    useEffect((e)=>{
        if(output == ""){
            placeholder.current.classList.contains("hidden")&&placeholder.current.classList.remove("hidden");
        }
        else{
            placeholder.current.classList.contains("hidden")||placeholder.current.classList.add("hidden");
        }
        o[ok] = output;
    },[output]);
    return <div className="relative bg-gray-300 h-fit flex flex-wrap flex-col-reverse border-2 border-gray-300 rounded-xl overflow-hidden" style={{width:`${width}px`}}>
        <input ref={InRef} className="w-full outline-none px-2 text-sm py-1" value={output} onInput={(e)=>{
            setoutput(e.currentTarget.value);
        }}/>
        <span className="text-center text-sm font-bold cursor-pointer" onClick={(e)=>{
            InRef.current.focus();
        }}>{children}</span>
        <span className="opacity-50 absolute px-3 py-1 text-sm pointer-events-none" ref={placeholder}>Short Ans</span>
        </div>
}