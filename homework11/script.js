function getRandomChinese(length){
    return new Promise((resolve)=>{
        let i = 0;
        let number="";
        while(i<length){
            setTimeout(function(){
                number += String.fromCharCode((Date.now()).toString().slice(-5));
                if (number.length === length){
                resolve(number);
                }
            },500*i);
            i++
        }
    }).then((number)=>console.log(number))
}
getRandomChinese(4)