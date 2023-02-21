import { useState } from "react";
import React from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  const [categories, setCategories] = useState(["one piece"]);
  console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={addCategory}
      ></AddCategory>

      {categories.map((category) => {
        return <GifGrid key={category} category={category}></GifGrid>;
      })}
    </>
  );
};

export default GifExpertApp;
