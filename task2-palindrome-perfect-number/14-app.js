var isPalindrome = function() {
    let nums="121";

    if(nums==nums.split().reverse().join()){
        return true
    }else{
        return false
    }
    
    
};
console.log(isPalindrome);