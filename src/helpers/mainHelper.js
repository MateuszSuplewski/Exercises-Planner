const changeArrayOrder = (arr, from, to) => {
  const newArray = [...arr]
  const itemToChange = newArray.splice(from, 1)
  newArray.splice(to, 0, itemToChange[0])

  return newArray
}

export { changeArrayOrder }
