// console.log("GDG website loaded");

// fetch("http://localhost:8080/hello")

// .then(response => response.text())
// .then(data=> {document.getElementById("backend-msg").innerText = data;})

// .catch(error => console.error(error));

// theme toggle 
// const togglebtn = document.getElementById("themeToggle");
// const icon = togglebtn?.querySelector("span");

// const savedTheme = localStorage.getItem("theme");


// if (savedTheme === "dark") {
//     document.body.classList.add("dark-theme");
    
// }

// if(togglebtn){
//     togglebtn.addEventListener("click" , () =>{
//         document.body.classList.toggle("dark-theme");

        
//       if (document.body.classList.contains("dark-theme")) {
//         localStorage.setItem("theme", "dark");
       
//       } else {
//         localStorage.setItem("theme", "light");
       
//       }
//     })
// }

document.addEventListener("DOMContentLoaded" , ()=> {

    // upcoming events
const upcoming_container = document.getElementById("upcoming-container");
if(upcoming_container){
fetch("http://localhost:8080/api/events/upcoming")
.then(res => res.json())
.then(events => {
events.forEach(event => {
    upcoming_container.innerHTML += `<div class ="event-card">
    <img src="${event.imageurl}" class="event-image">
        <h3>${event.title}</h3>
        <p>${event.date}</p>
         <a href="${event.registration}" target="_blank" class="btn-register">Register Now</a>
    </div>`
     upcoming_container.appendChild(event);
});
})
.catch(error=> console.error(error));
}
// past events
const past_container = document.getElementById("past-container");
if(past_container){
    fetch("http://localhost:8080/api/events/past")
    .then(res => res.json())
    .then(events => {events.forEach(event => {
        past_container.innerHTML += `<div class = "event-card">
        <img src="${event.imageurl}" class="event-image">
        <h3> ${event.title}</h3>
        <p> ${event.date}</p></div>`;
    });
});
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });
})

