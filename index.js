document.addEventListener("DOMContentLoaded", () => {
  const referrerSelect = document.getElementById("referrer");
  const extraDetails = document.getElementById("extra-details");
  const detailsTextarea = document.getElementById("details");
  const form = document.forms.signupForm;

  function toggleExtraDetails() {
    const value = referrerSelect.value;

    if (value === "magic" || value === "other") {
      
      extraDetails.classList.remove("hidden");
      
      detailsTextarea.setAttribute("required", "required");
    } else {
      
      extraDetails.classList.add("hidden");
    
      detailsTextarea.removeAttribute("required");
      detailsTextarea.value = "";
    }
  }

  if (referrerSelect) {
    referrerSelect.addEventListener("change", toggleExtraDetails);
  }


  if (form) {
    form.addEventListener("reset", () => {
      extraDetails.classList.add("hidden");
      detailsTextarea.removeAttribute("required");
      detailsTextarea.value = "";
      
      referrerSelect.value = "";
    });
  }
});
