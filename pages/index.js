import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Editor from "@/components/Editor";
import { useState } from "react";
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <>
      <div className="pane top-pane"></div>
        <Editor extension={[langs.html()]} displayName="HTML" value={html} onChange={setHtml} />
        <Editor extension={[langs.css()]} displayName="CSS" value={css} onChange={setCss} />
        <Editor extension={[langs.javascript()]} displayName="JS" value={js} onChange={setJs} />
      <div className="pane"></div>
    </>
  );
}
