document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated-element');

    function handleScroll() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load to animate elements already in view
});

console.log('Website loaded successfully');
