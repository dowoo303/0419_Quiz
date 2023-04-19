import { useState } from "react";
import Card from "./components/Card";
import C from "./components/C";
import axios from "axios";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-row justify-center items-center gap-2">
      <C />
    </div>
  );
}

export default App;
