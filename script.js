function compute() {
    //set variables
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");

    //verify principal value if its less or equal to 0
    if (principal.value <= 0){
        result.innerHTML = "";
        alert("Enter a positive number");
        principal.focus();
    }else{
        //add text and breaks to result span
        result.innerHTML = "\<br\>\<br\>";
        result.innerHTML += "<p>If you deposit \<mark\>" + principal.value;
        result.innerHTML += ",<\p>\<br\>";
        result.innerHTML += "<p>at an interest rate of \<mark\>" + rate + "%";
        result.innerHTML += ".<\p>\<br\>";
        result.innerHTML += "<p>You will receive an amount of \<mark\>" + interest;
        result.innerHTML += ",<\p>\<br\>";
        result.innerHTML += "<p>in the year \<mark\>" + year;
        result.innerHTML += "<\p>";
    }
}

function updateRate() {
    //update text when rate slider changes its value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}       