

function sumNum(){
    let start = parseInt(prompt('Введите начальный диапазон: '));
    let end = parseInt(prompt('Введите конечный диапазон '));

    let result = 0;
    if (start > end) {
        alert('Ошибка! Начальное значение должно быть меньше чем конечное!.');
        return false;
    }

    for (let i = start; i <= end; i++) {
        result += i;
    }

    alert('Результат:' + result)
}

function greatestDivisor(){
    let a = parseInt(prompt('Введите 1-ое число: '));
    let b = parseInt(prompt('Введите 2-ое число: '));

    let check = a < b ? a : b;
    let result = check;
        
    while (check > 0) {
        if (a % check == 0 && b % check == 0) {
            result = check;
            break;
        }
        check--;
    }

    alert(`Наибольший общий делитель: ${result}`);
}


function commonDivisors(){
    let a = parseInt(prompt('Введите число: '));

    let result = '';
    for (let i = 1; i <= a; i++){
        if (a % i == 0)
        {
            result += i + ' ';
        }
    }
    alert(`Общие делители: ${result}`);
}

function aberOfDigits(){
    let a = prompt("Введите число");
    let aLength = a.toString().length;
    alert(`Количнство чисел:  ${aLength}`);
}

function calc(){
    let plus = 0, minus = 0, zero = 0, even = 0, odd = 0;
    for(let i = 0; i<10; i++){
        let abers = parseInt(prompt(`Введите ${i + 1}-ое число: `));

        abers > 0 ? plus++ : (abers < 0 ? minus++ : zero++);

        abers % 2 == 0? even++ : odd++;
    }

    alert(`Список: \n Положительные числа: ${plus} \n Отрицательные числа: ${minus} \n Нулевые числа: ${zero} \n Четные числа: ${even} \n Нечетные числа: ${odd}`);
}

function loopingCalc(){
    do {
        let a = parseInt(prompt("Введите 1-ое число: "));
        let operation = prompt("Введите оператор: ");
        let b = parseInt(prompt("Введите 2-ое число: "));


        switch (operation) {
            case '+':
                alert((a+b));
                break;
            case '-':
                alert((a-b));
                break;
            case '*':
                alert((a*b));
                break;
            case '/':
                if(b==0)
                {
                    alert("На ноль делить нельзя!");
                    break;
                }
                alert((a/b));
                break;
            default:
                alert('Неверный знак');
                break;
        }
    } while (confirm("Продолжаем?"));
}

function shiftNumber() {

    let number = prompt("Введите число:");
    let shift = parseInt(prompt("На сколько цифр сдвинуть число:"));
    let result = "";

    for (let i = shift; i < number.length + shift; i++) {
        result += number[i % number.length];
    }


    alert(`Результат сдвига: ${result}`);
}

function dayList(){
    let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"];
    let index = 0;
    do {
       alert(`День недели: ${week[index]}`);
       index++;
       if (index === week.length) {
        index = 0;
       }
    } while (confirm("Хотите увидеть следующий день?"));
}

function multiplicationTable() {
    let a = parseInt(prompt('Введите число для таблицы умножения: '));

    let result = '';

    if (a < 2 || a > 10) {
        alert('Ошибка! Можно вводить только числа от 2 до 10.');
    } else {
        for (let i = 2; i <= 10; i++) {
            result += `${a} * ${i} = ${a * i} \n`;
        }
    }

    alert(result);
}



function GuessTheNumber(){
    alert("Загадайте свое число от 0 до 100");

    let lower = 0;
    let upper = 100;

    while (true) {

        let guess = parseInt((lower + upper) / 2);


        let choice = prompt(`Ваше число больше? (>) ${guess}, (<) ${guess} или же оно (==) ${guess}?`);

        if (choice == "==") {
            alert(`Победа! Ваше число: ${guess}`);
            break;
        } else if (choice == ">") {
            lower = guess + 1;
        } else if (choice == "<") {
            upper = guess - 1;
        } else {
            alert("Ошибка! Введите >, < или же ==");
        }
    }

}