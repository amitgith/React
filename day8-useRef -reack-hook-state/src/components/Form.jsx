import React, { useRef, useState } from "react";

const Form = () => {
  // useRef;
  console.log("app rendering");

  // const [formData, setFormData] = useState({});
  // // console.log(formData);
  let inpRef = useRef();
  console.log(inpRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpRef);
  };

  return (
    <div className="w-80 bg-white">
      <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit}>
        <input
          ref={inpRef}
          // onChange={(e) =>
          //   setFormData({ ...formData, productName: e.target.value })
          // }
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          // onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="p-2 border border-gray-400 rounded"
          type="number"
          placeholder="Price"
        />
        <span>Select category</span>
        <select
          className="p-2 border border-gray-400 rounded"
          // onChange={(e) =>
          //   setFormData({ ...formData, category: e.target.value })
          // }
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          // onChange={(e) => setFormData({ ...formData, Image: e.target.value })}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="Image URL"
        />
        <button className="p-2 bg-blue-600 text-white rounded cursor-pointer">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
