function setColor(){

    let red = prompt('Установите значение красного цвета(0 - 255): ')

    while(red > 255 || red < 0){
        red = prompt('Вы ввели некорректное число; нужно от 0 до 255): ')
    }

    let green = prompt('Установите значение зеленого цвета(0 - 255): ')

    while(green > 255 || green < 0){
        green = prompt('Вы ввели некорректное число; нужно от 0 до 255): ')
    }

    let blue = prompt('Установите значение синего цвета(0 - 255): ')

    while(blue > 255 || blue < 0){
        blue = prompt('Вы ввели некорректное число; нужно от 0 до 255): ')
    }

    document.getElementById("body").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
}