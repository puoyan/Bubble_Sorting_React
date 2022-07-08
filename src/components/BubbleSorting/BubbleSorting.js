import "./BubbleSorting.css";
import React, { useState } from "react";

const BubbleSorting = () => {
  //----------------------Random Numbers Array---------------------
  const [randomNumbersArray, setRandomNumbersArray] = useState([]);
  //----------------------Random List Dom--------------------------
  const randomNumberList = randomNumbersArray.map((item, index) => (
    <div className="column" style={{ height: item }} key={index}>
      {item}
    </div>
  ));
  //--------------------Show Numbers-----------------------------

  const [showNumbers, setShowNumbers] = useState(false);
  //-------------------Random Generator Function-----------------

  const randomGenerator = () => {
    let randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.round(Math.random() * 100));
    }
    setRandomNumbersArray(randomNumbers);
    SortingArray(randomNumbers);
  };
  //------------------SortingArray  Function-------------------
  const SortingArray = (randomNumbers) => {
    let sortedArray = [...randomNumbers];
    let temp;
    let flag = false;

    for (let i = 0; i < sortedArray.length - 1; i++) {
      console.log(sortedArray[i] + " " + sortedArray[i + 1]);

      if (sortedArray[i] < sortedArray[i + 1]) {
        temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
      }
    }

    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] < sortedArray[i + 1]) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }

    if (flag === true) {
      console.log("run again");
      setTimeout(() => {
        SortingArray(sortedArray);
      }, 1000);
    } else {
      console.log(sortedArray);
    }
    setTimeout(() => {
      setRandomNumbersArray(sortedArray);
    }, 1000);
    return sortedArray;
  };

  //----------------------JSX---------------------------------
  return (
    <div className="container">
      <button
        className="button"
        onClick={() => {
          setShowNumbers(true);
          randomGenerator();
        }}
      >
        Toggle Bubble Sort
      </button>
      <div className="numbers">{showNumbers ? randomNumberList : ""}</div>
    </div>
  );
};
//---------------------------------------------------------
export default BubbleSorting;
