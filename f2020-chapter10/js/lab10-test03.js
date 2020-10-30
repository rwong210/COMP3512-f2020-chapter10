document.addEventListener("DOMContentLoaded", function () {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';


   // first hide loaders and main element 
   document.querySelector("main").style.display = "none";
   document.querySelector("#loader1").style.display = "none";
   document.querySelector("#loader2").style.display = "none";

   // then handle button click 
   document.querySelector("#fetchButton").addEventListener('click', (e) => {
      fetch(countryAPI)
         .then(response => response.json())
         .then(data => {
            populateList(data);
            hideLoading();
            getPhotos();
         })
         .catch(error => console.error(error));
      showLoading();

   });

   function showLoading() {
      document.querySelector("main").style.display = "none";
      document.querySelector("#loader1").style.display = "block";
   }

   function hideLoading() {
      document.querySelector("#loader1").style.display = "none";
      document.querySelector("main").style.display = "block";
   }

   function showLoading2() {
      document.querySelector("#loader2").style.display = "block";
   }

   function hideLoading2() {
      document.querySelector("#loader2").style.display = "none";
   }
   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */
   function populateList(countries) {
      const select = document.querySelector("#countries");
      select.innerHTML = "";
      for (let c of countries) {
         let option = document.createElement("option");
         option.value = `${c.iso}`;
         option.innerText = `${c.name}`;
         select.appendChild(option);
      }
   }

   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */
   function getPhotos() {
      const options = document.querySelector("#countries");
      options.addEventListener('change', (e) => {
         let queryString = `?iso=${e.target.value}`;
         fetch(photoAPI + queryString)
            .then(response => response.json())
            .then(data => {
               hideLoading2();
               displayImg(data);
            })
            .catch(error => console.error(error));
         showLoading2();
      })
   }


   function displayImg(images) {
      const results = document.querySelector("#results");
      results.innerHTML ="";
      for (image of images) {
         let img = document.createElement("img");
         img.setAttribute("src", `${imageURL}${image.filename}`);
         img.setAttribute("alt", `${image.title}`);
         results.appendChild(img);
      }
   }
});