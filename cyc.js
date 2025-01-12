document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const userId = document.getElementById("userId").value;
  const cycForm = document.getElementById("registration-form");
  const storedData = JSON.parse(localStorage.getItem(userId));

  if (userId) {
    localStorage.setItem("currentUser", userId);
    cycForm.style.display = "block";
  } else {
    cycForm.style.display = "none";
    alert("PHN-Code does not exist");
  }
});


document.getElementById("occupation").addEventListener("change", function () {
  const occupation = this.value;
  const applicantInfo = document.getElementById("applicant-info");
  const studentInfo = document.getElementById("student-info");

  if (occupation === "Applicant") {
    applicantInfo.style.display = "block";
    studentInfo.style.display = "none";
  } else if (occupation === "Student") {
    applicantInfo.style.display = "none";
    studentInfo.style.display = "block";
  } else {
    applicantInfo.style.display = "none";
    studentInfo.style.display = "none";
  }
});

document.getElementById("student-category").addEventListener("change", function () {
  const category = this.value;
  document.getElementById("primary-info").style.display = category === "Primary" ? "block" : "none";
  document.getElementById("secondary-info").style.display = category === "Secondary" ? "block" : "none";
  document.getElementById("tertiary-info").style.display = category === "Tertiary" ? "block" : "none";
});

document.getElementById("registration-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  console.log("Submitting form data:", data);

  // Submit data to Google Drive (backend logic to be implemented)
  // alert("Form submitted successfully!");
  window.location.href = "tag.html";
});

window