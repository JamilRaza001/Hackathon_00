const Toggle_Btn = document.getElementById("ToggleSkills") as HTMLButtonElement;
const Skills1 = document.getElementById("Skills") as HTMLElement;

Toggle_Btn.addEventListener("click", () => {
  if (Skills1.style.display === "none") {
    Skills1.style.display = "block";
  } else {
    Skills1.style.display = "none";
  }
});
