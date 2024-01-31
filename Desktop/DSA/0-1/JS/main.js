function manthan(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello Manthan")
        },2000)
    });
    return p;
}

async function callback(){
    let v = await manthan();

    console.log(v);
    console.log("ajshdb");
}

callback();
