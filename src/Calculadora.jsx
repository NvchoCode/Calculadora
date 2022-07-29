
import { useState } from 'react';

export const Calculadora = ({value}) =>{

    //hook useState
    const [ resultado, setResultado ] = useState(value)
    const [ operador, setOperador ] = useState(value)
    const [ resultado1, setResultado1 ] = useState(value)
    const [ final, setFinal ] = useState(value)

    const reset = () =>{
        setResultado(value),setResultado1(value),setOperador(value),setFinal(value)
    }

    //boton Numero 1
    const uno = (  )=>{
        if(!resultado){
            setResultado(1);
        }else if(!resultado1){
            setResultado1(1);
        }  
    }

    //Boton Numero 2
    const dos = (  )=>{
        if(!resultado){
            setResultado(2);
        }else if(!resultado1){
            setResultado1(2);
        }  
    }


    //boton Numero 3
    const tres = (  )=>{
        if(!resultado){
            setResultado(3);
        }else if(!resultado1){
            setResultado1(3);
        }  
    }    

    //boton Numero 4
    const cuatro = (  )=>{
        if(!resultado){
            setResultado(4);
        }else if(!resultado1){
            setResultado1(4);
        }  
    }    

    //boton Numero 5
    const cinco = (  )=>{
        if(!resultado){
            setResultado(5);
        }else if(!resultado1){
            setResultado1(5);
        }  
    }
    //boton Numero 6
    const seis = (  )=>{
        if(!resultado){
            setResultado(6);
        }else if(!resultado1){
            setResultado1(6);
        }  
    }
    //boton Numero 7
    const siete = (  )=>{
        if(!resultado){
            setResultado(7);
        }else if(!resultado1){
            setResultado1(7);
        }  
    }
    //boton Numero 8
    const ocho = (  )=>{
        if(!resultado){
            setResultado(8);
        }else if(!resultado1){
            setResultado1(8);
        }  
    }
    //boton Numero 9
    const nueve = (  )=>{
        if(!resultado){
            setResultado(9);
        }else if(!resultado1){
            setResultado1(9);
        }  
    }
    //boton Numero 0
    const cero = (  )=>{
        if(!resultado){
            setResultado(0);
        }else if(!resultado1){
            setResultado1(0);
        }  
    }

    //Calculo
    const reFi = () => { 
        if(resultado && resultado1){
            if( operador === '+'){
                setFinal(resultado + resultado1);
                setResultado(value),setResultado1(value),setOperador(value)
            }if (operador === '-') {
                setFinal(resultado - resultado1);
                setResultado(value),setResultado1(value),setOperador(value)
            }if(operador ==='*'){
                setFinal(resultado * resultado1);
                setResultado(value),setResultado1(value),setOperador(value)
            }if(operador ==='/'){
                setFinal(resultado / resultado1);
                setResultado(value),setResultado1(value),setOperador(value)
            }else{
        
            }
            
        }else{
        }
       }



    const suma = () =>{
        setOperador('+')
    }

    
    const resta = () =>{
        setOperador('-')
    }

    const multi = () =>{
        setOperador('*')
    }

    const divi = () =>{
        setOperador('/')
    }

    //funcion para agrupar numeros

    return (
        <>
        <div className="caja">
            <div className="pantalla">
            <h1>{resultado}</h1>
            <h1>{operador}</h1>
            <h1>{resultado1}</h1>
            <h1>{final}</h1>
        </div>
        <div className="numeros">
        <button onClick={ uno }>1</button>
        <button onClick={ dos }>2</button>
        <button onClick={ tres }>3</button>
        <button onClick={ cuatro }>4</button>
        <button onClick={ cinco }>5</button>
        <button onClick={ seis }>6</button>
        <button onClick={ siete }>7</button>
        <button onClick={ ocho }>8</button>
        <button onClick={ nueve }>9</button>
        <button onClick={ cero }>0</button>
        <button onClick={ resta }>-</button>
        <button onClick={ suma }>+</button>
        <button onClick={ multi }>*</button>
        <button onClick={ divi }>/</button>
        <div className="otra">
                  <button class="fin" onClick={ reset }>Reset</button>
                 <button class="fin" onClick={ reFi }>Total</button>
        </div>
  
        </div>
        </div>
        </>
    )
}