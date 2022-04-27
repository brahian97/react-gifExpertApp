export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NfhBnGwj5GiLACPXLPWSj5S9xzJCwfUF&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    return data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })
}