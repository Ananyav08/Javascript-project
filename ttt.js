let current = "X";
let arr = Array(9).fill(null);

function winner() {
    if (
        (arr[0] && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        console.log(`WINNER IS ${current}`);
        document.getElementById("winner").innerText = `WINNER IS ${current}!!!`;
        return true;
    }

   
    if (!arr.includes(null)) {
        document.getElementById("winner").innerText = "IT'S A DRAW!";
        return true; 
    }

    return false;
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return; 
    arr[id] = current;
    el.innerText = current;
    el.style.color = "white";

    if (winner()) return; 

    current = current === "X" ? "O" : "X"; 
}

function restartGame() {
    arr.fill(null);
    document.querySelectorAll(".col").forEach(cell => {
        cell.innerText = ""; 
    });
    document.getElementById("grid-wrapper").innerText = ""; 
    current = "X";
}
