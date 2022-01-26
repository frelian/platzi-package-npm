const names = [
    "Marcus",
    "Maria",
    "Cleo",
    "Sami",
    "Angie",
    "Valentina",
    "Charles",
    "Darwin",
    "Luca",
    "Joshua",
    "Mary",
    "Paty"
];

const randomNames = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(`Generated name: ${name}`);
}

module.exports = { randomNames };
