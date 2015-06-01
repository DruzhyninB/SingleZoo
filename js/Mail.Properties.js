var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

var form = document.forms[0];
var formvalid = false;
for (var i = 0; i < form.elements.length; i++) {
    var e = form.elements[i];
    var pattern = e.getAttribute("data-val");

    if (pattern) {
        e.onchange = validation;
        formvalid = true;        
    }
}
if (formvalid) {
    form.addEventListener("submit", validateform, false);
}

function validation() {
    var patte = this.dataset.val,value = this.value;

    var res = value.search(patte);
    if (res == -1) {
        this.className = "form-control error";
    } else {
        this.className = "form-control valid";
    }
}

function validateform(e) {
    var namee = form.Namee.value,
            email = form.Email.value,
            phone = form.Phone.value,
            msg = form.massege.value;
        
        //xmlhttp.send(JSON.stringify({
        //    'key': 'V0D_Zxz9tADoT1PJUBYXhQ',
        //    'message': {
        //        'from_email': 'SingleZoo@info.com',
        //        'to': [{ 'email': 'druzhyninbogdan@gmail.com', 'type': 'to' }],
        //        'autotext': 'true',
        //        'subject': 'Opinion',
        //        'html': '<table border="1" style="border:1px solid black;border-collapse: collapse; overflow:auto;width:400px"><tr><td>Name</td><td>' + namee + '</td></tr><tr><td>Email</td><td>' + email + '</td></tr><tr><td>Phone</td><td>' + phone + '</td></tr><tr><td>Message</td><td>' + msg + '</td></tr></table>'
        //    }
        //}));
    form.Namee.value = "";
    form.Email.value = "";
    form.Phone.value = "";
    form.massege.value = "";
    document.getElementById("inter").style.opacity = "1";
    setTimeout(function () {
        document.getElementById("inter").style.opacity = "0";
    },10000)


    event.preventDefault();
    }

