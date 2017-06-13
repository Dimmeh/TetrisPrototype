<<<<<<< HEAD
class Util{
    public static checkCollision(go1:GameObject, go2:GameObject):boolean {

        return (go1.x < go2.x + go2.width &&
        go1.x + go1.width > go2.x &&
        go1.y < go2.y + go2.height &&
        go1.height + go1.y  > go2.y)
=======
namespace Util {
    export class CollisionPokemonBlock {
        public static checkCollision(go1: GameObject, go2: FakeGameObject): boolean {
            return (go1.x < go2.x + go2.width &&
            go1.x + go1.width > go2.x &&
            go1.y < go2.y + go2.height &&
            go1.height + go1.y > go2.y)
        }
>>>>>>> origin/master
    }

    export class CollisionGrid {
        public static checkCollision(g1: FakeGameObject): boolean {
            return (g1.x < 0 || (g1.x + g1.width) > 600 || g1.y + g1.height > 600);
        }
    }

<<<<<<< HEAD
    private static checkCollisionBlocks(go1:GameObject, go2:GameObject):boolean{
        console.log(go1,go2);
        return true
    }

    public static checkCollisionFine(block:Blocks, go2:Blocks):boolean {

        let rect1 = block.div.getBoundingClientRect();
        let rect2 = go2.div.getBoundingClientRect();
        // for(let obj1 of go1.blocks) {
        //     for(let obj2 of go2.blocks) {





                return (rect1.left < rect2.right &&
                        rect1.right > rect2.left &&
                        rect1.top < rect2.bottom &&
                        rect1.bottom  > rect2.top)
            // }
        // }


=======
    export class GameOverEffect{
        public static effects(){
            let gameOver = document.getElementById('gameOverInfo');
            TweenLite.set(gameOver, {x:518, y:-250});
            TweenLite.to(gameOver, 1, {x:518, y:92,ease:Bounce});
        }
>>>>>>> origin/master
    }
}