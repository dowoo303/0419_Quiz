import { useState } from "react";
import Card from "./components/Card";
import C from "./components/C";
import axios from "axios";

function App() {
  const [word, setWord] = useState();

  const getWord = async () => {
    try {
      const response = await axios.get(`https://green-bush-5824.fly.dev`);

      console.log(response);
      setWord(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-center items-center">
      <button className="btn-style" onClick={getWord}>
        요청
      </button>
      <div>{word}</div>
    </div>
  );
}

export default App;
