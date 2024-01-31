const arr = [1,2,3,4,5]

const arr1 = arr.filter((i)=>{
    if(i%2==0){
        return i;
    }
});
console.log(arr1);