// script.js の変更点
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    
    if (users[userId] && users[userId].password === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        startGame(); // ゲームを開始する関数を呼び出す
    } else {
        alert('ユーザーIDまたはパスワードが間違っています。');
    }
});

function startGame() {
    const app = new PIXI.Application({ 
        width: 800, 
        height: 600,                       
        view: document.getElementById('gameCanvas')
    });

    const player = PIXI.Sprite.from('path/to/player/image.png');
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    app.stage.addChild(player);

    app.ticker.add((delta) => {
        // ゲームのループロジック
    });
}
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const users = {
    'user1': { password: 'password1', name: 'User One', quote: 'This is my favorite quote.' },
    'user2': { password: 'password2', name: 'User Two', quote: 'Another favorite quote.' }
};

app.post('/login', (req, res) => {
    const { userId, password } = req.body;
    if (users[userId] && users[userId].password === password) {
        res.send({ success: true, name: users[userId].name, quote: users[userId].quote });
    } else {
        res.send({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// script.js の変更点
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('game').style.display = 'block';
            startGame(); // ゲームを開始する関数を呼び出す
        } else {
            alert('ユーザーIDまたはパスワードが間違っています。');
        }
    });
});
