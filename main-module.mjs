/* Módulos de ECMAScrip 6 */

/* Creando funciones por fuera para acceder a la url del video */
const playVideo = (id) => {
    const secretUrl = `https://video-secreto/${id}`;
    console.log(`Se está reproduciendo el video secreto: ${secretUrl}`)
};

const pauseVideo = (id) => {
    const secretUrl = `https://video-secreto/${id}`;
    console.log(`Se está pausando el video secreto: ${secretUrl}`)

}

/* Colocando export para que el prototipo con sintaxis de clase se pueda acceder desde cualquier otro script en nuestra aplicación */ 

export class PlatziClass {
    constructor({
        name,
        videoID
    }){
        this.name = name;
        this.videoID = videoID;
    }
    play() {
        playVideo(this.videoID);
    }

    pause() {
        pauseVideo(this.videoID)
    }
}

