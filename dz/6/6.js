function myFunction(){
    var y = document.getElementById("psw").value;

    var x = document.getElementById("email").value;
    var myWindow = window.open("asd", "", "width=200 , height = 100");
    myWindow.document.write("<p>your Email is:</p>" + x);
}
function myFunction(){
    var x = document.getElementById("email").value;
    document.getElementById("submit_f").innerHTML = "your email is :" +x;
    var y = document.getElementById("psw").value;
    document.getElementById("submit_f1").innetHTML = "your password is" + y;



}