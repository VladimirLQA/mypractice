// 4 ***:
// Преобразовать задание 3 * таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age_2 = 18;
let age_3 = 60;
const checkAge = function (age_1) {
    if (age_1 && !isNaN(age_1)) {
        if (age_1 < age_2) {
            alert('You don`t have access cause your age is ' + age_1 + '.' + ' It`s less then ' + age_2 + '.');
        } else if (age_1 >= age_2 && age_1 <= age_3) {
            alert("Welcome !");
        } else if (age_1 > age_3) {
            alert("Keep calm and look Culture channel");
        } 
    } else alert("Not an integer value")
};
checkAge(prompt("Enter your age"));