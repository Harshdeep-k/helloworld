const {Engine,World,Bodies,Body}=Matter;


let engine,world;
let plinko=[],particle=[],division=[];
let ground,leftwall,rightwall;
let p=1;
/*let plinkoSound;
function preload()
{
  //plinkoSound=loadSound("plinkofalling.mp3");
}*/
function setup() 
{
  createCanvas(480,800);
  //plinkoSound.loop();
  engine=Engine.create();
  world=engine.world;

  for(let k=15;k<width;k+=50)
  {
    division.push(new Division(k,height-150,10,300));
  }
  ground=new Ground(width/2,height-10,width,20);
  leftwall=new Ground(5,height/2,10,height);
  rightwall=new Ground(width-5,height/2,10,height);
 
  for(let k=0; k<4;k++){
    p=p*(-1);
    for(let j=28;j<=width;j+=50)
    {
      plinko.push(new Plinko(j+(p*12),75+k*100));
    }
   }
  Engine.run(engine);
  
}

function draw() 
{
  background("black"); 
  for(let k in division)
  {
    division[k].display();
  }
  for(let k in plinko)
  {
    plinko[k].display();
  }
  
  if(frameCount%20===0)
  {
    particle.push(new Particle(random(40,440),10));
  }
  for(let k in particle)
  {
    particle[k].display();
  }
  ground.display();
  leftwall.display();
  rightwall.display();
}