import "./Editor.css";
import React, { Dispatch, useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function createEditorArea(name: string, value: string, setValue: Dispatch<string>) {

  return (<div className="bg-slate-700 rounded-lg mb-6">
    <div className="pl-4 py-2 flex text-xs items-center">
      {
        name === "html" ?
          <FaHtml5 className="mr-2" />
          : name === "css" ?
            <FaCss3Alt className="mr-2" />
            : <IoLogoJavascript className="mr-2" />
      }
      <p className="tracking-wide"> {name.toUpperCase()}</p>
    </div>

    <textarea
      className="w-full h-full p-4 rounded-lg leading-6"
      value={value}
      placeholder="// some content"
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { setValue(event.target.value) }}
    />
  </div>)
}

function Editor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    const outpot = document.getElementById("output");
    if (outpot) {
      outpot.innerHTML = html + "<style>" + css + "</style>" + "<script>" + js + "</script>"
    }
  }
    , [html, css, js])


  return (
    <div className="h-full w-full p-8 grid grid-cols-2">
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>

      <div className="p-4 grid grid-rows-3 gap-8">
        {createEditorArea("html", html, setHtml)}
        {createEditorArea("css", css, setCss)}
        {createEditorArea("js", js, setJs)}
      </div>

      <div className="p-4">

        <div className="bg-[#1a1a1a] text-white h-full w-full rounded-lg" id="output">
        </div>

      </div>


    </div>
  );
};

export default Editor;