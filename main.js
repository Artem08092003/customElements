// Кастомный селект---------------------------------------------------
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false
});


// // Карта яндекса API---------------------------------------------------

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap-1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.856663, 2.351556],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });

    // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'svg/location.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    // удаление обьекты на карте
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('scrollZoom');

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}


// Contact form------------------------------------------------------------
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.contact__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },

        mail: {
            required: true,
            email: true
        },
    },

    messages: {
        name: {
          required: 'Как вас зовут?',
          minLength: 'Имя должно содержать больше 2 букв',
        },
        
        tel: {
          required: 'Укажите ваш телефон',
          function: 'Введите 10 цифр',
  
        },
        mail: 'Укажите ваш email',
      },

});