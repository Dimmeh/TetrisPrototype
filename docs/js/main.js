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
var GameObject = (function () {
    function GameObject() {
    }
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (v) {
            this._height = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (v) {
            this._width = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (v) {
            this._y = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        set: function (v) {
            this._div = v;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}());
var Empeleon = (function (_super) {
    __extends(Empeleon, _super);
    function Empeleon(g) {
        var _this = _super.call(this) || this;
        _this.timer = 0;
        _this.behavior = new Moving(_this);
        _this.setsPropertiesBlock(g);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Empeleon.prototype.setsPropertiesBlock = function (game) {
        this.y = 0;
        this.x = 270;
        this.width = 120;
        this.height = 120;
        this.div = document.createElement('containerBlock');
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.className = 'container_empeleon';
        var grid = document.getElementById('grid');
        grid.appendChild(this.div);
        game.subscribe(this);
    };
    Empeleon.prototype.move = function () {
        this.timer = this.timer + 5;
        if (this.timer > 60) {
            this.behavior.update();
            this.timer = 0;
        }
    };
    Empeleon.prototype.onKeyDown = function (e) {
        this.behavior.onKeyDown(e.keyCode);
    };
    Empeleon.prototype.setsStylingInPokedex = function () {
        var pokedexInfo = document.getElementById('pokemonName');
        var pokedexImage = document.getElementById('pokemonGif');
        pokedexImage.className = "empoleon";
        pokedexImage.style.width = "60px";
        pokedexImage.style.height = "60px";
        pokedexImage.style.top = "70%";
        pokedexInfo.innerText = "Empoleon";
    };
    return Empeleon;
}(GameObject));
var FakeGameObject = (function () {
    function FakeGameObject() {
    }
    Object.defineProperty(FakeGameObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (v) {
            this._height = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FakeGameObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (v) {
            this._width = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FakeGameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FakeGameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (v) {
            this._y = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FakeGameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        set: function (v) {
            this._div = v;
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(GameObject.prototype, "blocks", {
        get: function () {
            return this._blocks;
        },
        set: function (v) {
            this._blocks = v;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
=======
    return FakeGameObject;
>>>>>>> origin/master
}());
var FakeObject = (function (_super) {
    __extends(FakeObject, _super);
    function FakeObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FakeObject;
}(FakeGameObject));
var Game = (function () {
    function Game() {
        var _this = this;
<<<<<<< HEAD
        this.gameOver = false;
        this.tetrisBlock = new TetrisBlock();
=======
        this.score = 0;
        this.gameOver = false;
        this.pokemonBlocks = new Array();
        this.observers = new Array();
        this.addNewPokemonBlock();
        this.scoreBoard(this.score);
>>>>>>> origin/master
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
<<<<<<< HEAD
        this.tetrisBlock.move();
=======
        this.pokemonBlock.move();
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.setsStylingInPokedex();
        }
>>>>>>> origin/master
        if (!this.gameOver) {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.addNewPokemonBlock = function () {
        var randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0:
                this.pokemonBlock = new Piplup(this);
                break;
            case 1:
                this.pokemonBlock = new Prinplup(this);
                break;
            case 2:
                this.pokemonBlock = new Empeleon(this);
                break;
        }
    };
    Game.prototype.stopGame = function () {
        this.gameOver = true;
<<<<<<< HEAD
=======
        document.getElementById("finalScore").innerHTML = "" + this.score;
        this.showGameOverScreen();
>>>>>>> origin/master
    };
    Game.prototype.showGameOverScreen = function () {
        var gameOverDiv = document.getElementById('gameOver');
        gameOverDiv.style.display = "block";
        gameOverDiv.className = 'active';
        Util.GameOverEffect.effects();
    };
    Game.prototype.scoreBoard = function (score) {
        this.score += score;
        document.getElementById("score").innerHTML = "" + this.score;
    };
    Game.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    ;
    Game.prototype.unsubscribe = function () {
        this.observers.splice(0);
    };
    ;
    return Game;
}());
window.addEventListener("load", function () {
    var game = Game.getInstance();
});
var Keys;
(function (Keys) {
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["A"] = 65] = "A";
    Keys[Keys["D"] = 68] = "D";
})(Keys || (Keys = {}));
var Moving = (function () {
    function Moving(t) {
        this.pokemonBlock = t;
        this.deg = 0;
        this.stopMoving = false;
    }
    Moving.prototype.update = function () {
        this.move();
    };
    Moving.prototype.stopCurrentPokemonBlock = function () {
        this.pokemonBlock.behavior = new StopMoving(this.pokemonBlock);
    };
    Moving.prototype.onKeyDown = function (k) {
        var xtarget = 0;
        var ytarget = 0;
        if (k == Keys.RIGHT || k == Keys.D) {
            xtarget = 30;
        }
        else if (k == Keys.LEFT || k == Keys.A) {
            xtarget = -30;
        }
        this.moveBlock(xtarget, ytarget);
    };
    Moving.prototype.move = function () {
        this.moveBlock(0, 30);
        this.draw();
    };
    Moving.prototype.draw = function () {
        this.pokemonBlock.div.style.transform = "translate(" + this.pokemonBlock.x + "px, " + this.pokemonBlock.y + "px) rotate(" + this.deg + "deg)";
    };
    Moving.prototype.moveBlock = function (xDirection, yDirection) {
        var hit = false;
        var game = Game.instance;
        var targetObject = new FakeObject();
<<<<<<< HEAD
        targetObject.x = this.tetrisBlock.x + xDirection;
        targetObject.y = this.tetrisBlock.y + yDirection;
        targetObject.height = this.tetrisBlock.height;
        targetObject.width = this.tetrisBlock.width;
        targetObject.blocks = this.tetrisBlock.blocks;
        hit = (Util.checkCollisionGrid(targetObject));
        for (var _i = 0, _a = Game.tetrisBlocks; _i < _a.length; _i++) {
            var tetrisBlock = _a[_i];
            if (Util.checkCollision(tetrisBlock, targetObject)) {
                console.log(hit);
                hit = true;
                break;
            }
        }
        var hitted = false;
=======
        this.setsPropertiesFakeObject(targetObject, xDirection, yDirection);
        if (Util.CollisionGrid.checkCollision(targetObject)) {
            hit = true;
            this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
        }
        for (var _i = 0, _a = game.pokemonBlocks; _i < _a.length; _i++) {
            var pokemonBlock = _a[_i];
            if (Util.CollisionPokemonBlock.checkCollision(pokemonBlock, targetObject)) {
                hit = true;
                this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
            }
        }
        this.pokemonBlock.x = targetObject.x;
        this.pokemonBlock.y = targetObject.y;
    };
    Moving.prototype.setsPropertiesFakeObject = function (targetObject, xDirection, yDirection) {
        targetObject.x = this.pokemonBlock.x + xDirection;
        targetObject.y = this.pokemonBlock.y + yDirection;
        targetObject.height = this.pokemonBlock.height;
        targetObject.width = this.pokemonBlock.width;
    };
    Moving.prototype.checkHitDetectionOnPokemonBlock = function (hit, xDirection, yDirection, targetObject) {
        console.log("checkHITS");
>>>>>>> origin/master
        if (hit) {
            if (xDirection > 0 || xDirection < 0) {
                targetObject.x = this.pokemonBlock.x;
            }
            if (yDirection > 0) {
<<<<<<< HEAD
                targetObject.y = this.tetrisBlock.y;
                var counter = 0;
                for (var _b = 0, _c = targetObject.blocks; _b < _c.length; _b++) {
                    var block = _c[_b];
                    for (var _d = 0, _e = Game.tetrisBlocks; _d < _e.length; _d++) {
                        var tetrisBlock = _e[_d];
                        for (var _f = 0, _g = tetrisBlock.blocks; _f < _g.length; _f++) {
                            var nonActiveBlock = _g[_f];
                            if (Util.checkCollisionFine(block, nonActiveBlock)) {
                                console.log("HIT!");
                                hitted = true;
                                break;
                            }
                            else {
                                console.log("BLOCK: ", block.x, block.y);
                                console.log("NONACTIVEBLOCK: ", nonActiveBlock.x, nonActiveBlock.y);
                                console.log("MOVE DOWN!");
                            }
                        }
                        break;
                    }
                    break;
                }
                console.log("FINAL X AND Y: ", this.tetrisBlock);
                this.stop();
            }
        }
        if (!hitted) {
            this.tetrisBlock.x = targetObject.x;
            this.tetrisBlock.y = targetObject.y;
        }
    };
    Moving.prototype.move = function () {
        this.moveBlock(0, 30);
        this.draw();
    };
    Moving.prototype.draw = function () {
        this.tetrisBlock.div.style.transform = "translate(" + this.tetrisBlock.x + "px, " + this.tetrisBlock.y + "px) rotate(" + this.deg + "deg)";
=======
                targetObject.y = this.pokemonBlock.y;
                this.stopCurrentPokemonBlock();
            }
        }
>>>>>>> origin/master
    };
    return Moving;
}());
var Piplup = (function (_super) {
    __extends(Piplup, _super);
    function Piplup(g) {
        var _this = _super.call(this) || this;
        _this.timer = 0;
        _this.behavior = new Moving(_this);
        _this.setsPropertiesBlock(g);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Piplup.prototype.setsPropertiesBlock = function (game) {
        this.y = 0;
        this.x = 270;
        this.width = 60;
        this.height = 60;
        this.div = document.createElement('containerBlock');
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.className = 'container_piplup';
        var grid = document.getElementById('grid');
        grid.appendChild(this.div);
        game.subscribe(this);
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
    Piplup.prototype.setsStylingInPokedex = function () {
        console.log('setsPokedex');
        var pokedexInfo = document.getElementById('pokemonName');
        var pokedexImage = document.getElementById('pokemonGif');
        pokedexImage.className = "piplup";
        pokedexImage.style.width = "30px";
        pokedexImage.style.height = "41px";
        pokedexInfo.innerText = "Piplup";
    };
    return Piplup;
}(GameObject));
var Prinplup = (function (_super) {
    __extends(Prinplup, _super);
    function Prinplup(g) {
        var _this = _super.call(this) || this;
<<<<<<< HEAD
        _this.randomBlock = ['red', 'green', 'yellow', 'lightBlue', 'blue', 'purple', 'orange'];
        _this.div = document.createElement('containerBlock');
        _this.blocks = new Array();
        _this.y = 0;
        _this.x = 0;
=======
>>>>>>> origin/master
        _this.timer = 0;
        _this.behavior = new Moving(_this);
        _this.setsPropertiesBlock(g);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
<<<<<<< HEAD
    TetrisBlock.prototype.generateBlock = function () {
        var randomNum = Math.floor(Math.random() * 7);
        var blockColor = this.randomBlock[3];
        this.setsPropertyTetrisBlock(blockColor);
        this.div.className = 'container_' + blockColor;
        for (var i = 0; i < 4; i++) {
            this.blocks.push(new Blocks(blockColor));
        }
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            this.div.appendChild(block.div);
        }
        this.setsPropertyBlocks(blockColor);
        console.log("Blocks :", this.blocks);
=======
    Prinplup.prototype.setsPropertiesBlock = function (game) {
        this.y = 0;
        this.x = 270;
        this.width = 60;
        this.height = 120;
        this.div = document.createElement('containerBlock');
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.className = 'container_prinplup';
>>>>>>> origin/master
        var grid = document.getElementById('grid');
        grid.appendChild(this.div);
        game.subscribe(this);
    };
<<<<<<< HEAD
    TetrisBlock.prototype.move = function () {
        this.timer = this.timer + 15;
=======
    Prinplup.prototype.move = function () {
        this.timer = this.timer + 5;
>>>>>>> origin/master
        if (this.timer > 60) {
            this.behavior.update();
            this.timer = 0;
        }
    };
    Prinplup.prototype.onKeyDown = function (e) {
        this.behavior.onKeyDown(e.keyCode);
    };
    Prinplup.prototype.setsStylingInPokedex = function () {
        var pokedexInfo = document.getElementById('pokemonName');
        var pokedexImage = document.getElementById('pokemonGif');
        pokedexImage.className = "prinplup";
        pokedexImage.style.width = "50px";
        pokedexImage.style.height = "50px";
        pokedexInfo.innerText = "Prinplup";
    };
    return Prinplup;
}(GameObject));
var StopMoving = (function () {
    function StopMoving(tb) {
        this.game = Game.instance;
        this.className = tb.div.className;
        this.pokemonBlock = tb;
    }
    StopMoving.prototype.update = function () {
        if (this.pokemonBlock.y > 0) {
            this.addScore();
            this.game.pokemonBlocks.push(this.pokemonBlock);
            this.game.addNewPokemonBlock();
        }
        else {
            this.game.unsubscribe();
            this.game.stopGame();
        }
    };
<<<<<<< HEAD
    TetrisBlock.prototype.setsPropertyBlocks = function (c) {
        if (c == 'yellow') {
            this.blocks[0].y = 0;
            this.blocks[1].y = 30;
            this.blocks[2].y = 0;
            this.blocks[3].y = 30;
            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
        else if (c == 'red') {
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;
            this.blocks[0].x = 30;
            this.blocks[1].x = 60;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
=======
    ;
    StopMoving.prototype.addScore = function () {
        if (this.className == 'container_piplup') {
            this.game.scoreBoard(10);
>>>>>>> origin/master
        }
        else if (this.className == 'container_prinplup') {
            this.game.scoreBoard(20);
        }
        else {
            this.game.scoreBoard(40);
        }
<<<<<<< HEAD
        else if (c == 'blue') {
            this.blocks[0].y = 0;
            this.blocks[1].y = 30;
            this.blocks[2].y = 30;
            this.blocks[3].y = 30;
            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 60;
            console.log("SETS BLOCKS: ", this.blocks);
=======
    };
    StopMoving.prototype.onKeyDown = function (e) { };
    ;
    return StopMoving;
}());
var Util;
(function (Util) {
    var CollisionPokemonBlock = (function () {
        function CollisionPokemonBlock() {
>>>>>>> origin/master
        }
        CollisionPokemonBlock.checkCollision = function (go1, go2) {
            return (go1.x < go2.x + go2.width &&
                go1.x + go1.width > go2.x &&
                go1.y < go2.y + go2.height &&
                go1.height + go1.y > go2.y);
        };
        return CollisionPokemonBlock;
    }());
    Util.CollisionPokemonBlock = CollisionPokemonBlock;
    var CollisionGrid = (function () {
        function CollisionGrid() {
        }
        CollisionGrid.checkCollision = function (g1) {
            return (g1.x < 0 || (g1.x + g1.width) > 600 || g1.y + g1.height > 600);
        };
        return CollisionGrid;
    }());
    Util.CollisionGrid = CollisionGrid;
    var GameOverEffect = (function () {
        function GameOverEffect() {
        }
<<<<<<< HEAD
    };
    return TetrisBlock;
}(GameObject));
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (go1, go2) {
        return (go1.x < go2.x + go2.width &&
            go1.x + go1.width > go2.x &&
            go1.y < go2.y + go2.height &&
            go1.height + go1.y > go2.y);
    };
    Util.checkCollisionGrid = function (g1) {
        return (g1.x < 0 || (g1.x + g1.width) > 300 || g1.y + g1.height > 600);
    };
    Util.checkCollisionBlocks = function (go1, go2) {
        console.log(go1, go2);
        return true;
    };
    Util.checkCollisionFine = function (block, go2) {
        var rect1 = block.div.getBoundingClientRect();
        var rect2 = go2.div.getBoundingClientRect();
        return (rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top);
    };
    return Util;
}());
=======
        GameOverEffect.effects = function () {
            var gameOver = document.getElementById('gameOverInfo');
            TweenLite.set(gameOver, { x: 518, y: -250 });
            TweenLite.to(gameOver, 1, { x: 518, y: 92, ease: Bounce });
        };
        return GameOverEffect;
    }());
    Util.GameOverEffect = GameOverEffect;
})(Util || (Util = {}));
>>>>>>> origin/master
//# sourceMappingURL=main.js.map