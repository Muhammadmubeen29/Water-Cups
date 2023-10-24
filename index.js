const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

let fullCups = 0;
const totalCups = smallCups.length;


function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 330}px`; 
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx);
        updateBigCup();
    });
    if (cup.classList.contains('full')) {
        fullCups++;
    }
});

function highlightCups(idx) {
    const full = smallCups[idx].classList.contains('full');

    smallCups.forEach((cup, idx2) => {
        if (idx2 === idx) {
            cup.classList.toggle('full', !full);
        } else if (idx2 < idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    
}

