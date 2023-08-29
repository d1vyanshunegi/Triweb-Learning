class musicPlayer{
    start = () => {
        console.log("Music player running!");
    }

    stop = () => {
        console.log("Music player stopped!");
    }
}

const player = new musicPlayer();
player.start();
player.stop();