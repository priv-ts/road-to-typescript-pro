import readline from 'readline';

// readlineインターフェースの作成
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに数値入力を促す関数
function promptForNumber() {
    rl.question('数値を入力してください: ', (input) => {
        const number = parseFloat(input);

        // 入力が数値かどうかをチェック
        if (!isNaN(number)) {
            console.log(`入力された数値: ${number}`);
            rl.close(); // アプリケーションを閉じる
        } else {
            console.log('数値ではありません。再度入力してください。');
            promptForNumber(); // 再度ユーザーに入力を促す
        }
    });
}

// 最初のユーザー入力を促す
promptForNumber();

// アプリケーション終了時の処理
rl.on('close', () => {
    console.log('アプリケーションを終了します。');
    process.exit(0);
});