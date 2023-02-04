import React, {useState} from "react";

function Sushi({sushiItem, emptyList, setEmptyList, setCash, cash}) {

  const [isEaten, setIsEaten] = useState(false);

  const handleSushiClicked = (e) => {
    setIsEaten(!isEaten)
    setEmptyList([...emptyList, sushiItem])
    console.log(cash)
    console.log(sushiItem.price)
    setCash(cash - sushiItem.price)
    console.log(emptyList)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClicked}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushiItem.img_url}
            alt={sushiItem.name +  "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiItem.name} - ${sushiItem.price}
      </h4>
    </div>
  );
}

export default Sushi;
