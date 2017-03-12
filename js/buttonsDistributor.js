//main menu building functions:

function put1Button(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 270px; margin-top: 7%;">' +
        '<div class="buttonArrow arrowLeft" onclick="onButtonChangePosition(-7, this);">' +

        '</div>' +
        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 275px;" onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +
        '</div>');
}

function put2Buttons(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 270px; margin-top: 6%;">' +
        '   <div class="buttonArrow arrowLeft" style="margin-top: 55px" onclick="onButtonChangePosition(-7, this);">' +

        '   </div>' +
        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 125px;" onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[1].img + '"/>' +

        '       <p id="2" class="textInButtions textInLargeButtons">' + menu[1].text + '</p>' +
        '   </a>' +
        '</div>');
}

function put3Buttons(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 270px;">' +
        '   <div class="buttonArrow arrowLeft" style="margin-top: 225px" onclick="onButtonChangePosition(-7, this);">' +

        '   </div>' +

        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 125px;" onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[1].img + '"/>' +

        '       <p id="2" class="textInButtions textInLargeButtons">' + menu[1].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="thirdButtonsLine">' +
        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 38.2%;" onclick="onButtonClick($(\'#3\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[2].img + '"/>' +

        '       <p id="3" class="textInButtions textInLargeButtons">' + menu[2].text + '</p>' +
        '   </a>' +
        '</div>');
}

function put4Buttons(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 150px; margin-top: 50px">' +
        '   <div class="buttonArrow arrowLeft" style="margin-top: 175px" onclick="onButtonChangePosition(-7, this);">' +

        '   </div>' +

        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 0px;" onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 170px" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[1].img + '"/>' +

        '       <p id="2" class="textInButtions textInLargeButtons">' + menu[1].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="secondButtonsLine" style="height: 145px">' +

        '   <a href="#" class="buttonLarge" style="margin-left: 455px" onclick="onButtonClick($(\'#3\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[2].img + '"/>' +

        '       <p id="3" class="textInButtions textInLargeButtons">' + menu[2].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="thirdButtonsLine">' +

        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 700px" onclick="onButtonClick($(\'#4\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[3].img + '"/>' +

        '       <p id="4" class="textInButtions textInLargeButtons">' + menu[3].text + '</p>' +
        '   </a>' +
        '</div>');
}

function put5Buttons(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 280px">' +
        '   <div class="buttonArrow arrowLeft" style="margin-top: 225px" onclick="onButtonChangePosition(-7, this);">' +

        '   </div>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#1\').html(), this);">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[1].img + '"/>' +

        '       <p id="2" class="textInButtions textInLargeButtons">' + menu[1].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#3\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[2].img + '"/>' +

        '       <p id="3" class="textInButtions textInLargeButtons">' + menu[2].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="thirdButtonsLine">' +
        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 26%;" onclick="onButtonClick($(\'#4\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[3].img + '"/>' +

        '       <p id="4" class="textInButtions textInLargeButtons">' + menu[3].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#5\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[4].img + '"/>' +

        '       <p id="5" class="textInButtions textInLargeButtons">' + menu[4].text + '</p>' +
        '   </a>' +
        '</div>');
}

function put6Buttons(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 265px">' +
        '   <div class="buttonArrow arrowLeft" style="margin-top: 225px" onclick="onButtonChangePosition(-7, this);">' +

        '   </div>' +

        '   <a href="#" class="buttonLarge" style="margin: 0; " onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[1].img + '"/>' +

        '       <p id="2" class="textInButtions textInLargeButtons">' + menu[1].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#3\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[2].img + '"/>' +

        '       <p id="3" class="textInButtions textInLargeButtons">' + menu[2].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<br/>' +

        '<div id="thirdButtonsLine">' +

        '   <a href="#" class="buttonLarge" style="margin: 0; margin-left: 215px;" onclick="onButtonClick($(\'#4\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[3].img + '"/>' +

        '       <p id="4" class="textInButtions textInLargeButtons">' + menu[3].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#5\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[4].img + '"/>' +

        '       <p id="5" class="textInButtions textInLargeButtons">' + menu[4].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" style="margin: 0;" onclick="onButtonClick($(\'#6\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[5].img + '"/>' +

        '       <p id="6" class="textInButtions textInLargeButtons">' + menu[5].text + '</p>' +
        '   </a>' +
        '</div>');
}

function put7Buttons(menu) {
    $("#buttonsContainer").html('<div id="firstButtonsLine" style="height: 170px">' +
        '   <a href="#" class="buttonLarge" style="margin-left: 15%;" onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[0].img + '"/>' +

        '       <p id="1" class="textInButtions textInLargeButtons">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInSmallButton" src="' + menu[1].img + '"/>' +

        '       <p id="2" class="textInButtions textInSmallButtions">' + menu[1].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" onclick="onButtonClick($(\'#3\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[2].img + '"/>' +

        '       <p id="3" class="textInButtions textInLargeButtons">' + menu[2].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<br/>' +

        '<div id="secondButtonsLine" style="height: 185px">' +

        '   <div class="buttonArrow arrowLeft" onclick="onButtonChangePosition(-7, this);">' +

        '   </div>' +

        '   <a href="#" class="buttonLarge" style="margin-left: 275px" onclick="onButtonClick($(\'#4\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[3].img + '"/>' +

        '       <p id="4" class="textInButtions textInLargeButtons">' + menu[3].text + '</p>' +
        '   </a>' +

        '<div class="buttonArrow arrowRight" onclick="onButtonChangePosition(7, this);">' +

        '</div>' +

        '</div>' +

        '<div id="thirdButtonsLine">' +
        '   <a href="#" class="buttonLarge" style="margin-left: 15%;" onclick="onButtonClick($(\'#5\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[4].img + '"/>' +

        '       <p id="5" class="textInButtions textInLargeButtons">' + menu[4].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" style="vertical-align: bottom" onclick="onButtonClick($(\'#6\').html(), this)">' +
        '       <img class="iconInSmallButton" src="' + menu[5].img + '"/>' +

        '       <p id="6" class="textInButtions textInSmallButtions">' + menu[5].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonLarge" onclick="onButtonClick($(\'#7\').html(), this)">' +
        '       <img class="iconInLargeButton" src="' + menu[6].img + '"/>' +

        '       <p id="7" class="textInButtions textInLargeButtons">' + menu[6].text + '</p>' +
        '   </a>' +
        '</div>');
}

//ToDo: 1)secondary menu building functions 2)payment coonductor(keyboards)

function putSecondaryMenuButtons(menu) {

    while(menu.length < 14){
        menu.push({
            "img": "",
            "text": ""
        });
    }

    var newHtml =
        '<div id="firstButtonsLine" style="height: 95px;">' +
        '   <a href="#" class="buttonSmall" style="margin-left: 230px" onclick="onButtonClick($(\'#1\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[0].img +'">' +

        '       <p id="1" class="textInButtions textInSmallButtions">' + menu[0].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" style="margin-left: 113px" onclick="onButtonClick($(\'#2\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[1].img +'">' +

        '       <p id="2" class="textInButtions textInSmallButtions">' + menu[1].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="secondButtonsLine" style="height: 95px">' +
        '   <a href="#" class="buttonSmall" style="margin-left: 386px;" onclick="onButtonClick($(\'#3\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[2].img +'">' +

        '       <p id="3" class="textInButtions textInSmallButtions">' + menu[2].text + '</p>' +
        '   </a>' +
        '   <a href="#" class="buttonSmall" style="margin-left: 113px" onclick="onButtonClick($(\'#4\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[3].img +'">' +

        '       <p id="4" class="textInButtions textInSmallButtions">' + menu[3].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="thirdButtonsLine" style="height: 95px;">' +
        '   <a class="arrowLeft buttonArrow" style="margin-top: 40px" onclick="onButtonChangePosition(-14, this);">>' +

        '   </a>' +

        '   <a href="#" class="buttonSmall" style="margin-left: 20px" onclick="onButtonClick($(\'#6\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[4].img +'">' +

        '       <p id="6" class="textInButtions textInSmallButtions">' + menu[4].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" style="margin-left: 8.7%" onclick="onButtonClick($(\'#7\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[5].img +'">' +

        '       <p id="7" class="textInButtions textInSmallButtions">' + menu[5].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" style="margin-left: 8.7%" onclick="onButtonClick($(\'#8\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[6].img +'">' +

        '       <p id="8" class="textInButtions textInSmallButtions">' + menu[6].text + '</p>' +
        '   </a>' +

        '   <a class="arrowRight buttonArrow" style="margin-top: 10px; margin-left: 20px" onclick="onButtonChangePosition(14, this);">>' +

        '   </a>' +
        '</div>' +

        '<div id="fourthButtonsLine" style="height: 95px;">' +
        '   <a href="#" class="buttonSmall" style="margin-left: 386px" onclick="onButtonClick($(\'#9\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[7].img +'">' +

        '       <p id="9" class="textInButtions textInSmallButtions">' + menu[7].text + '</p>' +
        '   </a>' +
        '   <a href="#" class="buttonSmall" style="margin-left: 8.7%" onclick="onButtonClick($(\'#10\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[8].img +'">' +

        '       <p id="10" class="textInButtions textInSmallButtions">' + menu[8].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="fifthButtonsLine" style="height: 95px;">' +
        '   <a href="#" class="buttonSmall" style="margin-left: 230px" onclick="onButtonClick($(\'#11\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[9].img +'">' +

        '       <p id="11" class="textInButtions textInSmallButtions">' + menu[9].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" style="margin-left: 8.7%" onclick="onButtonClick($(\'#12\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[10].img +'">' +

        '       <p id="12" class="textInButtions textInSmallButtions">' + menu[10].text + '</p>' +
        '   </a>' +

        '   <a href="#" class="buttonSmall" style="margin-left: 8.7%" onclick="onButtonClick($(\'#13\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[11].img +'">' +

        '       <p id="13" class="textInButtions textInSmallButtions">' + menu[11].text + '</p>' +
        '   </a>' +
        '</div>' +

        '<div id="sixthButtonsLine">' +
        '   <a href="#" class="buttonSmall" style="margin-left: 386px;" onclick="onButtonClick($(\'#14\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[12].img +'">' +

        '       <p id="14" class="textInButtions textInSmallButtions">' + menu[12].text + '</p>' +
        '   </a>' +
        '   <a href="#" class="buttonSmall" style="margin-left: 8.7%" onclick="onButtonClick($(\'#15\').html(), this)">' +
        '       <img class="iconInSmallButton" src="'+ menu[13].img +'">' +

        '       <p id="15" class="textInButtions textInSmallButtions">' + menu[13].text + '</p>' +
        '   </a>' +
        '</div>';

    $("#buttonsContainer").html(newHtml);
}
