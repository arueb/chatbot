import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ResultsPanel from "../components/ResultsPanel";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const apiUrl = "http://localhost:3000/api/chatbot?query=";
    const queryString = textInput.replace(/[^a-z0-9+]+/gi, "+");
    try {
      const { data } = await axios.get(apiUrl + queryString);
      setResponse(data.answer);
      setTextInput("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="app">
      <Image src="/chatbot-img.png" alt="me" width="200" height="200" />
      <h1>Please ask me a question</h1>
      <p className="subheading">( and I'll try to give you an answer )</p>
      <input
        className="input form-control"
        value={textInput}
        onChange={(e) => setTextInput(e.currentTarget.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      ></input>
      <button
        className="btn btn-light"
        disabled={textInput.length === 0 ? "disabled" : ""}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {response && <ResultsPanel results={response} />}
    </div>
  );
}
