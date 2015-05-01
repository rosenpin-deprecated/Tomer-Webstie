/**
 * Created by tomer on 4/28/2015.
 */
function Open(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function goTo(id){
    $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: 0
    }, 4000);
}

function validateFormOnSubmit(theForm) {
    var reason = "";
    reason += (theForm.name);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
        simpleCart.checkout();
    }
    return false;
}
var missing = false;
function sendMail(){
    Parse.initialize("0Rz43OId0FNCSDGrXwmD2WuY53ZpBAxNtd5HEj19", "687KKoBK7N5axu76lYSV59A7rYS9bGsmTVrOJx9x");
    try {
        var name = getText("icon_prefix");
        var mail = getText("icon_email");
        var phone_number = getText("phone_num");
        var message = getText("icon_prefix2");
    }
    catch (e){
        alert(e)
    }
    if(!missing){
        var TestObject = Parse.Object.extend("Contacted");
        var testObject = new TestObject();
        testObject.save({Name: name}).then(function(object) {
            console.log("pushed ", name)
        });
        testObject.save({Email: mail}).then(function(object) {
            console.log("pushed ", mail)
        });
        testObject.save({Phone: phone_number}).then(function(object) {
            console.log("pushed ", phone_number)
        });
        testObject.save({Message: message}).then(function(object) {
            console.log("pushed ", message)
        });
        alert("Thanks! Your message has been sent!")
    }
}


function getText(id){
    if(document.getElementById(id).value==undefined||document.getElementById(id).value==null||document.getElementById(id).value==""){
        alert("missing field");
        missing = true;
    }
    else {
        return document.getElementById(id).value;
    }
}

function setColors(color){
    try {
        document.getElementById("index-banner").style.backgroundColor = color;
        document.getElementById("nav").style.backgroundColor = color;
        document.getElementById("contact").style.backgroundColor = color;
        if(color != "rgba(0,150,136,0.95)") {
            document.getElementById("fab").setAttribute("style", "background-color: " + "rgba(0,150,136,0.95)" + " !important");
        }
        else{
            document.getElementById("fab").setAttribute("style", "background-color: " + "rgba(244,67,54,0.95" + " !important");
        }
        $('meta[name=theme-color]').remove();
        $('head').append( '<meta name="theme-color" content='+color+'>' );
    }
    catch (e){}
    localStorage.setItem("color", color);


}
function setColorOnStart(){
    setColors(localStorage.getItem("color"));
}
