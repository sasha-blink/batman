$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event) {
        // отменяем стандартное действие ссылки при клике
        event.preventDefault();
        let activeContent = $(this).attr('href');
        // Если у элемента есть класс visible, то отключаем его
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        // Если у элемента есть класс active, то отключаем его
        $('.tabs-item-active').toggleClass('tabs-item-active');
        // Присваиваем класс active тому элементу на который нажали
        $(this).toggleClass('tabs-item-active');
    })
});