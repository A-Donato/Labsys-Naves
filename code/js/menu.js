var Menu = {
    preload : function () {
        //carga el la pantalla principal
        game.load.spritesheet("space","images/escenario.jpg",353,498);
        game.load.image("boton","images/start.png",50,50);
    },

    create: function () {
        var space = this.game.add.sprite(0,0,"space");
        var go = space.animations.add("go",[2,4,8,0,5,7,6,9,3,10,1]);
        space.animations.play("go",10, true);



        this.add.button(60, 468/2, "boton" , this.startGame, this).scale.setTo(0.5,0.5);

    },

    startGame: function () {

        // Change the state to the actual game.

        this.state.start('Game');

    }
};