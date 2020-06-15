"use strict"

var contador=0;

$("#contenedor").on( {

    

    mousemove:function(evento){

        

        $("circle").attr("cx",evento.pageX);

        $("circle").attr("cy",evento.pageY);
        $("circle").css({
            
            "transform-origin": evento.pageX+"px"+" "+evento.pageY+"px"

        }); 

        

    },
    click:function(){

        contador++;

        if(contador==1){

            $("circle").attr("r",150);

            $("circle").addClass("animacionUno"); 
            
        }

        if( contador==2 ){

            $("circle").attr("r",75);

            $("circle").addClass("animacionDos");

        }

        if( contador==3 ){

            $("circle").attr("r",0);

            $("circle").removeClass("animacionUno");
            
            $("circle").removeClass("animacionDos");

            contador=0;


        }

    }
}) 