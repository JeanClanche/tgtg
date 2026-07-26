document.addEventListener('DOMContentLoaded', function(){
    const label = document.getElementById('switchLabel');
    const track = document.getElementById('track');
    const thumb = document.getElementById('thumb');
    const fill = document.getElementById('fill');
    const input = document.getElementById('btn');

    const START_X = -1;

    let dragging = false;
    let moved = false;
    let startX = 0;
    let maxX = 0;
    let currentX = START_X;

    function getMaxX() {
        return track.offsetWidth - thumb.offsetWidth + 1;
    }

    function setFillWidth(x) {
        fill.style.width = (x + thumb.offsetWidth) + 'px';
    }

    function setThumbX(x) {
        thumb.style.transition = 'none';
        fill.style.transition = 'none';
        thumb.style.left = x + 'px';
        setFillWidth(x);
    }

    function resetThumb() {
        thumb.style.transition = 'left 0.2s ease';
        fill.style.transition = 'width 0.2s ease';
        thumb.style.left = START_X + 'px';
        fill.style.width = (START_X + thumb.offsetWidth) + 'px';
        input.checked = false;
    }

    function validate() {
        thumb.style.transition = 'left 0.2s ease';
        fill.style.transition = 'width 0.2s ease';
        thumb.style.left = maxX + 'px';
        fill.style.width = '100%';
        input.checked = true;
        input.dispatchEvent(new Event('change'));
    }

    function onStart(clientX) {
        if (input.checked) return;
        const thumbRect = thumb.getBoundingClientRect();
        const startedOnThumb = clientX >= thumbRect.left && clientX <= thumbRect.right;
        if (!startedOnThumb) return;

        dragging = true;
        moved = false;
        maxX = getMaxX();
        startX = clientX - thumbRect.left;
        currentX = START_X;
    }

    function onMove(clientX) {
        if (!dragging) return;
        const trackRect = track.getBoundingClientRect();
        let x = clientX - trackRect.left - startX;
        x = Math.max(START_X, Math.min(x, maxX));

        if (Math.abs(x - START_X) > 3) moved = true;

        currentX = x;
        setThumbX(x);
    }

    function onEnd() {
        if (!dragging) return;
        dragging = false;

        if (!moved) return;

        if (currentX >= maxX - 5) {
            validate();
        } else {
            resetThumb();
        }
    }

    label.addEventListener('click', (e) => e.preventDefault());


    thumb.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
    document.addEventListener('touchmove', (e) => {
    if (dragging) onMove(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', onEnd);


    thumb.addEventListener('mousedown', (e) => onStart(e.clientX));
    document.addEventListener('mousemove', (e) => onMove(e.clientX));
    document.addEventListener('mouseup', onEnd);


    input.addEventListener('change', () => {
        if (input.checked) {
            //
        }
    });
})