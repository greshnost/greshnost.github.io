// Поиск результатов через ссылку
function getQueryVariable(variable){
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=")
        if (pair[0] == variable) {
            return pair[1]
        }
    }
    return(NaN);
}

pride  = getQueryVariable("pride")
glut   = getQueryVariable("glut")
forn   = getQueryVariable("forn")
anger  = getQueryVariable("anger")
greed  = getQueryVariable("greed")
desp   = getQueryVariable("desp")
envy  = getQueryVariable("envy")

// Отобразить результаты по отдельным параметрам
document.getElementById("pride-label").innerHTML = `Гордыня:<br>${pride}%`
document.getElementById("glut-label").innerHTML = `Чревоугодие:<br>${glut}%`
document.getElementById("forn-label").innerHTML = `Блуд:<br>${forn}%`
document.getElementById("anger-label").innerHTML = `Гнев:<br>${anger}%`
document.getElementById("greed-label").innerHTML = `Алчность:<br>${greed}%`
document.getElementById("desp-label").innerHTML = `Уныние:<br>${desp}%`
document.getElementById("envy-label").innerHTML = `Зависть:<br>${envy}%`


// Нарисовать пирог
colorsList = ["purple", "darkred", "orange", "#DEC20B", "green", "darkblue", "violet"]
radiusList = [pride, glut, forn, anger, greed, desp, envy]
for (var i = 0; i <= 6; i++) {
    var color = colorsList[i];
    var radius = radiusList[i];
    innerel = document.getElementById(i);
    innerel.style = `--num:${i};--c:${color};--r:${radius * 2.6}px`;
}
// Нарисовать красивые штучки
for (var i = 7; i <= 10; i++) {
    var radius = (i - 6) * 100;
    var margin = (500 - radius + 10) / 2;
    innerel = document.getElementById(i);
    innerel.style = `--r:${radius}px;margin-left: ${margin}px;margin-top: ${margin}px;`;
}
// Подписать пирог
const sins = [" Гордыня ", "Чревоугодие", "    Блуд   ", "Гнев ", "  Алчность   ", "Уныние  ", " Зависть"]
var degree = 0;
sins.forEach(element => {
    flag = (degree <= 90 || degree >= 225)
    if (!flag) {element = element.split('').reverse().join(''); _class = "b2";}
    else       {_class = "b1";}
    element.split('').forEach(char => {
        style = `--deg: ${degree + 180 * (!flag)}deg;`
        document.getElementById("disk").innerHTML += `<b style="${style}" class="${_class}">${char}</b>`
        degree += 5
    })
    degree += 5
})

// Общий результат
total_result = Math.floor(radiusList.reduce((a, b) => +(a) + +(b), 0) / 700 * 100);
if      (total_result < 25) {total = "Поздравляем выособо негрешный"}
else if (total_result < 50) {total = "Вы немножечька грешный вам предстоить пороботать надсобой индульгенцию покашто можно непокупать"}
else if (total_result < 75) {total = "Вы в целом грешьный незабуьте купить индугенцию"}
else if (total_result < 85) {total = "Вы грешный человек. От мук в аду вас сможет спасти лишь покупка индульгенции"}
else                        {total = "ВЫ ОЧЕНЬ ГРЕШЬНЫЙ ИНКВИЗИЦИЯ УЖЕ ВЫЕХАЛА ЗА ВАМИ"}
document.getElementById("total").innerHTML = `Вы грешны на ${total_result}%<br><br>${total}`
