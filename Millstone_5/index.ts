// Ensure all elements are found correctly
const ResumeForm = document.getElementById("ResumeForm") as HTMLFormElement;
const ResumePreview = document.getElementById(
  "ResumePreview"
) as HTMLDivElement;
const LinkContainer = document.getElementById(
  "LinkContainer"
) as HTMLDivElement;
const ShareableLink = document.getElementById(
  "ShareableLink"
) as HTMLAnchorElement;
const DownloadBtn = document.getElementById("Download") as HTMLButtonElement;

ResumeForm.addEventListener("submit", (event: Event): void => {
  event.preventDefault();

  // Extract and store user data
  const DisplayName = (document.getElementById("Name") as HTMLInputElement)
    .value;
  const DisplayUserName = (
    document.getElementById("UserName") as HTMLInputElement
  ).value;
  const DisplayEmail = (document.getElementById("Email") as HTMLInputElement)
    .value;
  const DisplayPhone = (document.getElementById("Phone") as HTMLInputElement)
    .value;
  const DisplayEducation = (
    document.getElementById("Education") as HTMLTextAreaElement
  ).value;
  const DisplayProfessional = (
    document.getElementById("Professional") as HTMLTextAreaElement
  ).value;
  const DisplaySkills = (
    document.getElementById("Skills") as HTMLTextAreaElement
  ).value;

  if (
    !DisplayName ||
    !DisplayUserName ||
    !DisplayEmail ||
    !DisplayPhone ||
    !DisplayEducation ||
    !DisplayProfessional ||
    !DisplaySkills
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const ResumeData = {
    DisplayName,
    DisplayEmail,
    DisplayPhone,
    DisplayEducation,
    DisplayProfessional,
    DisplaySkills,
  };

  localStorage.setItem(DisplayUserName, JSON.stringify(ResumeData));

  // Generate Resume HTML content
  const ResumeHTML = `
    <h1><b>Editable Resume</b></h1>
    <section>
      <h2>Personal Information</h2>
      <p><b>Name:</b> <span contenteditable="true"><b>${DisplayName}</b></span></p>
      <p><b>Email:</b> <span contenteditable="true"><b>${DisplayEmail}</b></span></p>
      <p><b>Phone:</b> <span contenteditable="true"><b>${DisplayPhone}</b></span></p>
    </section>
    <section>
      <h2>Education</h2>
      <ul contenteditable="true">
        ${DisplayEducation.split(",")
          .map((edu) => `<li><b>${edu.trim()}</b></li>`)
          .join("")}
      </ul>
    </section>
    <section>
      <h2>Professional Experience</h2>
      <ul contenteditable="true">
        ${DisplayProfessional.split(",")
          .map((exp) => `<li><b>${exp.trim()}</b></li>`)
          .join("")}
      </ul>
    </section>
    <section>
      <h2>Skills</h2>
      <ul contenteditable="true">
        ${DisplaySkills.split(",")
          .map((skill) => `<li><b>${skill.trim()}</b></li>`)
          .join("")}
      </ul>
    </section>
  `;

  if (ResumePreview) {
    ResumePreview.innerHTML = ResumeHTML;

    // Generate shareable link and display link container
    const ShareableURL = `${
      window.location.origin
    }?username=${encodeURIComponent(DisplayUserName)}`;
    LinkContainer.style.display = "block";
    ShareableLink.href = ShareableURL;
    ShareableLink.textContent = ShareableURL;
  } else {
    console.error("The resume display element is missing.");
  }
});

// Handle PDF download
DownloadBtn.addEventListener("click", () => {
  window.print(); // This will open the print dialog and allow the user to save as PDF
});

window.addEventListener("DOMContentLoaded", (): void => {
  const URLParams = new URLSearchParams(window.location.search);
  const Username = URLParams.get("username");
  if (Username) {
    const SavedResumeData = localStorage.getItem(Username);
    if (SavedResumeData) {
      const ResumeData = JSON.parse(SavedResumeData);
      (document.getElementById("UserName") as HTMLInputElement).value =
        Username;
      (document.getElementById("Name") as HTMLInputElement).value =
        ResumeData.DisplayName;
      (document.getElementById("Email") as HTMLInputElement).value =
        ResumeData.DisplayEmail;
      (document.getElementById("Phone") as HTMLInputElement).value =
        ResumeData.DisplayPhone;
      (document.getElementById("Education") as HTMLTextAreaElement).value =
        ResumeData.DisplayEducation;
      (document.getElementById("Professional") as HTMLTextAreaElement).value =
        ResumeData.DisplayProfessional;
      (document.getElementById("Skills") as HTMLTextAreaElement).value =
        ResumeData.DisplaySkills;
    }
  }
});
