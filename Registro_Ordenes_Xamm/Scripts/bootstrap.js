/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems, {
        swipeable: true
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems);
});
$(document).ready(function () {
    M.updateTextFields();
});

$('input#input_text').characterCounter();

var modalOTA = document.getElementById('modalOTA');
var btnOTA = document.getElementById('btnOTA');
var btnClose1 = document.getElementById("btnClose1");
btnOTA.onclick = function () {
    modalOTA.style.display = "block";
}
btnClose1.onclick = function () {
    modalOTA.style.display = "none";
}

var modalOTE = document.getElementById('modalOTE');
var btnOTE = document.getElementById('btnOTE');
var btnClose2 = document.getElementById("btnClose2");
btnOTE.onclick = function () {
    modalOTE.style.display = "block";
}
btnClose2.onclick = function () {
    modalOTE.style.display = "none";
}






