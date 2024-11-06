const ResumeForm: HTMLFormElement = document.getElementById(
  "ResumeForm"
) as HTMLFormElement;
const ResumePreveiw: HTMLDivElement = document.getElementById(
  "ResumePreview"
) as HTMLDivElement;


ResumeForm.addEventListener("submit", (event: Event): void => {
  event.preventDefault();

const DisplayName: HTMLInputElement = document.getElementById(
  "Name"
) as HTMLInputElement;
const DisplayEmail: HTMLInputElement = document.getElementById(
  "Email"
) as HTMLInputElement;
const DisplayPhone: HTMLInputElement = document.getElementById(
  "Phone"
) as HTMLInputElement;
const DisplayEducation: HTMLInputElement = document.getElementById(
  "Education"
) as HTMLInputElement;
const DisplayProfessional: HTMLInputElement = document.getElementById(
  "Professional"
) as HTMLInputElement;
const DisplaySkills: HTMLInputElement = document.getElementById(
  "Skills"
) as HTMLInputElement;

  if (
    !DisplayName.value ||
    !DisplayEmail.value ||
    !DisplayPhone.value ||
    !DisplayEducation.value ||
    !DisplayProfessional.value ||
    !DisplaySkills.value
  ) {
    alert("Please fill in all required fields.");
    return;
  }

const ResumeHTML = `
<h1><b>Editable Resume</b></h1>
<section>
<h2>Personal Information</h2>

<p><b>Name:</b><span contenteditable="true">${DisplayName.value}</span></p>

<p><b>Email:</b><span contenteditable="true">${DisplayEmail.value}</span></p>

<p><b>Phone:</b><span contenteditable="true">${DisplayPhone.value}</span></p>

</section>

<section>
<h2>Education</h2>

<ul contenteditable="true">
${DisplayEducation.value
  .split(",")
  .map((skill) => `<li>${skill.trim()}</li>`)
  .join("")}
</ul>
</section>

<section>
<h2>Professional Experience</h2>

<ul contenteditable="true">
${DisplayProfessional.value
  .split(",")
  .map((skill) => `<li>${skill.trim()}</li>`)
  .join("")}
</ul>
</section>

<section>
<h2>Skills</h2>

<ul contenteditable="true">
${DisplaySkills.value
  .split(",")
  .map((skill) => `<li>${skill.trim()}</li>`)
  .join("")}
</ul>
</section>
`

if(ResumePreveiw){
  ResumePreveiw.innerHTML = ResumeHTML
}

else{
  console.error("The resume display element is missing.")
}

  });
