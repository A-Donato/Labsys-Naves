var ship, spaceKey,aliens, score, speed, scoreTextValue, speedTextValue, textStyle_Key, textStyle_Value, direction, new_direction , cursors;
var sprite;
var bullet;
var bullets;
var bulletTime = 0;

var Game = {
    preload: function () {
        game.load.image("ship","images/nave.png");
        game.load.image("aliens","images/enemigo.png");
        game.load.spritesheet("bullet","images/disparo3.png",6,23);
        game.load.spritesheet("space","images/escenario.jpg",353,498);


    },
    
    create : function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        var space = this.game.add.sprite(0,0,"space");
        var go = space.animations.add("go",[2,4,8,0,5,7,6,9,3,10,1]);
        space.animations.play("go",10, true);

        //inicializamos
        ship = game.add.sprite(150,450,"ship");
        aliens = [];
        score = 0;
        speed = 0;
        direction = "right";
        new_direction = null;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(ship,bullets);
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;

        bullets.createMultiple(10, 'bullet');
        bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
        bullets.setAll('checkWorldBounds', true);

        //controlador de flechitas
        cursors = game.input.keyboard.createCursorKeys();
        //  Register the keys.
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //  Stop the following keys from propagating up to the browser
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

        //generamos los enemigos
        for(var i = 0; i < 8; i++){
            aliens[i] = game.add.sprite(20 + 40 * i, 50,"aliens").scale.setTo(0.2,0.2);
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
        ship.body.velocity.x = 0;
        if (cursors.left.isDown)
        {
            //  Move to the left
            ship.body.velocity.x = -150;

            ship.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            ship.body.velocity.x = 150;

            ship.animations.play('right');
        }
        else
        {
            //  Stand still
            stopShip();
        }


        if(ship.x >= 353 || ship.x <=0){
            ship.animations.stop();
        }
       // if (this.spaceKey.isDown)
        //{
        //    fireBullet();
        //}



        speed = Math.min(10, Math.floor(score/5));
        // Update speed value on game screen.
        speedTextValue.text = '' + speed;


    },

}
function stopShip(){
}

function fireBullet (){

    if (game.time.now > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(ship.x + 20, ship.y);
            bullet.body.velocity.y = -300;
            bulletTime = game.time.now + 250;
        }
    }

}

//  Called if the bullet goes out of the screen
function resetBullet (bullet) {

    bullet.kill();

}