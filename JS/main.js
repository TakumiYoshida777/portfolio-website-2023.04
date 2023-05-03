"use strict";

const featureTitleList = document.querySelectorAll(".feature-contents-list");

const cb = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            console.log("inview");
            entry.target.classList.add("inview");
            observer.unobserve(entry.target);
        } else {
            console.log("out view");
        }
    });

    // alert("aaa");

};
const options = {
    root: null,
    rootMargin: "-140px 0px -500px 0px",
};

const io = new IntersectionObserver(cb, options);
featureTitleList.forEach(list => {
    io.observe(list);
});



