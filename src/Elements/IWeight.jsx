import { useEffect, useRef, useState } from "react";

/**
 * 
 * @param {object} o should be like {[ok]:{value,unit}} 
 * @returns 
 */
export default function IWeight({
    children,
    width,
    o, ok
}) {
    let InRef = useRef();
    let [output, setoutput] = useState(o[ok].value);
    let [Dunit,setDunit] = useState(o[ok].unit)
    useEffect((e) => {
        o[ok].value = output;
        o[ok].unit = Dunit;
    }, [output,Dunit]);
    return <div className="relative bg-gray-300 h-fit flex flex-wrap flex-col-reverse border-2 border-gray-300 rounded-xl overflow-hidden" style={{ width: `${width}px` }}>
        <div className="flex relative">
            <input ref={InRef} type="number" className="w-full outline-none px-2 text-sm py-1" value={output} onInput={(e) => {
                setoutput(e.currentTarget.value);
            }} />
            <select className="absolute right-0 text-sm h-full border-l-2 border-gray-300 outline-none" value={Dunit} onChange={(e)=>{
                setDunit(e.currentTarget.value);
            }}>
                <option>kg</option>
                <option>lb</option>
            </select>
        </div>
        <span className="text-center text-sm font-bold cursor-pointer" onClick={(e) => {
            InRef.current.focus();
        }}>{children}</span>
    </div>
}