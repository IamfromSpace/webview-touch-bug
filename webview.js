const increment = e => { e.target.innerHTML++; };
const preventAndIncrement = e => { e.preventDefault(); e.target.innerHTML++; };
document.getElementById('click-counter').addEventListener('click', increment)
document.getElementById('start-preventer').addEventListener('touchstart', preventAndIncrement)
document.getElementById('end-preventer').addEventListener('touchend', preventAndIncrement)
