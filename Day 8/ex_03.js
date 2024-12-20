document.addEventListener("DOMContentLoaded", () => {
    tippy('.interactive-element', {
        trigger: 'click',
        interactive: true,
        animation: 'scale',
        duration: [300, 200],
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest('.interactive-element')) {
            tippy.hideAll();
        }
    });
});
