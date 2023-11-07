import "./firstpage.css";

const firstpage = ({toggle}) => {
  return (
    <div className="container">
      <div className="content">
        <div className="ludoicon">
          <img src="./ludoimages/dices.png" alt="" srcset="" />
        </div>
        <div className="heading">
          <div className="head">
            <h1>Dice Game</h1>
          </div>
          <div className="button">
             <button onClick={toggle}>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstpage;
