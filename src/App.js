import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [tab, setTab] = useState([0]);
  // let counterNumber = 1;
  return (
    <div className="container-main">
      {tab.length < 3 ? (
        <button
          className="container-reset"
          onClick={() => {
            // counterNumber++;
            const newTab = [...tab];
            newTab[newTab.length] = 0;
            setTab(newTab);
          }}
        >
          Add counter
        </button>
      ) : null}

      <div className="container-all-blocks">
        <Counter tab={tab} setTab={setTab} index={0} />
        {tab.length > 1 ? (
          <Counter index={1} tab={tab} setTab={setTab} />
        ) : null}
        {tab.length > 2 ? (
          <Counter index={2} tab={tab} setTab={setTab} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
