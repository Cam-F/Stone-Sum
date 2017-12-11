// Pick the target number(winningNum) 19-120
// Set the value of gems() 1-12
// Capture clicks on gems
// .eval() the gem inputs
// Define win as userNum === winningNum
// Define loss as userNum > winningNum
// Restart game (new numbers and clear userNum)


$(document).ready(function () {
    // Target Number
    var winningNum = Math.floor((Math.random() * 101) + 19);
    // Gem number gen
    function randomNum() {
        return Math.floor((Math.random() * 11) + 1);
    };
    $("#winningNum").html(winningNum);
    var crystal = {
        red: {
            value: randomNum(),
        },
        blue: {
            value: randomNum(),
        },
        yellow: {
            value: randomNum(),
        },
        green: {
            value: randomNum(),
        },
    };
    console.log(crystal);
    console.log(winningNum);

    // Globals
    var userNum = 0
    var win = 0
    var loss = 0

    // Reset
    function reset() {
        winningNum = Math.floor((Math.random() * 101) + 19);
        crystal.red.value = Math.floor((Math.random() * 11) + 1);
        crystal.blue.value = Math.floor((Math.random() * 11) + 1);
        crystal.yellow.value = Math.floor((Math.random() * 11) + 1);
        crystal.green.value = Math.floor((Math.random() * 11) + 1);
        userNum = 0;
        $("#winningNum").html(winningNum);
        $("#userNum").html(userNum);
        $("#win").html(win);
        $("#loss").html(loss);
    };

    // Capturing clicks
    $("img").on("click", function () {
        var color = $(this).attr("id")
        console.log(color);
        var crystalVal = crystal[color].value;
        console.log(crystalVal);
        userNum = userNum + crystalVal;
        console.log(userNum);
        $("#userNum").html(userNum);

        // Win conditions
        if (userNum === winningNum) {
            alert("You Win!");
            win++;
            reset();
        }
        else if (userNum > winningNum) {
            alert("You Lose!");
            loss++;
            reset();
        }

    });
});