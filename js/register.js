document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let counter = 0
  
    const generateId = document.getElementById("LGA").value + "25-" + document.getElementById("gender").value + Math.floor(Date.now() % 1000);
    counter = (counter ++) % 1000;
    const uniqueId = generateId + counter;
    const title=document.getElementById("title").value;
    const surname= document.getElementById("surname").value;
    const name = document.getElementById("name").value;
    const otherNames= document.getElementById("otherNames").value;
    const dob= document.getElementById("dob").value;
    const gender= document.getElementById("gender").value;
    const lga= document.getElementById("LGA").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const userData = {
      uniqueId: uniqueId,
      title: title,
      surname: surname,
      name: name,
      otherNames: otherNames,
      dob: dob,
      gender: gender,
      lga: lga,
      email: email,
      password: password
    };
  
    localStorage.setItem(uniqueId, JSON.stringify(userData));
    localStorage.setItem("currentUser", uniqueId);
  
    window.location.href = "success.html";
  });
  