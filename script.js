function verificar(){
    var num1 = document.getElementById('txtn')
    var resultado = document.getElementById('res')
    var primo = Number (num1.value) 

    if (num1.value.length == 0){
        alert('[ERRO]: Preencha um número!')}
   else if (primo < 1 || primo ==1){

        res.innerHTML= ('<p>O número 1 não é primo</p>')
            
      } else  { 
        
       
    for (var i=2; i<primo; i++){
            resultado = primo % i;
           
           if (resultado==0){
            res.innerHTML= (" O número "+ primo+" não é primo");
        return true
        }}      
          
            res.innerHTML= (" O número "+ primo+" é primo");
            return false

        } 
    }







function contar(){
 var inicio = document.getElementById('txt1')
 var fim = document.getElementById('txt2')

/*
 
if (inicio.value.length == 0||fim.value.length == 0){
    alert('[ERRO: Faltam dados!')}

else if (inicio.value > fim.value){
    alert('Opção Inválida!')
}   

else if (inicio.value <1 || fim.value <1){
    cont.innerHTML='Opção Inválida!'

}
    
 else{*/

//cont.innerHTML= 'Contando: '

var i = Number(inicio.value)
var f= Number(fim.value)
var c = i

while (c<=f) {
    
    verifica2()

          // cont.innerHTML+=` ${c} `
          
          
          
        c++
       

       
    }



}


function verifica2(c){
    /*

    if (c < 1 || c ==1){
        cont.innerHTML= ``
        
    } else if (c==2){
        cont.innerHTML+= `${c} \u{1F449}`
   //soma=c
   
    
    }
       else  { 
        
      */ 
        for (var n=2; n<c; n++){
                resultado = c % n
               
               if (resultado==0){
                cont.innerHTML+= ``
                
            return true
            } 
                cont.innerHTML+=` ${c}  \u{1F449}`
                
               /* soma= soma + c
                soma1.innerHTML=`${soma}`*/
                

            return false  
        

                  
                  
                                } 
             }
             
            
           
            

        

    

 





/*for (var c = i; c <=f; c+=i){
    cont.innerHTML+= `${c} `*/







 




