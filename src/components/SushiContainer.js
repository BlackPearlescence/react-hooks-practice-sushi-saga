import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushiList, page, setPage,emptyPlates, setEmptyPlates, setBudget, budget}) {

  const handleMoreButtonClick = (e) => {setPage(page + 4)}
  // const handleSushiClicked = (e) => {setIsEaten(!isEaten)}

  return (
    <div className="belt">
      {sushiList.slice(page-4,page).map(sushi => <Sushi 
      key={sushi.id} 
      sushiItem={sushi}
      emptyList={emptyPlates}
      setEmptyList={setEmptyPlates}
      setCash={setBudget}
      cash={budget}
      // onSushiEaten={handleSushiClicked}
      />
      )}
      
      <MoreButton onMoreButtonClick={handleMoreButtonClick} />
    </div>
  );
}

export default SushiContainer;
