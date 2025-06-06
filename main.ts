namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
function 小空间展台 () {
    _08导电与绝缘 = sprites.create(assets.image`08导电与绝缘`, SpriteKind.Player)
    tiles.placeOnRandomTile(_08导电与绝缘, assets.tile`myTile4`)
    _09可软可硬 = sprites.create(assets.image`09可软可硬`, SpriteKind.Player)
    tiles.placeOnRandomTile(_09可软可硬, assets.tile`myTile5`)
    _10比黑还黑 = sprites.create(assets.image`10比黑还黑`, SpriteKind.Player)
    tiles.placeOnRandomTile(_10比黑还黑, assets.tile`10`)
    _11变色纤维 = sprites.create(assets.image`11变色纤维`, SpriteKind.Player)
    tiles.placeOnRandomTile(_11变色纤维, assets.tile`11`)
    _12千丝万缕 = sprites.create(assets.image`12千丝万缕`, SpriteKind.Player)
    tiles.placeOnRandomTile(_12千丝万缕, assets.tile`12`)
    _13打捞塑料 = sprites.create(assets.image`13打捞塑料`, SpriteKind.Player)
    tiles.placeOnRandomTile(_13打捞塑料, assets.tile`13`)
    _14光纤传输 = sprites.create(assets.image`14光纤传输`, SpriteKind.Player)
    tiles.placeOnRandomTile(_14光纤传输, assets.tile`14`)
    _15塑料烟花 = sprites.create(assets.image`15塑料烟花`, SpriteKind.Player)
    tiles.placeOnRandomTile(_15塑料烟花, assets.tile`15`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("按A键开门")
    if (controller.A.isPressed()) {
        info.startCountdown(2)
        tiles.setTileAt(location, assets.tile`myTile`)
    } else {
        pauseUntil(() => controller.A.isPressed())
    }
})
function 创梦空间展台 () {
    _01钢铁练成 = sprites.create(assets.image`01钢铁炼成`, SpriteKind.Player)
    tiles.placeOnRandomTile(_01钢铁练成, assets.tile`myTile9`)
    _02合金大比拼 = sprites.create(assets.image`02合金大比拼`, SpriteKind.Player)
    tiles.placeOnRandomTile(_02合金大比拼, assets.tile`myTile7`)
    _03液态金属 = sprites.create(assets.image`03液态金属`, SpriteKind.Player)
    tiles.placeOnRandomTile(_03液态金属, assets.tile`myTile8`)
    _04压电陶瓷 = sprites.create(assets.image`04电压陶瓷`, SpriteKind.Player)
    tiles.placeOnRandomTile(_04压电陶瓷, assets.tile`myTile10`)
    _05特种玻璃 = sprites.create(assets.image`05特种玻璃`, SpriteKind.Player)
    tiles.placeOnRandomTile(_05特种玻璃, assets.tile`myTile11`)
    _06透过玻璃看见世界 = sprites.create(assets.image`06透过玻璃看见世界`, SpriteKind.Player)
    tiles.placeOnRandomTile(_06透过玻璃看见世界, assets.tile`myTile12`)
    _07玻璃艺术 = sprites.create(assets.image`07玻璃艺术`, SpriteKind.Player)
    tiles.placeOnRandomTile(_07玻璃艺术, assets.tile`myTile13`)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (麻薯.tileKindAt(TileDirection.Left, assets.tile`myTile0`) || (麻薯.tileKindAt(TileDirection.Right, assets.tile`myTile0`) || (麻薯.tileKindAt(TileDirection.Top, assets.tile`myTile0`) || 麻薯.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)))) {
        game.setDialogTextColor(10)
        game.showLongText("欢迎来到临平科技馆", DialogLayout.Bottom)
        探索者 += 1
        game.showLongText("您是第" + 探索者 + "位探索者", DialogLayout.Bottom)
    }
})
info.onCountdownEnd(function () {
    tiles.setTileAt(tiles.getTileLocation(48, 14), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(48, 16), assets.tile`myTile1`)
})
function 第二空间展台 () {
    _16数据不等于信息 = sprites.create(assets.image`16数据不等于信息`, SpriteKind.Player)
    tiles.placeOnRandomTile(_16数据不等于信息, assets.tile`16`)
    _17识别不是理解 = sprites.create(assets.image`17识别不是理解`, SpriteKind.Player)
    tiles.placeOnRandomTile(_17识别不是理解, assets.tile`17`)
    _18表情不代表情感 = sprites.create(assets.image`18表情不代表情感`, SpriteKind.Player)
    tiles.placeOnRandomTile(_18表情不代表情感, assets.tile`18`)
    _19创作不等于创意 = sprites.create(assets.image`19创作不等于创意`, SpriteKind.Player)
    tiles.placeOnRandomTile(_19创作不等于创意, assets.tile`19`)
    _20手影化形 = sprites.create(assets.image`20手影化形`, SpriteKind.Player)
    tiles.placeOnRandomTile(_20手影化形, assets.tile`1`)
    _21火眼金睛 = sprites.create(assets.image`21火眼金睛`, SpriteKind.Player)
    tiles.placeOnRandomTile(_21火眼金睛, assets.tile`21`)
    _22声音魔术师 = sprites.create(assets.image`22声音魔术师`, SpriteKind.Player)
    tiles.placeOnRandomTile(_22声音魔术师, assets.tile`0`)
    _23移花接木 = sprites.create(assets.image`23移花接木`, SpriteKind.Player)
    tiles.placeOnRandomTile(_23移花接木, assets.tile`23`)
    _24隔空控物 = sprites.create(assets.image`24隔空控物`, SpriteKind.Player)
    tiles.placeOnRandomTile(_24隔空控物, assets.tile`24`)
    _25眼疾手快 = sprites.create(assets.image`25眼疾手快`, SpriteKind.Player)
    tiles.placeOnRandomTile(_25眼疾手快, assets.tile`2`)
    _26感知万物 = sprites.create(assets.image`26感知万物`, SpriteKind.Player)
    tiles.placeOnRandomTile(_26感知万物, assets.tile`3`)
    _27芯片小于大脑 = sprites.create(assets.image`27芯片小于大脑`, SpriteKind.Player)
    tiles.placeOnRandomTile(_27芯片小于大脑, assets.tile`27`)
    _28_AI = sprites.create(assets.image`28 AI➕`, SpriteKind.Player)
    tiles.placeOnRandomTile(_28_AI, assets.tile`28`)
}
let _28_AI: Sprite = null
let _27芯片小于大脑: Sprite = null
let _26感知万物: Sprite = null
let _25眼疾手快: Sprite = null
let _24隔空控物: Sprite = null
let _23移花接木: Sprite = null
let _22声音魔术师: Sprite = null
let _21火眼金睛: Sprite = null
let _20手影化形: Sprite = null
let _19创作不等于创意: Sprite = null
let _18表情不代表情感: Sprite = null
let _17识别不是理解: Sprite = null
let _16数据不等于信息: Sprite = null
let _07玻璃艺术: Sprite = null
let _06透过玻璃看见世界: Sprite = null
let _05特种玻璃: Sprite = null
let _04压电陶瓷: Sprite = null
let _03液态金属: Sprite = null
let _02合金大比拼: Sprite = null
let _01钢铁练成: Sprite = null
let _15塑料烟花: Sprite = null
let _14光纤传输: Sprite = null
let _13打捞塑料: Sprite = null
let _12千丝万缕: Sprite = null
let _11变色纤维: Sprite = null
let _10比黑还黑: Sprite = null
let _09可软可硬: Sprite = null
let _08导电与绝缘: Sprite = null
let 麻薯: Sprite = null
let 探索者 = 0
tiles.setCurrentTilemap(tilemap`级别1`)
let 探索者机器人 = sprites.create(assets.image`探索者计数机器人`, SpriteKind.NPC)
tiles.placeOnRandomTile(探索者机器人, assets.tile`myTile0`)
探索者 = 0
麻薯 = sprites.create(assets.image`紫色麻薯·缩减版`, SpriteKind.Player)
controller.moveSprite(麻薯)
tiles.placeOnRandomTile(麻薯, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(麻薯)
创梦空间展台()
小空间展台()
第二空间展台()
