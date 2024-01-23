document.querySelectorAll('.hover3d').forEach(elem => {
    elem.onmousemove = function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;
        this.style.transform = `perspective(500px) rotateX(${dy/-500}deg) rotateY(${dx/500}deg)`;
    };
    elem.onmouseleave = function(e) {
        this.style.transform = `perspective(500px) rotateX(0) rotateY(0)`;
    };
});