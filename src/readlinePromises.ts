import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

while (true) {
    const input = await rl.question('数値を入力してください: ');
    const number = parseFloat(input);

    // 入力が数値かどうかをチェック
    if (!isNaN(number)) {
        console.log(`入力された数値: ${number}`);
        break;
    } else {
        console.log('数値ではありません。再度入力してください。');
    }
}

rl.close(); // アプリケーションを閉じる
