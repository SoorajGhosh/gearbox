import "../sass/main.scss";
import "./canvas.js"
import {GearBox} from './GearBox';

const animate = () => {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(animate);
};
  
  

const init = () => {
    animate();
    GearBox();
}

init();

// Hot Module Replacement
if (module && module.hot) module.hot.accept();
