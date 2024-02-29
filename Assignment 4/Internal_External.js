document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("externalBtn");
    button.addEventListener("click", function() {
        var name = document.getElementById("name").value;
        alert("Hello, " + name + " from external JavaScript!");
    });
});

