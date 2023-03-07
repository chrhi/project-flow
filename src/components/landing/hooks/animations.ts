

export const runAnimations = (c:HTMLCanvasElement| null) => {
   
const $ = c?.getContext('2d');
let x 
let y

const col = function(x:number, y:number, r:number, g:number, b:number) {
    if(!$) return
  $.fillStyle = `rgb(${r},${g},${b})`;
  $.fillRect(x, y, 1,1);

}
const R = function(x:number, y:number, t:number) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

const G = function(x:number, y:number, t:number) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

const B = function(x:number, y:number, t:number) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

let t = 0;



const run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
     col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.01;
  window.requestAnimationFrame(run);
}

run();
}