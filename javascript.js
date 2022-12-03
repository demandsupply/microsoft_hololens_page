// $(document).ready(function(){
//     var ctrlVideo = document.getElementById("video1");

//     $('button').click(function(){
//         if($('button').hasClass("active")){
//             ctrlVideo.play();
//             $('button').html("Pause");
//             $('button').toggleClass("active");
//         } else {
//             ctrlVideo.pause();
//             $('button').html("play");
//             $('button').toggleClass("active");
//         }
//     });
// });

function myFunction() {
    document.getElementById("drop4").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.droparrow')) {
        var dropdowns = document.getElementsByClassName("content4");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction1() {
    document.getElementById("drop1").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.droparrow')) {
        var dropdowns = document.getElementsByClassName("content1");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("drop2").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.droparrow')) {
        var dropdowns = document.getElementsByClassName("content2");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction3() {
    document.getElementById("drop3").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.droparrow')) {
        var dropdowns = document.getElementsByClassName("content3");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}