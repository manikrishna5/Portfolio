function viewResume() {
    window.open("Mani_Krishna_Karri_Resume.pdf",'_blank')
}

document.addEventListener("DOMContentLoaded", () => {
  const text = "ML & Data Science Enthusiast | Full Stack Developer | Graphic Designer";
  const roleElement = document.getElementById("role");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      roleElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Typing speed
    }
  }

  typeWriter();
});

const boxes = document.querySelectorAll(".box");

// Loop through each box and add hover animation
boxes.forEach(box => {
  
  box.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

 
  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.05)";
    box.style.boxShadow = "0 10px 20px rgba(255, 255, 255, 0.2)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
    box.style.boxShadow = "none";
  });
});
const certlinks = [
  "https://olympus1.mygreatlearning.com/course_certificate/WZUERIVU",
  "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs60/Course/NPTEL25CS60S44700304101210650.pdf",
  "https://lnkd.in/g_mdq3dE",
  "https://sreenidhi.codetantra.com/cert/certificate.jsp?certId=CT413-tRIC8Ll-cfF",
  "https://cert.efset.org/9LMg8G",
  "https://www.credly.com/badges/1709b161-28b8-430f-b776-c20ccff59fec/linked_in_profile",
  "https://www.credly.com/badges/1d872aba-3ba7-42fb-8024-971d94073546/linked_in_profile"

];
const boxlinks = document.querySelectorAll(".box");
boxlinks.forEach((box,index)=>{
  box.style.cursor = "pointer";
  box.addEventListener("click",()=>{
    window.open(certlinks[index],"_blank");
  });
});