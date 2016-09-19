const logListener = eType => window.addEventListener(eType, () => console.log(eType));
['focus', 'blur', 'touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup', 'mousemove', 'click'].forEach(logListener);
