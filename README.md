# wasteland
wasteland - an interactive audio-visual nft (https://www.hicetnunc.xyz/objkt/525039)
<br>software licenced under GNU General Public License v3.0.
<br>media (audio) copyright 2021 thingticketNFT (https://twitter.com/thingticket).
<br>
<br>this repository is an example of source material for creating a hydra (https://hydra.ojack.xyz/) interactive nft minted on hicetnunc (https://www.hicetnunc.xyz/) with additional p5js elements as well as audio. hydra created by olivia jack (https://twitter.com/_ojack_)
<br>best practice is to include all js libraries as well as the required index.html and thumbnail. style.css appears to be unnecessary but is included in this repo for experimentation purposes.
<br>wasteland the nft is a tribute to Circular dystopia (https://t.co/uHXcAfBU9v?amp=1) by Daniel Oropeza. the hydra code contained in wasteland.js is adapted from Daniel's code. 
<br>
<br>this repo is experimental and a work in progress. use at your own risk. :)
<br>
<br>follow the guidelines provided by https://github.com/hicetnunc2000/hicetnunc/wiki/Interactive-OBJKTs. this is an elaboration on the html method.
<br>
<br>
<br>ipfs link: https://ipfs.io/ipfs/QmeJbjP5UcJKiANfcspKrdAe7rySLfyxZ7CbdvP3nwF4xG
<br>you may need to enable autoplay audio in the browser.
<br>
<br>// special thanks: c0d3 p03try (https://c0d3-p03try.neocities.org/)
<br>// text display method inspired by livecoding youtube video by Flor de Fuego 
<br>// (https://www.youtube.com/watch?v=7RqPdqnYrxA) accessed nov 7 2021 
<br>// run the code below at https://hydra.ojack.xyz/ for a close approximation of visuals
<br>// extra text effects with p5js
<br>
<code>
  A = window.innerHeight/window.innerWidth

src(o1).saturate(mouse.y/300)
.layer(solid(1,-.85,.065))
.layer(src(o1).scrollX(-.002).diff(shape(3,.9).scrollY(1).luma())
      )
.layer(src(o1).scrollX(20).mult(shape(3,.7).repeat(10,10).scale([1,1].fast(.25),0.6,1).luma().modulateScale(osc(1),.7,1)) )
.layer(shape(300,.555).scale(1.05,A,.96).luma(.1).color(0.35,0.4,0.42).hue(()=>mouse.y/7000).scrollX([.1,.2].ease('easeInOutCubic').fast(.19)))
.layer(shape(300,.555).scale(.74,A,1.07).luma(.3).color(0,0.12,0.1).hue(()=>mouse.x/1000).scrollY([-.01,.01].ease('easeInOutCubic').fast(0.42).offset(.15)))
.layer(shape(300,.555).scale(1.09,A,.91).luma(.1).color(0.95,0.91,0.91).hue(()=>mouse.x/3000).scrollY(0,.01))

.out(o1);

solid()
.layer(
  shape(2,.001,15).r().mult(
    osc(100,.005).thresh(.01).mult(osc(100,.005).thresh(.01).rotate(Math.PI/2.3)))
    .invert()
  .scrollX(0,.1)
  .modulateScale(
    gradient().g().color(1,0).add(solid(0,0)),16,2).scrollY(-.35)
)
.out(o2);

src(o3)
  .layer(src(o0).mask(shape(5,[0.125,0.5,0.75,.8].smooth(),0).scale(1.5,A,.75)
.modulateScale(gradient().g())))
  .scrollX([-0.001, 0])
  .scrollY([0, -0.001])
  .modulateScale(osc(3),.01,.99)
.modulate(osc(5).rotate(()=>.4-mouse.x/1100),()=>.1-mouse.y/6000)
  .out(o3);

render(o3);


/*
*text display method inspired by livecoding youtube video by Flor de Fuego (https://www.youtube.com/watch?v=7RqPdqnYrxA) accessed nov 7 2021 
*/
p1=new P5()

textArray = ["FUCK", "SHIT", "UP!"]
p1.textSize(.15*p1.displayWidth)
p1.fill(245,243,239);
p1.draw = () => {
  p1.clear()
  index = Math.floor(time*0.666%textArray.length)
  p1.text(textArray[index], (p1.displayWidth/19) + 240, (p1.displayHeight/2) + 180)
}

p1.hide()

s0.init({src: p1.canvas})

src(s0)
  .scrollX(0,.3)
  .scrollY(-.25,.1)

  .repeat([1,3,6],[1.5,2,3])
  .modulateScale(osc(2),.01,.99)
  .diff(src(s0).scrollY(0.001))

  .blend(src(o2))
  .add(src(o3))
  .blend(src(o1))
  .contrast(1,0.7)
  .invert(0)

.modulate(osc(.2).rotate(()=>-.5+mouse.x/100),()=>mouse.x/9900)
  .out(o0);
</code>
<br>tags:
<br>music
<br>interactive
<br>audio-visual
<br>p5js
<br>creativecoding
<br>hydra
<br>instrumental

