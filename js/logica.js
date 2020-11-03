//vamos a utilizar javascript ver 6, apartir de funciones
//de tipo callback y funciones anonimas

var cesar = cesar || (function(){
    //una funcion que no tiene nombre, porque le da penita
    
    //funcion para la operacion del cifrado
    //texto, desp, accion
    var doStaff = function(txt, desp, action){
        //otra variable que se encargue del reemplazo de
        //la cadena origianl para realizar los movimientos
        //del cifrado
        var replace = (function(){
            //definir nuestro alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n' ,'ñ','o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x',
        'y', 'z'];
            //saber la longitud
            var l = abc.length;
            //voya  retornar de mi funcion
            return function(c){
                //aqui adentro vamos a realizar la logica
                //que se encarga del cifrado y descifrado
                var i = abc.indexOf(c.toLowerCase());
                //saber si esta vacio el campo
                if(i != -1){
                    //no esta vacia
                    var pos = i;
                    //cifrar o descifrar
                    if(action){
                        //cifrando
                        pos += desp;
                        pos = (pos > abc.length)? pos - abc.length : pos;
                        pos -= (pos>=1)?1:0;
                    }else{
                        //descifrando
                        pos -= desp;
                        pos++;
                        //pos += (pos<=0)?1:0;
                        pos = (pos < 0)?abc.length + pos: pos;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        //tenemos que realizar una prueba del texto que estan
        //escribiendo en el textarea para que sea
        //solo lo que yo quiero
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });

        
    }
    //necesiatar saber que estoy mandando
        //cifrado o descifrado, eso viene apartir de
        //el boton que tiene una funcion code y otra deco

        return{
            encode : function(txt, desp){
                return doStaff(txt, desp, true);
            },
            decode : function(txt, desp){
                return doStaff(txt, desp, false);
            }
        };
})();

//voy a crear mis funciones de cifrado
 var expreg = new RegExp("^[0-9]");
function codificar(){
    var salto = parseInt(document.getElementById('salto').value);

    if(salto>=0 && expreg.test(document.getElementById('salto').value)){

        document.getElementById('resultado').innerHTML = cesar.encode(
        document.getElementById('cadena').value, salto
        );

    }else{
        document.getElementById('resultado').innerHTML = "Hay un error en tus datos ";
    }    
    
}

function decodificar(){
            var salto = parseInt(document.getElementById('salto').value);

    if(salto>=0 && expreg.test(document.getElementById('salto').value)){

        
    document.getElementById('resultado').innerHTML = cesar.decode(
        document.getElementById('cadena').value, salto
    );

    }else{
        document.getElementById('resultado').innerHTML = "Hay un error en tus datos ";
    } 


}


function codificar2(){
    var ayuda=0;
    var texto=document.getElementById('cadena2').value;
    var k=parseInt(document.getElementById('salto2').value);
    var coded="";
    var c="";
    var abc = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n' ,'ñ','o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x',
        'y', 'z'];

    for (var i = 0 ; i < texto.length ; i++) {
        for (var j = 0 ; j < abc.length; j++) {
                ayuda=0;
                if(texto.charAt(i)==abc[j]){
                        ayuda = ayuda + ( (k * j)+1 );
                        coded=coded+abc[ayuda%28];
                }


        }        
    }
    document.getElementById('resultado2').innerHTML =coded;
}



function decodificar2(){
    var ayuda=0;
    var abc = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n' ,'ñ','o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x',
        'y', 'z'];
    var texto=document.getElementById('cadena2').value;
    var k=parseInt(document.getElementById('salto2').value);
    var descoded="";

    for (var i = 0 ; i < texto.length ; i++) {
        for (var j = 0 ; j < abc.length; j++) {
                ayuda=0;
                if(texto.charAt(i)==abc[j]){

                        ayuda = ayuda + ( (k * j)-1 );
                        descoded=descoded+abc[ayuda];
                }


        }        
    }



    document.getElementById('resultado2').innerHTML = "No pude hacer el algoritmo de descifrado ♥";

}