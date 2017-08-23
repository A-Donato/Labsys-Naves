var Menu = {
    preload : function () {
        //carga el la pantalla principal
        game.load.spritesheet("space","images/escenario.jpg",353,498);
    },

    create: function () {
        var space = this.game.add.sprite(0,0,"space");
        var go = space.animations.add("go");
        space.animations.play("go",10, true);



    }
};