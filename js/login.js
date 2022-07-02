setURL('https://tomagela.com/projects/Join/smallest_backend_ever');

let registredUser = [{
        username: 'majd',
        password: '1234'

    },
    {
        username: 'peter',
        password: '5678'
    },

    {
        username: 'toma',
        password: '91011'
    }
]

function login() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    for (let i = 0; i < registredUser.length; i++) {

        if (username == registredUser[i].username && password == registredUser[i].password) {
            window.location.href = 'addTask.html';

            alert('you are successfully logged in!');

            console.log(username + 'is logged in!!')
        }

    }

}