document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the attributes hs-first, hs-last, hs-even, hs-odd
    let allElements = document.querySelectorAll('[hs-first], [hs-last], [hs-even], [hs-odd]');

    allElements.forEach(element => {
        let parent = element.parentElement;
        let siblings = Array.from(parent.parentElement.children); // Convert NodeList to Array
        let index = siblings.indexOf(parent);

        if (element.hasAttribute('hs-first') && index !== 0) {
            element.style.display = 'none';
        }

        if (element.hasAttribute('hs-last') && index !== siblings.length - 1) {
            element.style.display = 'none';
        }

        if (element.hasAttribute('hs-even') && (index + 1) % 2 !== 0) {
            element.style.display = 'none';
        }

        if (element.hasAttribute('hs-odd') && (index + 1) % 2 === 0) {
            element.style.display = 'none';
        }
    });
});
