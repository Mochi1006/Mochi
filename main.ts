namespace SpriteKind {
    export const NPC = SpriteKind.create()
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
