const selectableCards = document.querySelectorAll('.selectable-card');

selectableCards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
        } else {
            selectableCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        }
    });
});