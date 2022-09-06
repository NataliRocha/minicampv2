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

    cont.innerHTML = ''
    so.innerHTML = ''
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    
    
    var f= Number(fim.value)
    var resultado 
    var i = Number(inicio.value)
    
    var resut =0
    var soma4=0
     var soma7=0
    var resut2=0





    if (inicio.value.length === 0){
        alert('[ERRO]: Preencha um número!')
    }
    else if (i> f){
        alert('Opção Inválida!')}

        
   
        
  








   
        
    else {
        var i = Number(inicio.value)
        var f= Number(fim.value)
        var c =i
       
        verificarC()
    function verificarC(){
        var num2 = document.getElementById('txt1')
        var primo = Number (num2.value) 
      varsoma9=0
        if (num2.value.length == 0){
            alert('[ERRO]: Preencha um número!')}
            
            else if (primo < 1 || primo ==1 ){
                cont.innerText= ''}
                else if (primo == 2){
                    cont.innerText= ''}
                    
            
           else  { 
            
           
        for (var i=2; i<primo; i++){
                resultado = primo % i;
               
               if (resultado==0){
                
               cont.innerText=''
                return true
                
            }  }
            
            

            
              cont.innerText= +primo+ '\u{1F449}'
              return false

    
            } }
        
            
            var soma10= document.getElementById("cont").innerText
           if (soma10 ==''){
            soma9=0
           
           }else{
            var soma9 = parseInt(soma10)
        }

    while (c <= f){
      

if(c==2){
    cont.innerText+=  +c+  '\u{1F449}'

}









    c++
   
        if (c>f){
            break
        }
        






    if(c>2){
var j =2
while ( j<=c){

    var resultado
    
    resultado = c % j
    j++
    if (resultado==0 ){
        cont.innerText+= ''
        break 

}



if (j==c){

cont.innerText+= ` ${c}  \u{1F449}`

if(i<=2){
var soma=2 
var soma1 =c
var soma2 = soma+soma1
var soma4=soma2+resut
so.innerHTML= 'A soma destes números é: '+soma4+''
 soma=0
var resut=soma4-2

}
else{

var soma5 = soma9
var soma6=c
var soma7 = soma5+soma6
var soma8= soma7+ resut2
so.innerHTML= 'A soma destes números é: '+soma8+''
resut2=soma8-soma5
soma5=''



}

}


}

 

} 
 
 
    }

 
}}




