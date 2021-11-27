/*eslint-disable*/
import React from "react";
import s from './HtmlViewer.module.css'

export default function HtmlViewer({htmlString}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
  );
}