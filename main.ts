info.onScore(100, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`レベル2`)
mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
