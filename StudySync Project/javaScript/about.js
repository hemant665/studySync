const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
});



let counts = setInterval(updated, 1);
let upto = 0;
let upto1 = 0;
let upto2 = 0;
let upto3 = 0;
let upto4 = 0;
let upto5 = 0;

function updated() {
    let count = document.getElementById("instructors");
    let count1 = document.getElementById("courses");
    let count2 = document.getElementById("enrollments");
    let count3 = document.getElementById("customers");
    let count4 = document.getElementById("students");
    let count5 = document.getElementById("placement");
    count.innerHTML = upto++;
    count1.innerHTML = upto1++;
    count2.innerHTML = upto2++;
    count3.innerHTML = upto3++;
    count4.innerHTML = upto4++;
    count5.innerHTML = upto5++;
    if (upto === 101) {
        clearInterval(counts);
    }
    else if (upto1 === 51) {
        clearInterval(counts);
    }
    else if (upto2 == 25) {
        clearInterval(counts);
    }
    // else if (){

    // }
}



