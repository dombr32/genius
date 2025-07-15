document.getElementById('tableSelect').addEventListener('change', function() {
    let main = document.getElementById('mainTable');
    let last5 = document.getElementById('last5Table');
    let legendAll = document.getElementById('legend-all');
    let legendLastGame = document.getElementById('legend-last-game');
    if (this.value === 'main') {
        main.style.display = 'revert';
        last5.style.display = 'none';
        legendAll.style.display = 'revert';
        legendLastGame.style.display = 'none'
    } else {
        main.style.display = 'none';
        last5.style.display = 'revert';
        legendAll.style.display = 'none';
        legendLastGame.style.display = 'revert'
    }
});