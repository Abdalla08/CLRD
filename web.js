document.addEventListener("DOMContentLoaded", () => {
    console.log("hi");

    const parents = document.querySelectorAll('.talk_one_block');

    parents.forEach((parent) => {
        const children = parent.querySelectorAll(':scope > *');

        children.forEach((child) => {
            child.classList.add('fade-in');
        });
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const triggerPoint = viewportHeight * 0.75;

        return rect.top <= triggerPoint;
    }

    function handleScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }


    window.addEventListener('scroll', handleScroll);

    window.addEventListener('load', handleScroll);
});