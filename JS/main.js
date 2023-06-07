"use strict";

const featureTitleList = document.querySelectorAll(".feature-contents-list");
const instructorCard = document.querySelectorAll(".instructor-card");
console.log(instructorCard);
const cb = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            observer.unobserve(entry.target);
        } else {
            return;
        }
    });
};
const options = {
    root: null,
    rootMargin: "0px 0px 150px 0px",
};

const io = new IntersectionObserver(cb, options);

const listAnimation = (els) => {
    els.forEach(list => {
        io.observe(list);
    });
};
listAnimation(featureTitleList);
listAnimation(instructorCard);


document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.twitter');

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach((lazyImage) => {
            lazyImageObserver.observe(lazyImage);
        });
    }
});