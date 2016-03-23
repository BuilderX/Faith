/**
 * Created by raymo on 1/19/2016.
 */
var TopDown = TopDown || {};

TopDown.game = new Phase.Game(160,160,Phaser.AUTO,'');

TopDown.game.state.add('Boot', TopDown.Boot);
TopDown.game.state.add('Preload', TopDown.Preload);
TopDown.game.state.add('Game',TopDown);

TopDown.game.state.start('Boot');

function initTiles(rows, cols, mines) {

}
function createGame(options){
    return {
        cols:options.cols,
        rows:options.cols,
        tiles:initTiles(options.rows,options.cols, options.mines)
    };

}
function revealTile(game,tile){
    //game.tiles[tile].isRevealed = true;
    game.setIn(['tiles', tiles, 'isRevealed'],true);

    var updatedTile = game.get('tiles').get(tile).set('isRevealed',true);


}