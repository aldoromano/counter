const Counter = ({ index, tab, setTab }) => {
  return (
    <div className="container">
      <div className="container-counters">
        <div class="container-counter">
          <button
            className="minus"
            style={{ display: tab[index] ? "flex" : "none" }}
            onClick={() => {
              const newTab = [...tab];
              newTab[index]--;
              setTab(newTab);
            }}
          >
            -
          </button>
          <div className="counter">{tab[index]}</div>
          <button
            className="plus"
            style={{ display: tab[index] < 10 ? "flex" : "none" }}
            onClick={() => {
              const newTab = [...tab];
              newTab[index]++;
              setTab(newTab);
            }}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="container-reset"
        onClick={() => {
          const newTab = [...tab];
          newTab[index] = 0;
          setTab(newTab);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
