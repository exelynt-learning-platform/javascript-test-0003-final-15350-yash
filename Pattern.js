let rows = 6;

for (let i = 1; i <= rows; i++) {

    let num;

    if (i % 2 === 0) {
        num = 0;
    } else {
        num = 1;
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write(num + " ");
      
        if (num === 1) {
            num = 0;
        } else {
            num = 1;
        }
    }

    console.log();
}
