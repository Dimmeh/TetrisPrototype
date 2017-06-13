enum Keys{
    RIGHT = 39,
    LEFT = 37,
    A = 65,
    D = 68
}

class Moving implements Behavior{
    private pokemonBlock:GameObject;
    private deg: number;
    private stopMoving:boolean;

    constructor(t:GameObject){
        this.pokemonBlock = t;
        this.deg = 0;
        this.stopMoving = false;
    }

    update(){
        this.move();
    }

    private stopCurrentPokemonBlock(){
        this.pokemonBlock.behavior = new StopMoving(this.pokemonBlock);
    }

    onKeyDown(k:number){
        let xtarget:number = 0;
        let ytarget:number = 0;

        if(k == Keys.RIGHT || k == Keys.D){
            xtarget = 30;
        }
        else if(k == Keys.LEFT || k == Keys.A){
            xtarget = -30;
        }
        this.moveBlock(xtarget, ytarget);
    }

    private move(){
        this.moveBlock(0,30);
        this.draw();
    }

    public draw(){
        this.pokemonBlock.div.style.transform = "translate("+this.pokemonBlock.x+"px, "+this.pokemonBlock.y+"px) rotate("+this.deg+"deg)"
    }

    private moveBlock(xDirection, yDirection){
        let hit:boolean = false;
        let game = Game.instance;

<<<<<<< HEAD
        let targetObject = new FakeObject();
        targetObject.x = this.tetrisBlock.x + xDirection;
        targetObject.y = this.tetrisBlock.y + yDirection;
        targetObject.height = this.tetrisBlock.height;
        targetObject.width = this.tetrisBlock.width;
        targetObject.blocks = this.tetrisBlock.blocks;
        hit = (Util.checkCollisionGrid(targetObject));
=======
        let targetObject:FakeObject = new FakeObject();
        this.setsPropertiesFakeObject(targetObject, xDirection, yDirection);

        if(Util.CollisionGrid.checkCollision(targetObject)){
            hit = true;
            this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
        }
>>>>>>> origin/master

        for(let pokemonBlock of game.pokemonBlocks) {
            if (Util.CollisionPokemonBlock.checkCollision(pokemonBlock, targetObject)) {
                hit = true;
<<<<<<< HEAD
                break;
            }
        }

        let hitted = false;
        // nu weten we of er een hlock geraakt wordt
=======
                this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
            }
        }

        this.pokemonBlock.x = targetObject.x;
        this.pokemonBlock.y = targetObject.y;
    }

    private setsPropertiesFakeObject(targetObject, xDirection, yDirection){
        targetObject.x = this.pokemonBlock.x + xDirection;
        targetObject.y = this.pokemonBlock.y + yDirection;
        targetObject.height = this.pokemonBlock.height;
        targetObject.width = this.pokemonBlock.width;
    }

    private checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject){
        console.log("checkHITS");
>>>>>>> origin/master
        if(hit){
            if(xDirection > 0 || xDirection < 0){
                targetObject.x = this.pokemonBlock.x;
            }

            if(yDirection > 0){
<<<<<<< HEAD
                targetObject.y = this.tetrisBlock.y;


                let counter = 0;

                for(let block of targetObject.blocks){
                    // block.x += (this.tetrisBlock.x + 60);
                    // block.y += (this.tetrisBlock.y + 60);
                    for(let tetrisBlock of Game.tetrisBlocks){
                        for(let nonActiveBlock of tetrisBlock.blocks) {
                            if (Util.checkCollisionFine(block, nonActiveBlock)) {
                                console.log("HIT!");
                                // this.tetrisBlock.x = targetObject.x;
                                // this.tetrisBlock.y = targetObject.y ;
                                hitted = true;
                                break;
                            }
                            else {
                                // this.tetrisBlock.x = targetObject.x;
                                // this.tetrisBlock.y = targetObject.y;
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
        if(!hitted) {
            this.tetrisBlock.x = targetObject.x;
            this.tetrisBlock.y = targetObject.y;
        }

    }

    private move(){
        this.moveBlock(0,30);
        this.draw();
    }

    private draw(){
        this.tetrisBlock.div.style.transform = "translate("+this.tetrisBlock.x+"px, "+this.tetrisBlock.y+"px) rotate("+this.deg+"deg)"
=======
                targetObject.y = this.pokemonBlock.y;
                this.stopCurrentPokemonBlock();
            }
        }
>>>>>>> origin/master
    }
}