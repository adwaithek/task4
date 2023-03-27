let  num=prompt("Enter a number: ")
 num=Number.parseInt(num)

function PrimeNum(num){
    let prime=true;
    for(i=2;i<num;i++){
        if(num%i==0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log("Number is prime");
    }else{
        console.log("Number is not prime");
    }
}
PrimeNum(num)
