let stars = "";
for (let i = 0; i < 5; i++){
    stars = ""; 
    for (let j = i + 1; j > 0; j--){
        stars += "*";
    }
    console.log(stars);
    if (i === 4){
        for (let k = i; k > 0; k--){
            stars="";
            for (let j = k; j > 0; j--){
                stars += "*";
            }
            console.log(stars);
    }
}
}

function getPositive(arr){
    let arr2 = [];
    for(var i of arr){
        let elem=i;
        if (elem>=0){
            arr2.push(elem);
        }
    }return arr2;

}
let arrNeg=[-1,2,5,6,-8];
console.log(getPositive(arrNeg));