// JavaScript Document
$(document).ready(function () {
    $("#popform").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
            var parameters = { name: $('#name').val(), phone: $('#phone').val(), message: $('#message').val(), mailSubject: "Request from Good Night Fabrics", toMail: "goodnightmosquito@gmail.com" };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxrcGdPjBezMh3x69vM1vx70SoLfs81lHYeG2hla2o-kF854_c/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#error-msg').css('color', 'green');
                $('#error-msg').html('Email sent successfully.');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            });

    });
    $("#contact").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        //alert();
        /* Send the data using post with element id name and name2*/
        var parameters = { name: $('.name').val(), phone: $('.phone').val(), email: $('.email').val(), message: $('.message').val(), mailSubject: "Request from Good Night Fabrics", toMail: "goodnightmosquito@gmail.com" };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxrcGdPjBezMh3x69vM1vx70SoLfs81lHYeG2hla2o-kF854_c/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#contact-error-msg').css('color', 'green');
                $('#contact-error-msg').html('Email sent successfully.');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#contact-error-msg').css('color', 'red');
                $('#contact-error-msg').html('Falied: Please try again later or contact us.');
            });
    });

    $("#popform_tmp").submit(function (event) {
        debugger;
        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');

        /* Send the data using post with element id name and name2*/
        var posting = $.post(url, { name: $('#name').val(), phone: $('#phone').val(), message: $('#message').val() });
        success: (function (posting) {
            debugger;

            if (posting.posting.indexOf('Sucess:') >= 0) {
                $('#error-msg').css('color', 'green');
                $('#error-msg').html('Email sent successfully.');
                location.reload();
            } else {
                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            }
        }),
            /* Alerts the results */
            posting.done(function (data) {
                // alert(data);

            });

    });
    $("#contact_tmp").submit(function (event) {
        debugger;
        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        //alert();
        /* Send the data using post with element id name and name2*/
        var posting = $.post(url, { name: $('.name').val(), phone: $('.phone').val(), email: $('.email').val(), message: $('.message').val() });

        /* Alerts the results */
        posting.done(function (data) {
            //alert(data);
        });

    });
});
window.onscroll = function () { stickys() };

var header = document.getElementById("myheader");

var sticky = header.offsetTop;

function stickys() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
function menu(s) {
    s.classList.toggle("active");
}
function navs() {
    var bar = document.getElementById("bar");
    if (bar.style.height == "50%") {
        bar.style.height = "0";
    }
    else {
        bar.style.height = "50%";
    }
}
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function toTop() {
    var marginY = 0;
    var destination = 0;
    var speed = 20;
    var scroller = null;
    scroller = setTimeout(function () {
        topFunction();
    }, 2);

    marginY = marginY - speed;

    if (marginY <= 0) {
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}

function scrolldown(x, y) {
    window.scrollBy(x, y);
}
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    $('html, body').animate({
        scrollTop: $("#myModal").offset().top
    }, 2000);

}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function getMobileOperatingSystem(msgContent) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var msg = "*I am from Coimbatore*. I am interested in your product. Call me";
    if (msgContent) {
        msg = msgContent;
    }
    var os = "sms:+919171547917?body=" + msg;
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "sms:+919171547917&body=" + msg;
    }
    location.href = os;
}
function sendMsg() {
    var name = document.getElementById('eName').value;
    var num = document.getElementById('ePhone').value;
    var msg = document.getElementById('eMessage').value;
    var msgContent = "Name :" + name + "%0aDescription :%0a" + msg + "%0aContact No :" + num;
    getMobileOperatingSystem(msgContent)
}
