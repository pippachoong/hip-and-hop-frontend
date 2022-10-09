
import Phaser from './lib/phaser.js'

class PreloadScene extends Phaser.Scene {

    constructor() {
        super('PreloadScene');
        console.log('preload constructor done');
    }

    preload() {
        console.log('preload begin');
        this.load.audio('jump', 'assets/jump.m4a');
        this.load.audio('hit', 'assets/hit.m4a');
        this.load.audio('reach', 'assets/reach.m4a');

        this.load.image('ground', 'assets/groundLayer2.png');
        this.load.image('bunny-idle', 'assets/bunny2_ready.png');
        this.load.image('bunny-hurt', 'assets/bunny2_hurt.png');
        this.load.image('restart', 'assets/restart.png');
        this.load.image('game-over', 'assets/game-over.png');
        this.load.image('cloud', 'assets/cloud.png');

        this.load.spritesheet('star', 'assets/stars.png', {
            frameWidth: 9, frameHeight: 9
        });

        this.load.spritesheet('moon', 'assets/moon.png', {
            frameWidth: 20, frameHeight: 40
        });

        this.load.spritesheet('bunny', 'assets/bunny-updated.png', {
            frameWidth: 88,
            frameHeight: 151
        })

        this.load.spritesheet('bunny-down', 'assets/dino-down.png', {
            frameWidth: 118,
            frameHeight: 94
        })

        this.load.spritesheet('enemy-bird', 'assets/enemy-bird.png', {
            frameWidth: 92,
            frameHeight: 77
        })

        // obstacles
        this.load.image('obsticle-1', 'assets/cactuses_small_1.png')
        this.load.image('obsticle-2', 'assets/cactuses_small_2.png')
        this.load.image('obsticle-3', 'assets/cactuses_small_3.png')
        this.load.image('obsticle-4', 'assets/cactuses_big_1.png')
        this.load.image('obsticle-5', 'assets/cactuses_big_2.png')
        this.load.image('obsticle-6', 'assets/cactuses_big_3.png')
        console.log('preload end');
    }

    create() {
        this.scene.start('PlayScene');
        console.log('preload create?');
    }
}

export default PreloadScene;
