let input = document.querySelector(".input");
let check = document.querySelector(".check");
​
check.addEventListener("click", controller);
​
function controller(){
    let dot = input.value.indexOf("."); // "." nın indeksini bulduk
    let slc = input.value.slice(dot+1) //  slice ile "." nın indeksi + 1 den sonuna kadar döndür // slice(start, end)
    
    if(input.value.includes("@") && input.value.includes(".") &&     
     (slc.length >= 2 && slc.length <= 3)){   // "@" "." value içerisinde varsa ve . dan sonraki kısım iki veya üç uzunluğunda ise 
        alert("Valid e-mail")
    }else{
        alert("Invalid e-mail")
    }
}
​