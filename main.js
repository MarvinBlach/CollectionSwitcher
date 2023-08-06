let allElements = document.querySelectorAll('[hs-first], [hs-last], [hs-even], [hs-odd]');

allElements.forEach(element => {
    let parent = element.parentElement;
    let siblings = Array.from(parent.parentElement.children);
    let index = siblings.indexOf(parent);

    // If in the first item and the element has hs-first attribute
    if (index === 0 && element.hasAttribute('hs-first')) {
        siblings[0].querySelectorAll(':scope > *').forEach(child => {
            if (child !== element) {
                child.style.display = 'none';
            }
        });
        return; // Skip other checks for this iteration
    }

    // If in the last item and the element has hs-last attribute
    if (index === siblings.length - 1 && element.hasAttribute('hs-last')) {
        siblings[siblings.length - 1].querySelectorAll(':scope > *').forEach(child => {
            if (child !== element) {
                child.style.display = 'none';
            }
        });
        return; // Skip other checks for this iteration
    }

    // For any position other than first, if the element has hs-first attribute, hide it
    if (element.hasAttribute('hs-first')) {
        element.style.display = 'none';
        return; // Skip other checks for this iteration
    }

    if (element.hasAttribute('hs-even') && (index + 1) % 2 !== 0) {
        element.style.display = 'none';
    }

    if (element.hasAttribute('hs-odd') && (index + 1) % 2 === 0) {
        element.style.display = 'none';
    }
});
