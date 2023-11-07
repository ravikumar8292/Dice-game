import React, { useState } from 'react'
import './secondpage.css'
import styled from "styled-components";

const Secondpage = () => {

  const[score , setScore] = useState(0);
  const[error, setError] = useState("");
  const[showRules, setShowRules] = useState(false);

  const [selectedNumber, seteSlectedNumber] = useState();

  const [currentDice , setCurrentDice] = useState(1);

  const generateRandomNumber = (min , max)=> {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = ()=> {

    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev)=> prev + randomNumber);
  }
  else{
    setScore((prev)=> prev - 2);
  }
  seteSlectedNumber(undefined);
 

  };

  const numberSelecterHandler = (value)=>{
    seteSlectedNumber(value);
    setError("");
  };

  const resetScore = ()=>{
    setScore(0);
  }

  return (
      <div className="content1">
        <div className="nav">
            <div className="comp-select">
                  <div className="total_score"><p>{score}</p></div>
                  <div className="showscore">
                  <p>Total Score</p>
                  </div>
            </div>

            <div className="huma-select">
            <div className="warning"><p>{error}</p></div>
                <div className="btn">
                <Button isSelected={1 === selectedNumber} onClick={()=> numberSelecterHandler(1)}><p>1</p></Button>
                <Button isSelected={2 === selectedNumber} onClick={()=> numberSelecterHandler(2)}><p>2</p></Button>
                <Button isSelected={3 === selectedNumber} onClick={()=> numberSelecterHandler(3)}><p>3</p></Button>
                <Button isSelected={4 === selectedNumber} onClick={()=> numberSelecterHandler(4)}><p>4</p></Button>
                <Button isSelected={5 === selectedNumber} onClick={()=> numberSelecterHandler(5)}><p>5</p></Button>
                <Button isSelected={6 === selectedNumber} onClick={()=> numberSelecterHandler(6)}><p>6</p></Button>
                </div>
                <div className="para">
                    Select Number
                </div>
            </div>
        </div>
        <div className="comp-image-div">
            <div className="comp-image" onClick={roleDice}><img src={`./ludoimages/dice_${currentDice}.png`} alt="" /></div>
            <div className="cont">
              <p>Click on dice to roll</p>
            </div>
            <div className="firstbtn"><button onClick={resetScore}><p>Reset Score</p></button></div>
            <div className="secondbtn"> <button onClick={()=> setShowRules((prev)=> !prev)} ><p>{showRules? "Hide" : "Show"} Rule</p></button></div>
        </div>

        <div className="showhide">
        {showRules ?
          <div className="show-rule">
            <h2>How to play dice game</h2>
            <p>Select any Number</p>
            <p>Click on the dice image</p>
            <p>after click on the dice if selected number is equal to dice number you will get some point as dice</p>
            <p>if you get wrong guess then 2 point will be deducted</p>
        </div>
        : null
        } 
     
        </div>
      </div>
  )
}

export default Secondpage;

const Button = styled.button`

    background-color: ${(props)=> (props.isSelected ? "black" :"white")};
    color: ${(props)=> (!props.isSelected ? "black" :"white")};
`


