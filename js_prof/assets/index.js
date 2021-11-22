const video = document.querySelector("video") // estamos trayendo del HTML la etiqueta con selector "video"
        const button = document.querySelector("button")

        function MediaPlayer(config){
            this.media = config.el
        }

        MediaPlayer.prototype.play = function(){
            if(this.media.paused){
                this.media.play();
            } else {
                this.media.pause()
            }
        }

        button.onclick = () => player.play();

        const player = new MediaPlayer({el: video});

        


        