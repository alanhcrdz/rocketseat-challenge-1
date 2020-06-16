//Objects and Arrays

const developer = {
    name: 'Alan',
    age: '29',
    languages: [
        { name: 'Javascript', skill: 'Web/Mobile' },
        { name: 'Java', skill: 'Games/Mobile' }
    ]
}

console.log(`User ${developer.name} is ${developer.age} and uses languages
${developer.languages[0].name} with skills in ${developer.languages[0].skill} `)