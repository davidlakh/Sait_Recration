// назначаем обработчик на всю страницу
// даём понять JS что сейчас будет загружаться страница
// строем ДОМ дерво
// это событие срабатывает тогда полностью загрузилать ДОМ структура
// создаём функцию, именно здесь будет находиться весь код
window.addEventListener('DOMContentLoaded', function () {

// переводим весь код в строгий режим
    'use strict';

// создайм переменные и в них сохраняем селекторы
    // классы с реальными табами подставить сюда
    let tab = document.querySelectorAll('.info-header-tab'),

// родитель всех ...tab
        // блок с tabs помещается сюда
        info = document.querySelector('.info-header'),
        // контент который будет переключатся между tabs помещаем сюда
        tabContent = document.querySelectorAll('.info-tabcontent');


// функция котороая скрывает наши tabs
    function hideTabContent(a) {
// код будет автоматически подстраиваться под количество элементов
        for (let i =a; i < tabContent.length; i++) {
            //  при каждом проходе цикла, будем использовать tab content
            // (с 1 по последний
            // удаление из них, класс show
            tabContent[i].classList.remove('show');
            // после удаления класса
            tabContent[i].classList.add('hide');
        }
    }

    //запуск функции подставляем значение 1 вместо а, цикл начинается с 1
    hideTabContent(1);

    // b показ именно того, что нам необходимо
    function showTabContent(b) {
        // действительно ли этот элемент скрыт
        if (tabContent[b].classList.contains('hide')) {
            // удаляем
            tabContent[b].classList.remove('hide');
            // добавляем
            tabContent[b].classList.add('show');
        }
    }

    // назначение обр. события при клике
    info.addEventListener('click', function (event) {
        let target = event.target;
        // проверяю действительно ли я кликнул на элемент
        // классы с реальными табами подставить сюда
        if (target && target.classList.contains('info-header-tab')) {
            for (let i =0; i < tab.length; i++) {
                if (target == tab[i]) {
                    //скрываем все табы
                    hideTabContent(0);
                    //показать только тот который совпадает
                    showTabContent(i);
                    //выход из цикла
                    break;
                }
            }
        }
    })




//    Timer
// =============================================

// задаём конечную дату
let deadline = '2019-08-24';

// узнаём промежуток времени между сейчас и дедлайном
    // (разница в датах)
    function getTimeRemaining(endtime) {

// в тех. переменной помещаем разницу между датами (в мил.секундах)
// parse - превращает любую дату в кол. миллисекунд
// в первый аргумент передаём большую дату (дедлайн)
        // и от него отнимаем дату которая сейчвс
        let t = Date.parse(endtime) - Date.parse(new Date()),
// округляем число которое может получиться
 // получам кол. s из наших ms
 // t - кол ms
 // вычленяем кол. целых минут и берём остаток
            seconds = Math.floor((t/1000) %60),
            // при делении на 1000, получаем кол. сек
            // при делении на 60, получаем кол. целых минут
            // и в конце делим на 60 - кол. минут в 1 часе
            minutes = Math.floor((t/1000/60) %60),
            // из всего кол ms вычленили кол. целых часов
            hours = Math.floor((t/(1000*60*60)));

        return{
            // запись ключ-значение
            // передаём кол. сек из 85 строки
          'total' : t,
            // экспортируем часы, минуты, секунды
          'hours' : hours,
          'minutes' : minutes,
          'seconds' : seconds
        };
    }
// функ. превращает статическую вёрстку в динамическую
// будет для того чтобы те значение которые мы передали ранее, подставить в вёрстку
// устанавливаем 2 параметра: нашли элемент, дедлайн
    function  setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            // запуск фун.updateClock каждую секунду
            timeInterval = setInterval(updateClock(), 1000);


        // функ. которая обновляет каждую секунду
        function updateClock() {
            let t = getTimeRemaining(endtime);
            //  каждую секунду мы получаем обнавленное значение h,m,s,
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            // то как остановить таймер на странице
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    //  запуск функции (запуск 2 значений)
    setClock('timer', deadline);

});































