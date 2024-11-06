// Ensure all elements are found correctly
var ResumeForm = document.getElementById("ResumeForm");
var ResumePreview = document.getElementById("ResumePreview");
var LinkContainer = document.getElementById("LinkContainer");
var ShareableLink = document.getElementById("ShareableLink");
var DownloadBtn = document.getElementById("Download");
ResumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Extract and store user data
    var DisplayName = document.getElementById("Name")
        .value;
    var DisplayUserName = document.getElementById("UserName").value;
    var DisplayEmail = document.getElementById("Email")
        .value;
    var DisplayPhone = document.getElementById("Phone")
        .value;
    var DisplayEducation = document.getElementById("Education").value;
    var DisplayProfessional = document.getElementById("Professional").value;
    var DisplaySkills = document.getElementById("Skills").value;
    if (!DisplayName ||
        !DisplayUserName ||
        !DisplayEmail ||
        !DisplayPhone ||
        !DisplayEducation ||
        !DisplayProfessional ||
        !DisplaySkills) {
        alert("Please fill in all required fields.");
        return;
    }
    var ResumeData = {
        DisplayName: DisplayName,
        DisplayEmail: DisplayEmail,
        DisplayPhone: DisplayPhone,
        DisplayEducation: DisplayEducation,
        DisplayProfessional: DisplayProfessional,
        DisplaySkills: DisplaySkills,
    };
    localStorage.setItem(DisplayUserName, JSON.stringify(ResumeData));
    // Generate Resume HTML content
    var ResumeHTML = "\n    <h1><b>Editable Resume</b></h1>\n    <section>\n      <h2>Personal Information</h2>\n      <p><b>Name:</b> <span contenteditable=\"true\">".concat(DisplayName, "</span></p>\n      <p><b>Email:</b> <span contenteditable=\"true\">").concat(DisplayEmail, "</span></p>\n      <p><b>Phone:</b> <span contenteditable=\"true\">").concat(DisplayPhone, "</span></p>\n    </section>\n    <section>\n      <h2>Education</h2>\n      <ul contenteditable=\"true\">\n        ").concat(DisplayEducation.split(",")
        .map(function (edu) { return "<li>".concat(edu.trim(), "</li>"); })
        .join(""), "\n      </ul>\n    </section>\n    <section>\n      <h2>Professional Experience</h2>\n      <ul contenteditable=\"true\">\n        ").concat(DisplayProfessional.split(",")
        .map(function (exp) { return "<li>".concat(exp.trim(), "</li>"); })
        .join(""), "\n      </ul>\n    </section>\n    <section>\n      <h2>Skills</h2>\n      <ul contenteditable=\"true\">\n        ").concat(DisplaySkills.split(",")
        .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
        .join(""), "\n      </ul>\n    </section>\n  ");
    if (ResumePreview) {
        ResumePreview.innerHTML = ResumeHTML;
        // Generate shareable link and display link container
        var ShareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(DisplayUserName));
        LinkContainer.style.display = "block";
        ShareableLink.href = ShareableURL;
        ShareableLink.textContent = ShareableURL;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
// Handle PDF download
DownloadBtn.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
window.addEventListener("DOMContentLoaded", function () {
    var URLParams = new URLSearchParams(window.location.search);
    var Username = URLParams.get("username");
    if (Username) {
        var SavedResumeData = localStorage.getItem(Username);
        if (SavedResumeData) {
            var ResumeData = JSON.parse(SavedResumeData);
            document.getElementById("UserName").value =
                Username;
            document.getElementById("Name").value =
                ResumeData.DisplayName;
            document.getElementById("Email").value =
                ResumeData.DisplayEmail;
            document.getElementById("Phone").value =
                ResumeData.DisplayPhone;
            document.getElementById("Education").value =
                ResumeData.DisplayEducation;
            document.getElementById("Professional").value =
                ResumeData.DisplayProfessional;
            document.getElementById("Skills").value =
                ResumeData.DisplaySkills;
        }
    }
});
