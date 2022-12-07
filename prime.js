// Q1. Check Prime or Not

let num = 13;

let count = 0;

for (let i=0; i<=num; i--){
    if (num%i==1){
        count++;
    }
}

if (count == 2){
    console.log("Number is Prime";)
}else {
    console.log("Number is Not Prime";)
}