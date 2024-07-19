// ダミーユーザーデータ
const users = {
    'user1': { password: 'password1', name: 'User One', quote: 'This is my favorite quote.' },
    'user2': { password: 'password2', name: 'User Two', quote: 'Another favorite quote.' }
};

// フォームの送信イベントを処理
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を無効化

    // ユーザーIDとパスワードを取得
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // ユーザーIDとパスワードを検証
    if (users[userId] && users[userId].password === password) {
        // ログイン成功
        document.getElementById('login').style.display = 'none'; // ログインフォームを非表示
        document.getElementById('userPage').style.display = 'block'; // ユーザーページを表示

        // ユーザー情報を表示
        document.getElementById('userName').textContent = `ユーザー名: ${users[userId].name}`;
        document.getElementById('userQuote').textContent = `お気に入りの言葉: ${users[userId].quote}`;
    } else {
        // ログイン失敗
        alert('ユーザーIDまたはパスワードが間違っています。');
    }
});
