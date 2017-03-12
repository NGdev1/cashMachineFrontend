var russian = false;
var _container;

function putKeyboardHtml(){
    _container.html(
        '<ul id="keyboard">' +
            '<li class="symbol"><span class="off">1</span><span class="on">!</span></li>' +
            '<li class="symbol"><span class="off">2</span><span class="on">@</span></li>' +
            '<li class="symbol"><span class="off">3</span><span class="on">#</span></li>' +
            '<li class="symbol"><span class="off">4</span><span class="on">$</span></li>' +
            '<li class="symbol"><span class="off">5</span><span class="on">%</span></li>' +
            '<li class="symbol"><span class="off">6</span><span class="on">^</span></li>' +
            '<li class="symbol"><span class="off">7</span><span class="on">&amp;</span></li>' +
            '<li class="symbol"><span class="off">8</span><span class="on">*</span></li>' +
            '<li class="symbol"><span class="off">9</span><span class="on">(</span></li>' +
            '<li class="symbol"><span class="off">0</span><span class="on">)</span></li>' +
            '<li class="symbol"><span class="off">-</span><span class="on">_</span></li>' +
            '<li class="symbol"><span class="off">=</span><span class="on">+</span></li>' +
            '<li class="delete lastItem">Удалить</li>' +

            '<li class="letter firstItem">q</li>' +

            '<li class="letter">w</li>' +
            '<li class="letter">e</li>' +

            '<li class="letter">r</li>' +
            '<li class="letter">t</li>' +

            '<li class="letter">y</li>' +
            '<li class="letter">u</li>' +

            '<li class="letter">i</li>' +
            '<li class="letter">o</li>' +

            '<li class="letter">p</li>' +
            '<li class="symbol letter"><span class="off">[</span><span class="on">{</span></li>' +
            '<li class="symbol letter"><span class="off">]</span><span class="on">}</span></li>' +
            '<li class="symbol">*</li>' +
            '<li class="symbol lastItem"><span class="off">\\</span><span class="on">|</span></li>' +

            '<li class="letter firstItem">a</li>' +
            '<li class="letter">s</li>' +

            '<li class="letter">d</li>' +
            '<li class="letter">f</li>' +

            '<li class="letter">g</li>' +
            '<li class="letter">h</li>' +

            '<li class="letter">j</li>' +
            '<li class="letter">k</li>' +

            '<li class="letter">l</li>' +
            '<li class="symbol letter"><span class="off">;</span><span class="on">:</span></li>' +
            '<li class="symbol letter"><span class="off">\'</span><span class="on">&quot;</span></li>' +
            '<li class="upperCase lastItem">Большие буквы</li>' +

            '<li class="letter firstItem">z</li>' +

            '<li class="letter">x</li>' +
            '<li class="letter">c</li>' +
            '<li class="letter">v</li>' +
            '<li class="letter">b</li>' +
            '<li class="letter">n</li>' +
            '<li class="letter">m</li>' +
            '<li class="symbol letter"><span class="off">,</span><span class="on">&lt;</span></li>' +
            '<li class="symbol letter"><span class="off">.</span><span class="on">&gt;</span></li>' +
            '<li class="symbol"><span class="off">/</span><span class="on">?</span></li>' +
            '<li class="changeLanguage lastItem">Сменить язык</li>' +
            '<li class="space firstItem lastItem">Пробел</li>' +

            '</ul>');
}

function drawFullKeyboard(container) {
    _container = container;
    putKeyboardHtml();

    $('#keyboard li').click(onKeyboardClick);
}

function onKeyboardClick(){
    var $this = $(this); //this - #keyboard li (любая кнопка)

    if ($this.hasClass('upperCase')) {
        toggleUpperCase();

        return false;
    } else if ($this.hasClass('delete')) {

        return false;
    } else if($this.hasClass('changeLanguage')){
        changeLanguage();
    }
    else{
        var character = $this.html();

        alert(character);
        reset();
    }
}

function changeLanguage() {
    russian = !russian;

    var letters = $(".letter");

    if (russian) {
        letters.each(function (i, letter) {
            $(letter).html(getRussianLetter(i));
        });
    }
    else { //если английский язык, то полностью перерисовываем клавиатуру
        var upperCase = letters.hasClass('upperCaseAdditionClass');

        putKeyboardHtml();

        if(upperCase) toggleUpperCase();

        $('#keyboard li').click(onKeyboardClick);
    }
}

function toggleUpperCase(){
    $('.letter').toggleClass('upperCaseAdditionClass');
    $('.symbol span').toggle();
}

function isUpperCase(sym) {
    return (sym == sym.toUpperCase());
}

function getRussianLetter(index){
    if(index == 0){
        return 'й';
    }
    else if (index == 1){
        return 'ц';
    }
    else if(index == 2){
        return 'у';
    }
    else if(index == 3){
        return 'к';
    }
    else if(index == 4){
        return 'е';
    }
    else if(index == 5){
        return 'н';
    }
    else if(index == 6){
        return 'г';
    }
    else if(index == 7){
        return 'ш';
    }
    else if(index == 8){
        return 'щ';
    }
    else if(index == 9){
        return 'з';
    }
    else if(index == 10){
        return 'х';
    }
    else if(index == 11){
        return 'ъ';
    }
    else if(index == 12){
        return 'ф';
    }
    else if(index == 13){
        return 'ы';
    }
    else if(index == 14){
        return 'в';
    }
    else if(index == 15){
        return 'а';
    }
    else if(index == 16){
        return 'п';
    }
    else if(index == 17){
        return 'р';
    }
    else if(index == 18){
        return 'о';
    }
    else if(index == 19){
        return 'л';
    }
    else if(index == 20){
        return 'д';
    }
    else if(index == 21){
        return 'ж';
    }
    else if(index == 22){
        return 'э';
    }
    else if(index == 23){
        return 'я';
    }
    else if(index == 24){
        return 'ч';
    }
    else if(index == 25){
        return 'с';
    }
    else if(index == 26){
        return 'м';
    }
    else if(index == 27){
        return 'и';
    }
    else if(index == 28){
        return 'т';
    }
    else if(index == 29){
        return 'ь';
    }
    else if(index == 30){
        return 'б';
    }
    else if(index == 31){
        return 'ю';
    }
    else if(index == 32){
        return 'ё';
    }
}