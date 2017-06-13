<<<<<<< HEAD
class Game {
    private static instance:Game;
    private tetrisBlock:TetrisBlock;
    private gameOver: boolean;
    // static weg
    // Game.getInstance().tetrisBlocks;
    public static tetrisBlocks : Array<TetrisBlock> = new Array<TetrisBlock>();

    constructor(){
        this.gameOver = false;
        this.tetrisBlock = new TetrisBlock();
=======
///<reference path="observable.ts"/>


class Game implements Observable{
    public static instance:Game;
    private pokemonBlock:GameObject;
    private gameOver: boolean;
    private score:number;
    public pokemonBlocks : Array<GameObject>;

    public observers:Array<Observer>;

    constructor(){
        this.score = 0;
        this.gameOver = false;

        this.pokemonBlocks = new Array<GameObject>();
        this.observers = new Array<Observer>();

        this.addNewPokemonBlock();
        this.scoreBoard(this.score);
>>>>>>> origin/master
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
<<<<<<< HEAD
        this.tetrisBlock.move();
=======
        this.pokemonBlock.move();

        for(let o of this.observers){
            o.setsStylingInPokedex();
        }

>>>>>>> origin/master
        if(!this.gameOver){
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    public addNewPokemonBlock(){
        // let randomNum:number = Math.floor(2);
        let randomNum:number = Math.floor(Math.random() * 3);

        switch (randomNum){
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
    }

    public stopGame(){
        this.gameOver = true;
<<<<<<< HEAD
=======
        document.getElementById("finalScore").innerHTML = ""+this.score;
        this.showGameOverScreen();
>>>>>>> origin/master
    }

    private showGameOverScreen(){
        let gameOverDiv = document.getElementById('gameOver');
        gameOverDiv.style.display = "block";
        gameOverDiv.className = 'active';
        Util.GameOverEffect.effects();
    }

    public scoreBoard(score:number){
        this.score += score;
        document.getElementById("score").innerHTML = ""+this.score;
    }

    public subscribe(o:Observer):void{
        this.observers.push(o);
    };

    public unsubscribe():void{
        this.observers.splice(0);
    };

}

window.addEventListener("load", function(){
    let game:Game = Game.getInstance();

});