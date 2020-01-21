export const sort = arr => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    let currId = curr.orderId
    if (!obj[currId]) {
      obj[currId] = [curr]
    } else {
      obj[currId].push(curr)
    }
  }
  return obj
}
