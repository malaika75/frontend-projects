var boxes = document.querySelectorAll(".BOX");
var resetbtn = document.querySelector(".reset-btn");
var winmsg = document.querySelector(".win-msg");
var msgContainer = document.querySelector(".msg-container");
//player1
var trunx = true;
var checkwin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (trunx) {
            box.innerHTML = "X";
            box.style.color = 'rgb(59, 59, 116)';
            trunx = false;
        }
        else {
            box.innerHTML = "O";
            box.style.color = 'rgb(218, 62, 62)';
            trunx = true;
        }
        ;
        box.setAttribute('disabled', 'true');
        winpattern();
    });
});
var disabledbtn = function () {
    for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        var box = boxes_1[_i];
        box.setAttribute('disabled', 'true');
    }
};
var showWinner = function (winner) {
    winmsg.innerHTML = "CONGRATULATIONS, ".concat(winner, " is winner");
    msgContainer.classList.remove("hide");
    // console.log(winmsg)
    // console.log(msgContainer)
    disabledbtn();
};
var winpattern = function () {
    for (var _i = 0, checkwin_1 = checkwin; _i < checkwin_1.length; _i++) {
        var pattern = checkwin_1[_i];
        var val1 = boxes[pattern[0]].innerHTML;
        var val2 = boxes[pattern[1]].innerHTML;
        var val3 = boxes[pattern[2]].innerHTML;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                showWinner(val1);
            }
        }
    }
};
var enablebtn = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.removeAttribute('disabled');
        box.innerHTML = "";
    }
};
var resetGame = function () {
    trunx = true;
    enablebtn();
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.add("hide");
};
resetbtn.addEventListener('click', resetGame);
