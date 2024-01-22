const firebaseConfig = {
  apiKey: "AIzaSyCDJ3wW9PchVSEsPSqNs-s1VHOKmcEfY30",
  authDomain: "team-np-a4b43.firebaseapp.com",
  databaseURL: "https://team-np-a4b43-default-rtdb.firebaseio.com",
  projectId: "team-np-a4b43",
  storageBucket: "team-np-a4b43.appspot.com",
  messagingSenderId: "18078966307",
  appId: "1:18078966307:web:86fb0d7776b731d7ecc796"
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