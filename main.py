@namespace
class SpriteKind:
    NPC = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.splash("按A键开门")
    if controller.A.is_pressed():
        info.start_countdown(2)
        tiles.set_tile_at(location, assets.tile("""
            myTile
            """))
    else:
        
        def on_pause_until():
            pass
        pause_until(on_pause_until)
        
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile)

def on_a_pressed():
    global 探索者
    if 麻薯.tile_kind_at(TileDirection.LEFT, assets.tile("""
        myTile0
        """)) or (麻薯.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        myTile0
        """)) or (麻薯.tile_kind_at(TileDirection.TOP, assets.tile("""
        myTile0
        """)) or 麻薯.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile0
        """)))):
        game.set_dialog_text_color(10)
        game.show_long_text("欢迎来到临平科技馆", DialogLayout.BOTTOM)
        探索者 += 1
        game.show_long_text("您是第" + str(探索者) + "位探索者", DialogLayout.BOTTOM)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    tiles.set_tile_at(tiles.get_tile_location(48, 14),
        assets.tile("""
            myTile1
            """))
    tiles.set_tile_at(tiles.get_tile_location(48, 16),
        assets.tile("""
            myTile1
            """))
info.on_countdown_end(on_countdown_end)

麻薯: Sprite = None
探索者 = 0
tiles.set_current_tilemap(tilemap("""
    级别1
    """))
计数电脑 = sprites.create(img("""
        . . . b b b b b b b b b . . . .
        . . b 1 d d d d d d d 1 b . . .
        . b 1 1 1 1 1 1 1 1 1 1 1 b . .
        . b d b c c c c c c c b d b . .
        . b d c 6 6 6 6 6 6 6 c d b . .
        . b d c 6 d 6 6 6 6 6 c d b . .
        . b d c 6 6 6 6 6 6 6 c d b . .
        . b d c 6 6 6 6 6 6 6 c d b . .
        . b d c 6 6 6 6 6 6 6 c d b . .
        . b d c c c c c c c c c d b . .
        . c b b b b b b b b b b b c . .
        c b c c c c c c c c c c c b c .
        c 1 d d d d d d d d d d d 1 c .
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c .
        c b b b b b b b b b b b b b c .
        c c c c c c c c c c c c c c c .
        """),
    SpriteKind.NPC)
tiles.place_on_random_tile(计数电脑, assets.tile("""
    myTile0
    """))
探索者 = 0
麻薯 = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . b b b b . . . . . .
        . . . . b b 3 3 3 3 b b . . . .
        . . . c b 3 3 3 3 1 1 b c . . .
        . . c b 3 3 3 3 3 1 1 1 b c . .
        . c b 1 1 1 3 3 3 3 1 1 3 c c .
        c b d 1 1 1 3 3 3 3 3 3 3 b b c
        c b b d 1 3 3 3 3 3 1 1 1 b b c
        c b b b 3 3 1 1 3 3 1 1 d d b c
        . c b b b d d 1 1 3 b d d d c .
        . . c c b b d d b b b b c c . .
        . . . . c c c c c c c c . . . .
        . . . . . b b d 1 1 b . . . . .
        . . . . . b d d 1 1 b . . . . .
        """),
    SpriteKind.player)
controller.move_sprite(麻薯)
tiles.place_on_random_tile(麻薯, sprites.dungeon.collectible_insignia)
scene.camera_follow_sprite(麻薯)