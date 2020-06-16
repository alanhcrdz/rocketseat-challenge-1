// Usuários e languages

const users = [
    { name: 'Carlos', languages: ['HTML', 'CSS'] },
    { name: 'Jasmine', languages: ['JavaScript', 'CSS'] },
    { name: 'Tuane', languages: ['HTML', 'Node.js'] }
]


// percorrer array de usuários
for (let user of users) {
    console.log(`${user.name} works with ${user.languages.join(', ')}`);

}

function checkIfCSS(user) {
    for (let tecnologia of user.languages) {
        if (tecnologia == "CSS") return true
    } return false
}

for (let i = 0; i < users.length; i++) {
    const userCSS = checkIfCSS(users[i])

    if (userCSS) {
        console.log(`User ${users[i].name} works with CSS`)
    }
}

