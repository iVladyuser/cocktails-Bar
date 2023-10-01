
// Получаем ссылку на спрайт и div блок
const sprite = document.getElementById('sprite');
const hiddenDiv = document.getElementById('hiddenDiv');

// Флаг для отслеживания видимости div блока
let isHidden = true;

// Добавляем обработчик события для нажатия на спрайт
sprite.addEventListener('click', function() {
    // Если div блок видим, скрываем его; если скрыт, показываем
    if (isHidden) {
        hiddenDiv.style.display = 'flex';
    } else {
        hiddenDiv.style.display = 'none';
    }
    
    // Инвертируем значение флага
    isHidden = !isHidden;
});