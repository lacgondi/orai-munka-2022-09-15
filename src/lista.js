var array = [];

export function addTo(num){
    if(num<0)
    {
        console.log("Error num is less than 0");
    }else {
        array.push(num);
    }
}

export function avg(){
    var sum=0;
    for (let index = 0; index < array.length; index++) {
        sum+=avg[index];
    }
    return sum/array.length;
}