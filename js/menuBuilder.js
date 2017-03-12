var finder;
finder = new Finder();

function main() {

    reloadInterface();

}

function buildInterface(data) {
    $("#buttonsContainer").hide();

    if (data.menu.length == 1) {
        put1Button(data.menu);
    }
    else if (data.menu.length == 2) {
        put2Buttons(data.menu);
    }
    else if (data.menu.length == 4) {
        put4Buttons(data.menu);
    }
    else if (finder.depth == 0) {
        if (data.menu.length == 3) {
            put3Buttons(data.menu);
        }
        else if (data.menu.length == 5) {
            put5Buttons(data.menu);
        }
        else if (data.menu.length == 6) {
            put6Buttons(data.menu);
        }
        else {
            put7Buttons(data.menu);

            if (finder.pos + 7 == finder.fullCountOfButtons) {
                $(".arrowRight").fadeTo(200, 0.0);
            }
        }

        if (finder.pos == 0 && finder.depth == 0) {
            $(".arrowLeft").fadeTo(200, 0.0);
        }
    } else {
        putSecondaryMenuButtons(data.menu);

        if (finder.pos + 14 >= finder.fullCountOfButtons) {
            $(".arrowRight").fadeTo(200, 0.0);
        }
    }


    $("#buttonsContainer").show(300);
}

function reloadInterface() {
    $.getJSON('/layout.json', function (data) {

        for (var i = 1; i <= finder.depth; i++) {
            for (var j = 0; j < data.menu.length; j++){
                if (data.menu[j].text == finder.getFolderWithIndex(i)) {

                    if(data.menu[j].menu == undefined) {
                        alert("больше меню нет, -> совершаем платеж!");
                        drawFullKeyboard($("#buttonsContainer"));
                        return;
                    }

                    data.menu = data.menu[j].menu;
                    break;
                }
            }
        }

        finder.fullCountOfButtons = data.menu.length;

        data.menu.splice(0, finder.pos);

        buildInterface(data);
    });
}

function reset(){
    finder.depth = 0;
    finder.pos = 0;
    reloadInterface();
}

function onClick(branch) {
    finder.addFolder(branch);
    finder.setPostion(0);

    reloadInterface();
}

function onChangePosition(deltaPos){
    var newPos = finder.pos + deltaPos;
    if(newPos < 0) {
        finder.upFolder();
        newPos = finder.oldPos;
    }

    if(newPos < 0) newPos = 0;

    finder.setPostion(newPos);

    reloadInterface();

    console.log(finder.pos)
}