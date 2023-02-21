const getGIF = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=VytDfA3WItQhOsois7XkPfSPXMg40hKW&q=${category}&limit=3&offset=0&rating=g&lang=es`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

export default getGIF;
