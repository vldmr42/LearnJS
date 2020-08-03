let num = 55;

// Ифчик
if (num < 44) {
    console.log('Wrong')
} else if (num > 111) {
    console.log('Tomuch')
} else {
    console.log('OK')
};

// Тернарный оператор
(num == 55) ? console.log('OK'): console.log('Wrong');

// Селект кейс ^__^
switch (num) {
    case 49:
        console.log('Wrong');
        break;
    case 100:
        console.log('To many');
        break;
    case 55:
        console.log('OK');
        break;
    default:
        console.log('What?');
        break;
}