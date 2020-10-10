function worksDisplayShow1() {
    hideAll()
    var sectionA = document.getElementById("worksADisplay");
    sectionA.classList.toggle("hidden");
}

function worksDisplayShow2() {
    hideAll()
    var sectionA = document.getElementById("worksBDisplay");
    sectionA.classList.toggle("hidden");
}

function worksDisplayShow3() {
    hideAll()
    var sectionA = document.getElementById("worksCDisplay");
    sectionA.classList.toggle("hidden");
}

function hideAll() {
    var sectionA = document.getElementById("worksADisplay");
    var sectionB = document.getElementById("worksBDisplay");
    var sectionC = document.getElementById("worksCDisplay");
    sectionA.classList.add("hidden");
    sectionB.classList.add("hidden");
    sectionC.classList.add("hidden");
}