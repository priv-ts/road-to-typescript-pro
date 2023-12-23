import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    if (Number.isNaN(line)) {
        console.log("数字を入力してください(2回目)");
        rl.close();
        return;
    }

    const num = Number(line);
    console.log(num)
    rl.close();
});