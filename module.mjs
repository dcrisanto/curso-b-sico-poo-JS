import { PlatziClass } from './main-module.mjs';

/* Creando una instancia del prototipo PlatziClass */

const platziClass1 = new PlatziClass({
    name: 'Video 1',
    videoID: '84834399876'
});

platziClass1.play();
platziClass1.pause();
console.log(platziClass1);