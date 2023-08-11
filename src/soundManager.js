class SoundManager{
    constructor(sceneObj){
        this.sceneObj=sceneObj;
        this.backgroundMusic=this.sceneObj.sound.add("gamePlayMusic");
        // this.jumpSound=this.sceneObj.sound.add("jumpSound");
    }

    play(key,loop=false){
        key.play();
        key.loop=loop;
    }

    stop(key){
        key.stop();
    }

}