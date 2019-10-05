const hihuPorfolio = {
    name: 'Mạnh Nguyễn Đức',
    title: 'Final Year Undergrad at Vietnam VNU',
    skill: [
        'ExpressJS',
        'ReactJS',
        'MongoDB',
        'NodeJS',
        'Android',
    ],
}

const printPortfolio = () => {
    for (const key in hihuPorfolio) {
        const value = hihuPorfolio[key]
        console.log(`${key}: ${value}`)
    }
}

module.portfolio = hihuPorfolio
module.exports = printPortfolio
