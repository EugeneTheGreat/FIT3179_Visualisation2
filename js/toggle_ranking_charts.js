// ----- global variables -----
const uniRankR1 = document.getElementById("simple_dot_rank_1");
const uniRankR2 = document.getElementById("simple_dot_rank_2");
const uniRankR3 = document.getElementById("simple_dot_rank_3");
const uniRankR4 = document.getElementById("simple_dot_rank_4");
const uniRankR5 = document.getElementById("simple_dot_rank_5");
const uniRankR6 = document.getElementById("simple_dot_rank_6");
const uniRankR7 = document.getElementById("simple_dot_rank_7");
const uniRankR8 = document.getElementById("simple_dot_rank_8");

const uniScoreR1 = document.getElementById("simple_dot_score_1");
const uniScoreR2 = document.getElementById("simple_dot_score_2");
const uniScoreR3 = document.getElementById("simple_dot_score_3");
const uniScoreR4 = document.getElementById("simple_dot_score_4");
const uniScoreR5 = document.getElementById("simple_dot_score_5");
const uniScoreR6 = document.getElementById("simple_dot_score_6");
const uniScoreR7 = document.getElementById("simple_dot_score_7");
const uniScoreR8 = document.getElementById("simple_dot_score_8");

// ----- functions -----
function toggleRankVisibilityTop20() {
    hideAll();
    uniRankR1.style.display = "block";
    uniScoreR1.style.display = "block";
}

function toggleRankVisibility21To50() {
    hideAll();
    uniRankR2.style.display = "block";
    uniScoreR2.style.display = "block";
}

function toggleRankVisibility51To75() {
    hideAll();
    uniRankR3.style.display = "block";
    uniScoreR3.style.display = "block";
}

function toggleRankVisibility76To100() {
    hideAll();
    uniRankR4.style.display = "block";
    uniScoreR4.style.display = "block";
}

function toggleRankVisibility101To125() {
    hideAll();
    uniRankR5.style.display = "block";
    uniScoreR5.style.display = "block";
}

function toggleRankVisibility126To150() {
    hideAll();
    uniRankR6.style.display = "block";
    uniScoreR6.style.display = "block";
}

function toggleRankVisibility151To175() {
    hideAll();
    uniRankR7.style.display = "block";
    uniScoreR7.style.display = "block";
}

function toggleRankVisibility176To200() {
    hideAll();
    uniRankR8.style.display = "block";
    uniScoreR8.style.display = "block";
}

// to hide all of the charts
function hideAll() {
    uniRankR1.style.display = "none";
    uniRankR2.style.display = "none";
    uniRankR3.style.display = "none";
    uniRankR4.style.display = "none";
    uniRankR5.style.display = "none";
    uniRankR6.style.display = "none";
    uniRankR7.style.display = "none";
    uniRankR8.style.display = "none";

    uniScoreR1.style.display = "none";
    uniScoreR2.style.display = "none";
    uniScoreR3.style.display = "none";
    uniScoreR4.style.display = "none";
    uniScoreR5.style.display = "none";
    uniScoreR6.style.display = "none";
    uniScoreR7.style.display = "none";
    uniScoreR8.style.display = "none";
}
