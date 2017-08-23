var ship, aliens, score, speed, scoreTextValue, speedTextValuetextStyle_Key, textStyle_Value;

var Game = {
    preload: function () {
        game.load.image("ship","images/nave.png");
        game.load.image("aliens","images/enemigo.png");
        game.load.spritesheet("shot","images/shot.png",6,23);
        game.load.spritesheet("space","images/escenario.jpg",353,498);


    },
    
    create : function () {

        var space = this.game.add.sprite(0,0,"space");
        var go = space.animations.add("go",[2,4,8,0,5,7,6,9,3,10,1]);
        space.animations.play("go",10, true);

        //inicializamos
        ship = null;
        aliens = [];
        score = 0;
        speed = 0;

        //controlador de flechitas
        cursors = game.input.keyboard.createCursorKeys();

        //creamos la nave
        ship = game.add.sprite(60,200,"ship");


        //generamos los enemigos

        for(var i = 0; i < 4; i++){
            aliens[i] = game.add.sprite(20 + 80 * i, 50,"aliens").scale.setTo(0.5,0.5);
        }

        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

        // Score.
        game.add.text(30, 20, "SCORE",textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(),textStyle_Value);
        // Speed.
        game.add.text(240, 20, "SPEED",textStyle_Key);
        speedTextValue = game.add.text(300, 18, speed.toString(),textStyle_Value);
    },

    update: function () {

    },


}