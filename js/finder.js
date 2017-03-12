/**
 * Created by Михаил on 19.03.16.
 */
function Finder() {
    this.depth = 0;
    this.pos = 0; //позиция, с которой начинает рендерить. (номер кнопки)
    this.oldPos  = 0; //если мы поднялись на уровень вверх, мы окажемся в той позиции, в которой были
    this.fullCountOfButtons = 0; //сколько всего кнопок
    this.folders = [];
}

Finder.prototype.upFolder = function() {
    if(this.depth > 0)
        this.depth--;

    return this.folders[this.depth];
};

Finder.prototype.addFolder = function (branch) {
    this.depth++;

    this.folders[this.depth] = branch;

    this.oldPos = this.pos;
};

Finder.prototype.setPostion = function(newPos){
    this.pos = newPos;
};

Finder.prototype.getCurrentFolderName = function () {
    return this.folders[this.depth];
};

Finder.prototype.getFolderWithIndex = function(index){
    return this.folders[index];
};