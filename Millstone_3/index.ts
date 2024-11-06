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
<h1><b>Dynamic Resume</b></h1>
<section>
<h2>Personal Information</h2>

<p><b>Name:</b> ${DisplayName.value}</p>

<p><b>Email:</b> ${DisplayEmail.value}</p>

<p><b>Phone:</b> ${DisplayPhone.value}</p>

</section>

<section>
<h2>Education</h2>

<ul>
${DisplayEducation.value
  .split(",")
  .map((skill) => `<li>${skill.trim()}</li>`)
  .join("")}
</ul>
</section>

<section>
<h2>Professional Experience</h2>

<ul>
${DisplayProfessional.value
  .split(",")
  .map((skill) => `<li>${skill.trim()}</li>`)
  .join("")}
</ul>
</section>

<section>
<h2>Skills</h2>

<ul>
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
