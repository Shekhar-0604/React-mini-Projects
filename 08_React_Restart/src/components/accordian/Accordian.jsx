import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSel, setEnableMultiSel] = useState(false);
  const [mutiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSel(getCurrentId) {
    let cpyMulti = [...mutiple];
    const findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMulti.push(getCurrentId);
    else cpyMulti.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMulti);
  }
  console.log(selected);
  return (
    <>
      <div className="acc-wrapper">
        <button onClick={() => setEnableMultiSel(!enableMultiSel)}>
          Enable Multi-Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSel
                      ? () => handleMultiSel(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSel
                  ? mutiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                  mutiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null} */}
              </div>
            ))
          ) : (
            <div>No data Found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;
