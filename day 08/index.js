n = 11;
let bool = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if(n%i===0){
        bool = false
    }
}
if(bool){
    console.log(`${n} is prime`);
} else {
    console.log(`${n} is not prime`);
}