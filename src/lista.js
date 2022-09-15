let array = [];

export function addTo(num){
    if(num>0)
    {
        array.push(num);
    }else {
        console.log("Error num is less than 0");
    }
}

export function avg(){
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum+=array[index];
    }
    return sum/array.length;
}