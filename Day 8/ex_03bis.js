document.addEventListener("DOMContentLoaded", () => {
    const tooltips = tippy('.interactive-element', {
        trigger: 'click',
        interactive: true,
        animation: 'scale',
        duration: [300, 200],
    });

    setTimeout(() => {
        const firstTooltip = tooltips[0];
        if (firstTooltip) {
            firstTooltip.show();
        }
    }, 500);

    document.addEventListener("click", (event) => {
        if (!event.target.closest('.interactive-element')) {
            tippy.hideAll();
        }
    });
});
