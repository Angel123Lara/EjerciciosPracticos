function HTMLElements(str){

    var words = ['<b>','<i>','<em>','<div>','<p>']
    var index = 0
    var auxindex = 0
    var auxStr = ''

    var auxword = ''
    for (let i = 0 ; i<words.length ; i++){
        //console.log('-----')
        //console.log(words[i])
        index = str.indexOf(words[i])
        //console.log(index)
        if (index != -1 ){
            auxStr = str.slice(index+3)
            //console.log(auxStr)
            auxword = words[i]
            //console.log(auxword)
            auxword = auxword[0]+'/'+ auxword.slice(1)
            //console.log(auxword)
            auxindex = auxStr.indexOf(auxword)
            //console.log(auxindex)
            if (auxindex!= -1){
                continue
            }else{
                //console.log('----')
                //console.log(words[i])
                return words[i]
            }
        }else 
        {
            continue
        }

    }





    return true
}

console.log(HTMLElements('<div><p><i>Hola!</i></p></div>'))

