
const bestSlide = (n) => {
    let result = 0;
    let counter = 1;
    for(let i=1; i<=n; i++){
        result += counter;
        for(let j=1; j<=i; j++){
            process.stdout.write(`${counter} `);
            counter++;
        }
        console.log("");
        
    }
    console.log("");
    return result;
}
console.log("Answer: ", bestSlide(4));
console.log("Answer2: ", bestSlide(10));

