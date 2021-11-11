let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = window.innerWidth
hydraCanvas.height = window.innerHeight
hydraCanvas.id = "hydraCanvas";
hydraCanvas.style.position = "absolute";
hydraCanvas.style.zIndex = 2;
hydraCanvas.style.top = 0;
hydraCanvas.style.left = 0;
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: false });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: true,
  enableStreamCapture: false,

});
document.querySelector(".placeholder").appendChild(hydraCanvas)




var elt;
const s = ( p1 ) => {

  let x = 200;
  let y = 200;
  
  p1.setup = () => {
    let canvas = p1.createCanvas(hydraCanvas.width, hydraCanvas.height);
    p1.pixelDensity(2);
    elt = canvas.elt;
    s0.init({src: elt})
    canvas.hide();
  };

// wasteland
// an interactive audio-visual NFT
// by: thingticketNFT
// tw: @thingticket
// a tribute to: Circular dystopia
// by: Daniel Oropeza
// Tw: @ferdoropeza
// made with: hydra (https://hydra.ojack.xyz/)
// hydra created by: olivia jack
// tw: @_ojack_
// special thanks: c0d3 p03try (https://c0d3-p03try.neocities.org/)
// text display method inspired by livecoding youtube video by Flor de Fuego (https://www.youtube.com/watch?v=7RqPdqnYrxA) accessed nov 7 2021 

  textArray = ["FUCK", "SHIT", "UP!"]
  
p1.draw = () => {
 if (p1.mouseIsPressed){
 p1.fill(p1.random(255),p1.random(255),p1.random(255));
 } else {
  p1.fill(245,243,239);
  }
  
  p1.clear()
  index = Math.floor(time*0.666%textArray.length)
  p1.text(textArray[index], (p1.displayWidth/19) + 240, (p1.displayHeight/2) + 180)
    
p1.textSize(.15*window.innerWidth)

};

  var audio = new Audio('wasteland.mp3');

};

let myp5 = new p5(s);

A = window.innerHeight/window.innerWidth
src(o0).saturate(mouse.y/300).scale(.7)
.layer(solid(1,-.85,.065))
.layer(src(o0).scrollX(-.002).diff(shape(3,.9).scrollY(1).luma()))
.layer(src(o0).scrollX(20).mult(shape(3,.7).repeat(10,10).scale([1,1].fast(.25),0.6,1).luma().modulateScale(osc(1),.7,1)) )
.layer(shape(300,.555).scale(1.05,A,.96).luma(.1).color(0.35,0.4,0.42).hue(()=>mouse.y/7000).scrollX([.1,.2].ease('easeInOutCubic').fast(.19)))
.layer(shape(300,.555).scale(.74,A,1.07).luma(.3).color(0,0.12,0.1).hue(()=>mouse.x/1000).scrollY([-.01,.01].ease('easeInOutCubic').fast(0.42).offset(.15)))
.layer(shape(300,.555).scale(1.09,A,.91).luma(.1).color(0.95,0.91,0.91).hue(()=>mouse.x/3000).scrollY(0,.01))
.out(o0);

src(o1)
.layer(
  shape(2,.001,15).r().mult(
    osc(100,.005).thresh(.01).mult(osc(100,.005).thresh(.01).rotate(Math.PI/2.3)))
    .invert()
  .scrollX(0,.1)
  .modulateScale(
    gradient().g().color(1,0).add(solid(0,0)),16,2).scrollY(-.35)
)
.add(src(o0))
.out(o1);

src(s0)
  .scrollX(0,.3)
  .scrollY(-.25,.1)
  .repeat([1,3,6],[1.5,2,3])
  .diff(src(s0).scrollY(0.001))
  .modulateScale(osc(2),.01,.99)
.add(src(o1))
  .invert(0)
.modulate(osc(.2).rotate(()=>-.5+mouse.x/100),()=>mouse.x/9900)
.contrast(.9,.7)
.blend(src(o3))
.blend(src(o2))
.out(o2);

src(o3)
.layer(src(o2).mask(shape(5,[0.1,0.5,0.6,.7].smooth(),0).scale(1.5,A,.75)
.modulateScale(gradient().g())))
  .scrollX([-0.001, 0])
  .scrollY([0, -0.001])
  .modulateScale(osc(3),.01,.99)
.modulate(osc(5).rotate(()=>.4-mouse.x/1100),()=>.1-mouse.y/6000)
.out(o3);
render(o3);

