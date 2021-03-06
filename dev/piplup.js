///<reference path="gameObject.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Piplup = (function (_super) {
    __extends(Piplup, _super);
    function Piplup() {
        var _this = _super.call(this) || this;
        _this.timer = 0;
        _this.behavior = new Moving(_this);
        _this.setsPropertiesBlock();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Piplup.prototype.setsPropertiesBlock = function () {
        this.y = 0;
        this.x = 270;
        this.width = 60;
        this.height = 60;
        this.div = document.createElement('containerBlock');
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.className = 'container_piplup';
        var grid = document.getElementById('grid');
        grid.appendChild(this.div);
    };
    Piplup.prototype.move = function () {
        this.timer = this.timer + 5;
        if (this.timer > 60) {
            this.behavior.update();
            this.timer = 0;
        }
    };
    Piplup.prototype.onKeyDown = function (e) {
        this.behavior.onKeyDown(e.keyCode);
    };
    return Piplup;
}(GameObject));
