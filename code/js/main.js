var game;

//creamos la ventana del juego
game = new Phaser.Game(353,498,Phaser.AUTO, "");

//phaser trabaja por estado, añadimos el primero
game.state.add("Menu", Menu);

//añadimos otro estado del juego
game.state.add("Game", Game);

game.state.start("Menu");

