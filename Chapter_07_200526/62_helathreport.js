let healthscore = 50;
if (healthscore === 100) {
    console.log("green build");
} else if (healthscore >= 90) {
    console.log("stable");
} else if (healthscore >= 70) {
    console.log("Unstable");
} else {
    console.log("broken build");
}