// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`460008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0a0a0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0a0a0a0000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000900000000000000000000000000000000000a0a0a0a0000000503060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0a0a0a0000050704070600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0b0b0a0005070704070706000000000000000800000000000008000000000000000800000000000000000008000000000800000000000800000000000000000000000000000a0c0c0a0507070704070707060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0c0c0a01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
......................................................................
......................................................................
......................................................................
......................................................................
......................................................................
......................................................................
......................................................................
2222222222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile1,myTiles.tile2,sprites.builtin.brick,sprites.dungeon.hazardHole,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile":
            case "tile1":return tile1;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
