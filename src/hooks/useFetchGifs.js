import React, { useEffect, useState } from "react";
import getGIF from "../Helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGIF(category).then((newImages) => {
      setimages(newImages);
      setIsLoading(false);
    });
  }, [category]);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
