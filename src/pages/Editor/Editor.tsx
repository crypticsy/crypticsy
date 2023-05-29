import "./Editor.css";

import React, { Dispatch, useState, useEffect } from "react";

function createEditorArea(name: string, value: string, setValue: Dispatch<string>) {

  return (<div className="bg-slate-700 rounded-lg mb-6">
    <p className="pl-4 py-2 text-xs tracking-wide"> {name.toUpperCase()}</p>
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

        <div className="bg-slate-500 h-full w-full rounded-lg" id="output">

        </div>

      </div>


    </div>
  );
};

export default Editor;