var email = ""; 
var letter_name = "";
var code = 0; 
var img = "";


//[email, [name, code, image src]]
let recipientsMap = new Map([
    ["kieran_malik@brown.edu", ["Kieran Malik",4260,"images/goody grams/kieran malik.png"]],
    ["sydney_roberts@brown.edu", ["Sydney Roberts",9338,"images/goody grams/sydney roberts.png"]],
    ["kelly_wei@brown.edu", ['hello', 'hi', 'boo']]
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

function updateLetter(email_verified){
    document.getElementById("envelope-prompt").style.display = 'none';

    //update global vars
    var data = recipientsMap.get(email_verified)
    window.email = email_verified;
    window.letter_name = data[0];
    window.code = data[1];
    window.img = data[2]; 

    createCodeDiv();
}

function createCodeDiv(){
    const input_code = document.createElement("p");
    input_code.innerHTML = '<input type="text" id="code-input" placeholder="Enter your code..." maxlength="4">';

    const submit = document.createElement("p"); 
    submit.innerHTML = '<button id="enter-code" onclick="submitCodeFunc()">Enter ↲</button>';

    // Append to another element:
    document.getElementById("envelope-code").appendChild(input_code);
    document.getElementById("envelope-code").appendChild(submit);

    var div = document.createElement("div");
    div.innerHTML = ""; 

    var element = document.getElementById('envelope-code');
    document.getElementById("envelope-code").appendChild(element); 
}

function submitCodeFunc(){
    var input_code = document.getElementById("email-input").value;

    if(input_email == ""){
        alert("Please enter the code from your CCB Goody Gram email.");
    }
    else if(recipientsMap.has(input_email)){
        updateLetter(input_email);
    }
    else{
        alert("Please use your Brown email where you received the CCB Goody Gram Email.");
    }
    document.getElementById("email-input").value = ""; 

}
