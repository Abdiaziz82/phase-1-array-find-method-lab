

function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");
    return winRecord ? winRecord.year : undefined;
}


const record = [
    { year: "2018", result: "L" },
    { year: "2019", result: "L" },
    { year: "2020", result: "W" },
    { year: "2021", result: "L" }
];

console.log(superbowlWin(record)); // Should print: 2020

