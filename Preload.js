/**
 * Created by raymo on 1/19/2016.
 */
var TopDown = TopDown || {};

TopDown.Preload = function(){};

TopDown.Preload.prototype ={
        preload:function(){
            //show loading screen
            this.preloadBar = this.add.sprite(this.game.world.centerX,this.game.world.centerY+ 128, 'preloadbar');
            this.preloadBar.anchor.setTo(0.5);

            this.load.setPreloadSprite(this.preloadBar);

            //load game assets
            this.load.tilemap('level 1','TileMap/TileMap1.tmx',null, Phaser.Tilemap.TILED_JSON);

        },
       create:function(){this.state.start('Game');}



};


