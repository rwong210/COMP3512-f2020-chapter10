

document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';


   // first hide loaders and main element 
   document.querySelector("main").style.display = display = "none";
   document.querySelector("#loader1").style.display = display = "none";
   document.querySelector("#loader2").style.display = display = "none";

   // then handle button click 
   document.querySelector("#fetchButton").addEventListener('click', (e) => {
      fetch(countryAPI)
      .then(response => response.json())
      .then(data => {
         
      })
   })


   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */


   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */



});