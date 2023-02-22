function validParanthesis(str){
  for (let i= 0; i<str.length; i++){
    if(str.includes(“()“) || str.includes(“[]“)||str.includes(“{}“)){
      str = str.replace(“()“, “”);
      str = str.replace(“[]“, “”);
      str = str.replace(“{}“, “”);
      console.log(str);
    }
  }
  return str == “” ? true : false;
}
console.log(validParanthesis(“([{({})}]({}))“));
console.log(validParanthesis(“((()“));
console.log(validParanthesis(“([)]“));
console.log(validParanthesis(“([])“));



function validParanthesis(str){
    while(str.includes(“()“) || str.includes(“[]“)||str.includes(“{}“)){
           str = str.replace(“()“, “”).replace(“[]“, “”).replace(“{}“, “”);;
      }
    return str == “” ? true : false;     //return str == “”
}
console.log(validParanthesis(“([{({})}]({}))“));
console.log(validParanthesis(“((()“));
console.log(validParanthesis(“([)]“));
console.log(validParanthesis(“([])“));