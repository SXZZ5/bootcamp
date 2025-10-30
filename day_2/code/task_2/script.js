var submitBtn = document.getElementById("btnsubmit");
submitBtn.addEventListener("click", function () {
    var nameField = document.getElementById("Name");
    var ageField = document.getElementById("Age");
    if (!nameField.value || !ageField.value) {
        return
    }
    if (ageField.value >= 18)
        alert("Form submitted!");
    else
        alert("Must be atleast 18 years old");
})


var coloredDiv = document.getElementById("colored_div");
coloredDiv.addEventListener("mouseenter", function () {
    coloredDiv.style.backgroundColor = "red";
})
coloredDiv.addEventListener("mouseleave", function () {
    coloredDiv.style.backgroundColor = "blue";
})