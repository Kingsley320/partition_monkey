function partition(arr, n){
  var cont = [], temp = [];
  for (i = 0; i<arr.length; i++){
    temp.push(arr[i])
    if (temp.length == n){
      cont.push(temp);
      temp = [];
    }
  }
  if (arr.length % n){
    cont.push(arr.slice(arr.length - arr.length % n));
}
  return [cont, cont.length];
}
console.log(partition([42, 17, 93, 64, 28, 75, 49, 86, 12, 90, 81, 37, 56, 23, 69, 51, 98, 27, 45, 72, 66, 14, 88, 39, 74, 21, 48, 95, 11, 82, 76, 18, 94, 38, 63, 29, 47, 73, 26, 99, 50, 68, 24, 57, 36, 80, 13, 87, 46, 71, 22, 97, 52, 67, 25, 58, 35, 79, 15, 89, 41, 70, 31, 96, 53, 62, 34, 78, 16, 85, 44, 65, 33, 77, 19, 84, 43, 61, 32, 100], 1)[0]);
