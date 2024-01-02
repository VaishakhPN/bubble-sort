import { useState } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [selected, setSelected] = useState(0);

  const bubbleSort = async (arr) => {
    let i, j;
    let len = arr.length;
    let isSwapped = false;
    for (i = 0; i < len; i++) {
      isSwapped = false;

      for (j = 0; j < len - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (arr[j] > arr[j + 1]) {
          swapIndex(arr, j, j + 1);
          isSwapped = true;
        }
        setSelected(j);
        setArray([...arr]);
      }
      if (!isSwapped) {
        break;
      }
    }
  };

  const doBubbleSort = () => {
    const inputArray = userInput.split(",").map((num) => parseInt(num));
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
        onChange={(e) => setUserInput(e.target.value)}
      />
      </label>
      <br />
      <br />
      <button onClick={doBubbleSort}>Bubble Sort</button>
      <div style={{ display: "flex", gap: "20px" }}>
        {array.map((item, index) => (
          <h1
            key={index}
            style={{
              backgroundColor:
                index === selected
                  ? "yellow"
                  : index === selected + 1
                  ? "yellow"
                  : "transparent",
            }}
          >
            {item}
          </h1>
        ))}
      </div>
    </>
  );
}

export default App;
function swapIndex(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}