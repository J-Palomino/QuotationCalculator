import React, { useState, useEffect } from "react";

function InputNewProduct() {
  const [Name, setName] = useState("Product Name");
  const [Label, setLabel] = useState("Product Label");

  const [refetch, setRefetch] = useState(true);

  const [results, setResult] = useState(null);

  useEffect(() => {
    if (refetch) {
      setRefetch(false);
      fetch("/products")
        .then(res => res.json())
        .then(result => {
          setResult(result.name);
          console.log(result);
        })
        .catch(error => {
          console.warn(error);
        });
    }
  }, [refetch]);

  return (
    <div>
      <h1>Input Forms:</h1>
      <form>
        <h2>Name:</h2>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
        ></input>
        <h2>Label:</h2>
        <input
          type="text"
          onChange={event => setLabel(event.target.value)}
        ></input>
        <h1>
          Name: {Name} Label: {Label}
        </h1>
        <h2>Result: {results}</h2>
        <button onClick={() => setRefetch(true)}>Submit</button>
      </form>
    </div>
  );
}

export default InputNewProduct;
