
    const firebaseConfig = {
        apiKey: "AIzaSyDj7mT645toN-G1B-78YdwoPINmeEPpa7o",
        authDomain: "team-co.firebaseapp.com",
        databaseURL: "https://team-co-default-rtdb.firebaseio.com",
        projectId: "team-co",
        storageBucket: "team-co.appspot.com",
        messagingSenderId: "252183411082",
        appId: "1:252183411082:web:0bc8a35e791e28dfb03073"
      };
    //   copy your firebase config informations
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };