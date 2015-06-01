var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

var form = document.forms[0];
for (var i = 0; i < form.elements.length; i++) {
    var e = form.elements[i];
    var pattern = e.getAttribute("data-val");

    if (pattern) {
        e.onblur = validation;
        e.onfocus = resetFormElem;      
    }
}
form.addEventListener("submit", validateform, false);


function validation() {
    var patte = this.dataset.val,value = this.value;

    var res = value.search(patte);
    if (value !== "") {
        if (res == -1) {
            this.className = "form-control formError";
        }
    }
}

function resetFormElem() {
    this.className = "form-control";
}


function validateform(e) {
    var validFlag = false;
    for (var i = 0; i < form.elements.length; i++) {//поиск елемента в котором была допущена ошибка
        var ele = form.elements[i];
            if (ele.className == "form-control formError") validFlag = true;
    }
    //Проверка заполнености полей
    if (form.Namee.value == "" || form.Email.value == "" || form.Phone.value == "" || form.massege.value == "") {
        event.preventDefault();
        if (document.getElementById("inter").dataset.leng == "eng") {
            document.getElementById("inter").innerHTML = "There are empty fields";
        } else {
            document.getElementById("inter").innerHTML = "Заполните пустые поля";
        }
        document.getElementById("inter").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("inter").style.opacity = "0";
        }, 5000);
        validFlag = true;
    }
    
    if (!validFlag) {
        var namee = form.Namee.value,
                email = form.Email.value,
                phone = form.Phone.value,
                msg = form.massege.value;
        //Отправка сообщения на почту
        xmlhttp.send(JSON.stringify({
              'key': 'V0D_Zxz9tADoT1PJUBYXhQ',
              'message': {
                  'from_email': 'SingleZoo@info.com',
                  'to': [{ 'email': 'druzhyninbogdan@gmail.com', 'type': 'to' }],
                  'autotext': 'true',
                  'subject': 'Opinion',
                  'html': '<head><style>td{padding:3px;}</style></head><body><table border="1" style="border:1px solid black;border-collapse: collapse; overflow:auto;width:400px"><tr><td>Name</td><td>' + namee + '</td></tr><tr><td>Email</td><td>' + email + '</td></tr><tr><td>Phone</td><td>' + phone + '</td></tr><tr><td>Message</td><td>' + msg + '</td></tr></table></body>'
              }
          }));
        //очистка полей
        form.Namee.value = "";
        form.Email.value = "";
        form.Phone.value = "";
        form.massege.value = "";
        if (document.getElementById("inter").dataset.leng == "eng") {
            document.getElementById("inter").innerHTML = "Sent a letter";
        } else {
            document.getElementById("inter").innerHTML = "Письмо отправлено";
        }
        document.getElementById("inter").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("inter").style.opacity = "0";
        }, 5000)


        event.preventDefault();
    } else {
        event.preventDefault();
    }
}
