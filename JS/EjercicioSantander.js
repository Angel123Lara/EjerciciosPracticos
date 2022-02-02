function MissingDigit(str){
    console.log('tu ecuación es :' +  str)
    const ArraNum = ['1','2','3','4','5','6','7','8','9','0']
    var num01 = ''
    var num01Compl = false
    var num01incomp = false
    var num02incomp = false
    var num03incomp = false
    var num02 = ''
    var num02Compl = false
    var num03 = ''
    var num03Compl = false 
    var mult = false

    var divi = false
    var rest = false
    var suma = false
    var equal = false
    var missdigit = 0
    //console.log('1')
    for (let i = 0 ; i < str.length ; i++){
       // console.log('2')
        for (let j = 0 ; j < ArraNum.length ; j++){
         //   console.log('3')
            if (num01Compl === false && (str[i]===ArraNum[j] || str[i]==='x')){
                
                if (str[i]==='x'){
                    if (num01incomp === false){
                        num01 = num01 + str[i]
                        num01incomp = true
                    }
                    
                }else{
                    num01 = num01 + str[i] 
                }
            }else if (str[i] === ' '){
                if(num01!='' && num01Compl === false){
                    num01Compl = true
                }else if(num02!='' && num02Compl === false){
                    num02Compl = true
                }else if(num03!='' && num03Compl === false){
                    num03Compl = true
                }

            }else if (str[i]==='-'){
                rest = true

            }else if (str[i] === '+'){
                suma = true
            }else if  (str[i]=== '*'){
                mult = true
            }else if (str[i]=== '/'){
                divi = true
            }else if (str[i]==='='){
                equal = true
            }else if(num02Compl === false && (str[i]===ArraNum[j] || str[i]==='x')){
                if (str[i]==='x'){
                    if (num02incomp === false){
                        num02 = num02 + str[i]
                        num02incomp = true
                    }
                    
                }else{
                    num02 = num02 + str[i] 
                }
            }else if(num03Compl === false && (str[i]===ArraNum[j] || str[i]==='x')){
                 if (str[i]==='x'){
                    if (num03incomp === false){
                        num03 = num03 + str[i]
                        num03incomp = true
                    }
                    
                }else{
                    num03 = num03 + str[i] 
                }
            }
            
        }
    }
    //console.log('4')
    var numint01 = parseInt(num01)
    var numint02 = parseInt(num02)
    var numint03 = parseInt(num03)
    //console.log('5')
    if (num03incomp){
        if (mult){
            missdigit = (numint01) * (numint02)    
        }else if(suma){
            missdigit = (numint01) + numint02
        }else if (rest){
            missdigit = numint01 - numint02
        }else if (divi){
            missdigit = numint01 / numint02
        }
      //  console.log('6')

    }else if (num02incomp){
        if (mult){
            missdigit = (numint03)/(numint01)    
        }else if(suma){
            missdigit = (numint03) - numint01
        }else if (rest){
            missdigit = numint03 + numint01
        }else if (divi){
            missdigit = numint03 * numint01
        
        }
        //console.log('7')
    }else if (num01incomp){
        if (mult){
            missdigit = (numint03)/(numint02)    
        }else if(suma){
            missdigit = (numint03) - numint02
        }else if (rest){
            missdigit = numint03 + numint02
        }else if (divi){
            missdigit = numint03 * numint02
        }
        //console.log('8')
    }
    //console.log('---')
   // console.log(num01,num02,num03)
    missdigit = missdigit.toString()
    var Strnumincompl = ''
    if (num01incomp){
        Strnumincompl = num01.toString()
    }else if (num02incomp){
        Strnumincompl = num02.toString()
    }else if (num03incomp){
        Strnumincompl = num03.toString()
    }

    if (Strnumincompl.length === missdigit.length){
        for (let i = 0 ; i <missdigit.length ; i++ ){
            if (Strnumincompl[i]===missdigit[i]){
                continue
            }else {

                return missdigit[i]
            }
        }
    }else {
        return missdigit
    }
    
    //console.log('9')
    //return missdigit
}
//console.log('Hola')

console.log('el digito faltante es: '+ MissingDigit('150 * x = 210'))
//console.log('Hola')