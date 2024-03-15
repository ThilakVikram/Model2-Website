import { useEffect, useRef, useState } from "react";

/**
 * @param {string} children can be any
 * @param {int} width any int
 * @param {object} o should be {[ok]:{length,width,height}}
 * @param {String} ok should be the object key
 * @returns 
 */
export default function IDimension({
    children,
    width,
    o, ok
}) {
    let InRef = useRef();
    let [Dlength, setDlength] = useState(o[ok].length);
    let [Dwidth, setDwidth] = useState(o[ok].width);
    let [Dheight, setDheight] = useState(o[ok].height);
    let [Dunit, setDunit] = useState(o[ok].unit);
    useEffect((e) => {
        o[ok].length = Dlength;
        o[ok].width = Dwidth;
        o[ok].height = Dheight;
        o[ok].unit = Dunit;
    }, [Dlength,Dwidth,Dheight,Dunit]);
    return <div className="relative bg-gray-300 h-fit flex flex-wrap flex-col-reverse border-2 border-gray-300 rounded-xl overflow-hidden" style={{ width: `${width}px` }}>
        <div className="w-full flex text-sm">
            <input ref={InRef} type="number" className="w-1/3 border-gray-300 outline-none rounded-bl-xl px-2 py-1" value={Dlength} style={{ borderWidth: "1px" }} onInput={(e)=>{
                setDlength(e.currentTarget.value)
            }} />
            <input type="number" className="w-1/3 border-gray-300 outline-none px-2 py-1" value={Dwidth} style={{ borderWidth: "1px 2px" }} onInput={(e)=>{
                setDwidth(e.currentTarget.value)
            }} />
            <input type="number" className="w-1/3 border-gray-300 outline-none rounded-br-xl px-2 py-1" value={Dheight} style={{ borderWidth: "1px" }} onInput={(e)=>{
                setDheight(e.currentTarget.value)
            }}/>
        </div>
        <span className="relative text-center text-sm font-bold cursor-pointer flex" onClick={(e) => {
        }}><p className="w-full" onClick={(e)=>{
            InRef.current.focus();
        }}>{children}</p>
            <select className="absolute text-sm w-fit h-fit font-normal rounded-tr-xl right-0 bg-gray-300 outline-none" value={Dunit} onChange={(e)=>{
                setDunit(e.currentTarget.value);
            }}>
                <option value={"cm"}>cm</option>
                <option value={"in"}>in</option>
            </select>
        </span>
    </div>
}