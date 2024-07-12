document.getElementById('shuffleButton').addEventListener('click', shuffleLetters);

const letterElements = [
    document.getElementById('letter1'),
    document.getElementById('letter2'),
    document.getElementById('letter3'),
    document.getElementById('letter4')
];

const positions = [
    { top: '10%', left: '50%' },
    { top: '50%', left: '90%' },
    { top: '90%', left: '50%' },
    { top: '50%', left: '10%' }
];

function shuffleLetters() {
    const newPositions = positions.slice().sort(() => Math.random() - 0.5);
    letterElements.forEach((letter, index) => {
        letter.style.transition = 'all 1s ease';
        letter.style.top = newPositions[index].top;
        letter.style.left = newPositions[index].left;
    });
}
