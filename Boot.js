/**
 * Created by raymo on 1/19/2016.
 */
var TopDown = TopDown || {};

TopDown.Boot = function(){};
// seetings and configurations

TopDown.Boot.prototype = {
    preload:function(){
        //assets - loading screen
        this.load.image();

    },
    create:function(){
        //loading screen - white
        this.game.stage.backgroundColor = '#fff';
        //scaling options
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //horizontal
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        ///physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.state.start('Preload');
    }



};