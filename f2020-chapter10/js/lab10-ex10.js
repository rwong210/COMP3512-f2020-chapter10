document.addEventListener("DOMContentLoaded", function () {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php?iso=';

   const button = document.querySelector("#fetchButton");
   const filters = document.querySelector("#filters");
   const select1 = document.querySelector("#countries");
   const select2 = document.querySelector("#cities");
   filters.style.display = "none";
   select2.style.display = "none";

   button.addEventListener('click', displayCountries);



   // function displayCountries() {
   //    fetch(countryAPI)
   //       .then( resp => resp.json() )
   //       .then( countries => {
   //          filters.style.display = "block";  
   //          countries.forEach( c => {
   //             const opt = document.createElement('option');
   //             opt.setAttribute('value',c.iso );
   //             opt.textContent = c.name;
   //             select1.appendChild(opt);
   //          });
   //          // add a listener to the select
   //          select1.addEventListener('input', displayCities);
   //       })
   // }

   // function displayCountries() {
   // console.log('before getCountryData');
   // const countries = getCountryData();
   // console.log('after getCountryData');

   // filters.styled.display = "block";
   // countries.forEach(c => {
   //    const opt = document.createElement('option');
   //    opt.setAttribute('value', c.iso);
   //    opt.textContent = c.name;
   //    select1.appendChild(opt);
   // });
   // select1.addEventListener('input', displaycities);

   // }

   async function displayCountries() {
      try {
         const response = await fetch(countryAPI);
         const countries = await response.json();

         filters.style.display = "block";
         countries.forEach(c => {
            const opt = document.createElement('option');
            opt.setAttribute('value', c.iso);
            opt.textContent = c.name;
            select1.appendChild(opt);
         });
         select1.addEventListener('input', displayCities);
      } catch (err) {
         console.error(err);
      }
   }
   async function getCountryData() {
      const response = await fetch(countryAPI);
      console.log('after first wait');
      const data = await response.json();
      console.log('after second await');
      return data;
   }

   // It is important to remember that the async function is asynchronous; 
   // the waiting only happens within the async function itself. 
   // That is, the next line after the call to getCountryData will get called after the await line 
   // in it is called, but before it is satisfied.

   function displayCities() {
      const iso = select1.value;
      fetch(cityAPI + iso)
         .then(resp => resp.json())
         .then(cities => {
            select2.style.display = "block";
            cities.forEach(c => {
               const opt = document.createElement('option');
               opt.textContent = c.name;
               select2.appendChild(opt);
            });
         })
   }
});