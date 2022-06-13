import React from "react";
import { useState } from "react";
import Edit from "./Edit";
import Del from "./Del";

export default function TodoList() {
  const [Text, setText] = useState("Add to-do");
  const [todos, settodos] = useState([]);
  function handleClick(e) {
    e.preventDefault();
    if (Text !== "") {
      settodos([{ id: `${Date.now()}`, txt: Text }, ...todos]);
    }
    setText("");
  }
  function handleDel(id) {
    // gives all obj which satisfy it
    settodos(todos.filter((to) => to.id != id));
  }
  function handleEdit(t) {
    let it = todos.find((e) => e.id == t.id);
    //gives the obj which satisfies it
    setText(it.txt);
    handleDel(it.id);
  }
  return (
    <>
      <div className="container">
        <div className="to-do-container">
          <div className="top">
            <h1>To-Do List</h1>
            <form action="">
              <input
                type="text"
                value={Text}
                onChange={(e) => setText(e.target.value)}
                className="inp-search"
              />
              <button className="Search" onClick={handleClick}>
                Add
              </button>
            </form>
          </div>
          <div className="down">
            <h2>Lists</h2>

            {todos.map((t) => (
              <li className="list">
                <span>{t.txt}</span>
                <a onClick={() => handleEdit(t)}>
                  <Edit />
                </a>
                <a onClick={() => handleDel(t.id)}>
                  <Del />
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
