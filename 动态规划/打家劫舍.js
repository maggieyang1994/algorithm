var arr = [1, 2,3,1];
const theif = (arr) => {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      res[i] = arr[i]
    } else {
      res[i] = Math.max(res[i - 1], arr[i] + (res[i - 2] || 0))
    }
  }
  return res[res.length - 1]
}
var res = theif(arr);
console.log(res)

const again = (arr) => {
  var res = [arr[i]];
  for(var i =1;i<arr.length;i++){
    res[i] = Math.max(res[i-1], arr[i] + (res[i-2] || 0))
  }
}