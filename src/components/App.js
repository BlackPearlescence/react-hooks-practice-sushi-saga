import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
  const [sushiData, setSushiData] = useState([]);
  const [page, setPage] = useState(4);
  const [budget, setBudget] = useState(1000);
  const [emptyPlates, setEmptyPlates] = useState([]);
  // const [isEaten, setIsEaten] = useState(false);
  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushi) => {setSushiData(sushi)})},[])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiData} 
      setSushiList={setSushiData} 
      page={page} 
      setPage={setPage}
      emptyPlates={emptyPlates}
      setEmptyPlates={setEmptyPlates}
      budget={budget}
      setBudget={setBudget}
      // isEaten={isEaten}
      // setIsEaten={setIsEaten}
      />
      <Table budget={budget} 
      plates={emptyPlates}/>
    </div>
  );
}

export default App;
