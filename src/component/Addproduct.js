import React from "react";
import "./productStyle.css";
import { useState } from "react";

function Addproduct() {
  const [id, setId] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [size, setSize] = useState(" ");
  const [rating, setRating] = useState(" ");

  async function addDetails(e) {
    let data = { id, title, price, size, rating };

    let result = await fetch("http://localhost:5000/post", {
      method: "post",
      header: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.log(result);
    e.preventDefault();
  }

  return (
    <div>
      <form action="form">
        <div className="productfields">
          <h2> Add Product</h2>
          <input
            type="number"
            onChange={(e) => setId(e.target.value)}
            placeholder="enterID"
          />{" "}
          <br /> <br />
          <input
            type="text"
            id="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter title"
          />{" "}
          <br />
          <br />
          <input
            type="number"
            id=""
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price"
          />
          <br /> <br />
          <input
            type="number"
            id=""
            onChange={(e) => setSize(e.target.value)}
            placeholder="size"
          />
          <br /> <br />
          <input
            type="number"
            id=""
            onChange={(e) => setRating(e.target.value)}
            placeholder="rating"
          />
          <br /> <br />
          <button className="btnAdd" onClick={addDetails}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addproduct;
