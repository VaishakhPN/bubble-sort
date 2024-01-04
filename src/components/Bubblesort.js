import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArray, setUserInput, setSelected, setTime } from "../binarySlice";
import Visual from "./Visual";

const App = () => {
  const dispatch = useDispatch();
  const { array, userInput, selected, time } = useSelector((state) => state.visual);

  const bubbleSort = async (arr) => {
    const start = performance.now();


    let i, j;
    let len = arr.length;
    let isSwapped = false;
    for (i = 0; i < len; i++) {
      isSwapped = false;

      for (j = 0; j < len - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (arr[j] > arr[j + 1]) {
          swapIndex(arr, j, j + 1);
          isSwapped = true;
        }
        let array = [...arr]
        dispatch(setSelected(j));
        dispatch(setArray(array));
      }
      if (!isSwapped) {
        break;
      }
    }
    const end = performance.now();
    dispatch(setTime((end-start).toFixed(2)));
  };
  

  const doBubbleSort = () => {
    const inputArray = userInput.split(",").map((num) => parseInt(num));
    dispatch(setUserInput(inputArray.join())); 
    bubbleSort(inputArray);
  };

  return (
    <>
      <h1>Bubble Sort</h1>
      <label>
        Enter unsorted array:
        <input
          style={{ padding: "10px" }}
          placeholder="Enter unsorted numbers"
          type="text"
          onChange={(e) => dispatch(setUserInput(e.target.value))}
        />
      </label>
      <br />
      <br />
      <button onClick={doBubbleSort}>Bubble Sort</button>
      <h3>Time: {time} milliseconds</h3>

      <Visual array={array} selected={selected} />
    </>
  );
};

export default App;
function swapIndex(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}