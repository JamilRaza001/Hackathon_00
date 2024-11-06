var ResumeForm = document.getElementById("ResumeForm");
var ResumePreveiw = document.getElementById("ResumePreview");
ResumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var DisplayName = document.getElementById("Name");
    var DisplayEmail = document.getElementById("Email");
    var DisplayPhone = document.getElementById("Phone");
    var DisplayEducation = document.getElementById("Education");
    var DisplayProfessional = document.getElementById("Professional");
    var DisplaySkills = document.getElementById("Skills");
    if (!DisplayName.value ||
        !DisplayEmail.value ||
        !DisplayPhone.value ||
        !DisplayEducation.value ||
        !DisplayProfessional.value ||
        !DisplaySkills.value) {
        alert("Please fill in all required fields.");
        return;
    }
    var ResumeHTML = "\n<h1><b>Dynamic Resume</b></h1>\n<section>\n<h2>Personal Information</h2>\n\n<p><b>Name:</b> ".concat(DisplayName.value, "</p>\n\n<p><b>Email:</b> ").concat(DisplayEmail.value, "</p>\n\n<p><b>Phone:</b> ").concat(DisplayPhone.value, "</p>\n\n</section>\n\n<section>\n<h2>Education</h2>\n\n<ul>\n").concat(DisplayEducation.value
        .split(",")
        .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
        .join(""), "\n</ul>\n</section>\n\n<section>\n<h2>Professional Experience</h2>\n\n<ul>\n").concat(DisplayProfessional.value
        .split(",")
        .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
        .join(""), "\n</ul>\n</section>\n\n<section>\n<h2>Skills</h2>\n\n<ul>\n").concat(DisplaySkills.value
        .split(",")
        .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
        .join(""), "\n</ul>\n</section>\n");
    if (ResumePreveiw) {
        ResumePreveiw.innerHTML = ResumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
