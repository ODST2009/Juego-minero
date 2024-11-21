    var minero
    var background, background2
    var carretilla, carretilla2, fogata
    var diamante, rubi, oro, plata, bronce
    var puntaje = 0
    var usebackground2 = false
    
   //precargar multimedia
   function preload(){
    mineroImg = loadImage("recursos/minero.png");
    diamanteImg = loadImage("recursos/diamante.png");
    rubiImg = loadImage("recursos/rubi.png");
    oroImg = loadImage("recursos/oro.png");
    plataImg = loadImage("recursos/plata.png");
    bronceImg = loadImage("recursos/bronce.png");
    backgroundImg = loadImage("recursos/background.png"); 
    background2Img = loadImage("recursos/background2.png");  
    carretillaImg = loadImage("recursos/carretilla.png");
    fogataImg = loadImage("recursos/fogata.png");
}
   
   
    //configuracion inicial
    function setup(){
      /*  //fondo1
        background = createSprite(600,300);
        background.addImage("background",backgroundImg);
        background.visible = true;
        //fondo2
        background2 = createSprite(600,300);
        background2.addImage("background2", background2Img);
        background2.visible = false;*/
        //crear minero
        minero = createSprite(250, 600, 15, 15);
        minero.addImage("minero",mineroImg);
        minero.scale = 0.2
         
       
        /*
        //crear carretilla
        carretilla = createSprite(50, 50, 50, 50);
        carretilla.addImage("carretilla", carretillaImg);
        carretilla.scale = 0.1*/
        
        //crear fogata
        /*fogata = createSprite(100, 50, 50, 50);
        fogata.addImage("fogata",fogataImg);
        fogata.scale = 0.05*/

        //craer canvas
        createCanvas(600,600);
        //crear el grupo
        carretilla2Group = new Group();
        }
   
   //loop para ver cambios en el juego
   function draw(){
     //background(180);

     // controles del juego
     if (keyDown("left")){
         minero.x -= 5;  
     }
     if (keyDown("right")){
         minero.x += 5;  
     }
     if (keyDown("up")){
         minero.y -= 5;  
     }
     if (keyDown("down")){
         minero.y += 5;  
     }
    
       
        //carretilla
     if (World.frameCount %250 === 0){
        carretilla2 = createSprite(300, 20, 50, 50);
        carretilla2.velocityY = 4
        carretilla2.lifetime = 200
        carretilla2.scale = 0.08;
        carretilla2.addImage(carretillaImg);
        carretilla2.x = Math.round(random(20, 800))
        carretilla2Group.add(carretilla2);
    }
    //choque con la carretilla
    for (var i = 0; i < carretilla2Group.length; i++){
        carretilla = carretilla2Group[i];
        if (minero.isTouching(carretilla)){
            usebackground2 = !usebackground2;
            carretilla.remove();
        }
    }
   //Minerales
    //diamante
    if (World.frameCount %200 === 0){
        diamante = createSprite (300, 20, 50, 50);
        diamante.velocityY = 4
        diamante.lifetime = 200
        diamante.scale = 0.05;
        diamante.addImage(diamanteImg);
        diamante.x = Math.round(random(20, 800))
    }
    //rubi
    if (World.frameCount %175 === 0){
        rubi = createSprite (300, 20, 50, 50);
        rubi.velocityY = 4
        rubi.lifetime = 200
        rubi.scale = 0.03;
        rubi.addImage(rubiImg);
        rubi.x = Math.round(random(20, 800))
    }
    //oro
    if (World.frameCount %150 === 0){
        oro = createSprite (300, 20, 50, 50);
        oro.velocityY = 4
        oro.lifetime = 200
        oro.scale = 0.05;
        oro.addImage(oroImg);
        oro.x = Math.round(random(20, 800))
    }
    //plata
    if (World.frameCount %100 === 0){
        plata = createSprite (300, 20, 50, 50)
        plata.velocityY = 4
        plata.lifetime = 200
        plata.scale = 0.05;
        plata.addImage(plataImg);
        plata.x = Math.round(random(20, 800))
    }
    //bronce
    if (World.frameCount %80 === 0){
        bronce = createSprite (300, 20, 50, 50)
        bronce.velocityY = 4
        bronce.lifetime = 200
        bronce.scale = 0.05;
        bronce.addImage(bronceImg);
        bronce.x = Math.round(random(20, 800))
    }
      
    //cabio de fondos
    if (usebackground2){
        background(background2Img);
    }else{
        background(backgroundImg);
    }
     //puntaje
     textSize(30);
     fill("white");
     text("Puntaje: " + puntaje, 400, 50);

    //colisones
      //diamante
         if (diamante && minero && diamante.isTouching(minero)) {
            diamante.destroy();
            puntaje += 10;
            //puntaje = puntaje +1;
        }
        //rubi
        if (rubi && minero && rubi.isTouching(minero)) {
            rubi.destroy();
            puntaje += 10;
        }
        //oro
        if (oro && minero && oro.isTouching(minero)) {
            oro.destroy();
            puntaje += 10;
        }
        //plata
        if (plata && minero && plata.isTouching(minero)) {
            plata.destroy();
            puntaje += 10;
        }
        //bronce
        if (bronce && minero && bronce.isTouching(minero)) {
            bronce.destroy();
            puntaje += 10;
        }





     /*if(minero.isTouching(carretilla2Group) && background2.visible == true){
        background.visible = true;
        background2.visible = false;
     }*/


     drawSprites();
 }



  


    // otro codigo

    /*if(minero.isTouching(carretilla2Group)){
        background.visible = false;
        background2.visible = true;
     }*/

   /* 
     lluviademinerales();
   
   function lluviademinerales(){
        if(World.frameCount %70 === 0){
          resources = createSprite(300, 20, 50, 50);
          resources.velocityY = 4
          resources.lifetime = 200
          resources.scale = 0.05;
          resources.x = Math.round(random(20, 800))
  
         var rand = Math.round(random(1,5));
          switch (rand){
                  case 1: resources.addImage(diamanteImg);
              break;
                  case 2: resources.addImage(rubiImg);
              break;    
                  case 3: resources.addImage(oroImg);
              break;
                  case 4: resources.addImage(plataImg);
              break;
                  case 5: resources.addImage(bronceImg);
              break;
             
              }
              resourcesGroup.add(resources);
              
          }
  
      } 
          
      grupo
      
      resourcesGroup = new Group();*/