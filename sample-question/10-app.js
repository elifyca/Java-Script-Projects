function myFunction(){
    let text = prompt("enter the text");
    let separator = prompt("enter the separator");
    let repeat = +prompt("enter the repeatitions")
    let newText = "";
    for(let i = 0; i<repeat; i++){
        if(i+1 != repeat){
            newText += text + separator;
        }else{
            newText += text;
        }
          
    }
    return newText;
}