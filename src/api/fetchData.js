export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  if (data.message) throw new Error(data.message)

  return data
}
