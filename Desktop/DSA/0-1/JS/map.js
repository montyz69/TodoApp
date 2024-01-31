const arr = [1,2,3,4,5]
function transform (i){
    return i*2;
}

const arr1 = arr.map(transform);
console.log(arr1);