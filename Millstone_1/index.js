var Toggle_Btn = document.getElementById('ToggleSkills');
var Skills1 = document.getElementById('Skills');
Toggle_Btn.addEventListener('click', function () {
    if (Skills1.style.display === 'none') {
        Skills1.style.display = 'block';
    }
    else {
        Skills1.style.display = 'none';
    }
});
