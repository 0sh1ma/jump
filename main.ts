scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`レベル2`)
mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
