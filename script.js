var email = null;

//[email, [name, code, image src]]
let recipientsMap = new Map([
    ["kieran_malik@brown.edu", ["Kieran Malik",4260,"images/goody grams/kieran malik.png"]],
    ["sydney_roberts@brown.edu", ["Sydney Roberts",9338,"images/goody grams/sydney roberts.png"]]
]);

function submitEmailFunc(){
    var input_email = document.getElementById("email-input").value;

    if(input_email == ""){
        alert("Please enter a Brown email.");
    }
    else if(input_email.includes('@brown.edu') && recipientsMap.has(input_email)){
        updateLetter(input_email);
    }
    else{
        alert("Please use your Brown email where you received the CCB Goody Gram Email.");
    }
    document.getElementById("email-input").value = ""; 

}

function updateLetter(email){
    document.getElementById("envelope-prompt").innerHTML = "";
}


