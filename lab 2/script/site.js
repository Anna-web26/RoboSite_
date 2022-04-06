alert('а можно не надо?')

const form = document.forms.form;

if (form !== undefined) {
form.addEventListener('submit', function(event) {
event.preventDefault();

const dataObj = new FormData(form);

// Конфигурационный объект SweetAlert
let status = {
icon: 'success',
title: 'Поиск сработал:)',
text: 'Смотреть в разделе «Новости»',
};

for (const value of dataObj.entries()) {

// Тут идет проверка есть ли пустые поля в нашей форме, и в случаи true изменяем конфигурационный объект
console.log(value);
if (value[1] === '') {
status = {
icon: 'error',
title: 'Поиск не сработал:(',
text: 'Проверьте все ли поля заполнены',
};
}

console.log(`${value[0]}: ${value[1] == '' ? '-' : value[1]}`);
}

// Тут создается экземпляр SweetAlert и для настройки передаем в него ранее созданый объект status
Swal.fire(status);
});
}