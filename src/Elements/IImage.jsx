import { useEffect, useRef, useState } from "react";

export default function IImage({
    children,
    width,
    o, ok
}) {
    let InRef = useRef();
    let DRef = useRef();
    let UpRef = useRef();
    let placeholder = useRef();
    let [url, seturl] = useState(o[ok]);
    useEffect((e) => {
        if (url == "") {
            DRef.current.classList.contains("hidden") || DRef.current.classList.add("hidden");
            InRef.current.classList.contains("hidden") && InRef.current.classList.remove("hidden");
            placeholder.current.classList.contains("hidden")&&placeholder.current.classList.remove("hidden");
        }
        else {
            DRef.current.classList.contains("hidden") && DRef.current.classList.remove("hidden");
            InRef.current.classList.contains("hidden") || InRef.current.classList.add("hidden");
            placeholder.current.classList.contains("hidden")||placeholder.current.classList.add("hidden");
        }
    }, [url]);
    return <div className="relative bg-gray-300 h-fit flex flex-wrap flex-col-reverse border-2 border-gray-300 rounded-xl overflow-hidden" style={{ width: `${width}px` }}>
        <div className="w-full">
            <input ref={InRef} className="w-full outline-none px-2 text-sm py-1" onDoubleClick={(e) => {
                UpRef.current.click();
            }} onChange={(e) => {
                if(e.currentTarget.value == ""){
                    placeholder.current.classList.contains("hidden")&&placeholder.current.classList.remove("hidden");
                }
                else{
                    placeholder.current.classList.contains("hidden")||placeholder.current.classList.add("hidden");
                }
                fetch(e.currentTarget.value).then(res => res.blob()).then(result => {
                    // if(result.type.split("/"))
                    if (result.type.split("/")[0] == "image") {
                        let filereader = new FileReader();
                        filereader.onload = (ev) => {
                            seturl(ev.target.result);
                            InRef.current.value = "";
                        }
                        filereader.readAsDataURL(result);
                    }
                    else {
                        console.log("not a image url");
                    }
                }).catch(err => { console.log("not a url") });
            }} />
            <div ref={DRef} className="relative w-full aspect-square items-center box-border justify-center flex hidden">
                <img src={url} className="max-w-full max-h-full m-1 box-border" onError={(e) => {
                    DRef.current.classList.contains("hidden") || DRef.current.classList.add("hidden");
                    InRef.current.classList.contains("hidden") && InRef.current.classList.remove("hidden");
                }}></img>
                <span className="absolute top-0 right-0 px-3 py-1 bg-red-500 cursor-pointer" onClick={(e) => {
                    seturl("");
                }}>X</span>
            </div>
        </div>
        <span className="text-center text-sm font-bold cursor-pointer" onClick={(e) => {
        }}>{children}</span>
        <input ref={UpRef} accept="image/*" type="file" className="hidden" onChange={(e) => {
            let filereader = new FileReader();
            filereader.onload = (ev) => {
                seturl(ev.target.result);
                e.target.value = "";
            }
            filereader.readAsDataURL(e.currentTarget.files[0]);
        }} />
        <span className="opacity-50 absolute px-3 py-1 text-sm pointer-events-none" ref={placeholder}>enter url or double tap</span>
    </div>
}