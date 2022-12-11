export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  if (data.message) throw new Error(data.message)

  return data
}
