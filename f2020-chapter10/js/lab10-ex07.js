import { getPaintingData }  from "./paintings.js";

const main = document.querySelector('main');
const paintings = getPaintingData();
paintings.forEach( (p) => {
   main.appendChild( p.render() );
});
const url = "https://www.randyconnolly.com/funwebdev/3rd/async-post.php";

// set up button handlers here using event delegation
document.querySelector('main').addEventListener('click', (e) => {

   function showSnackBar(message) {
      const snack = document.querySelector("#snackbar");
      snack.textContent = message;
      snack.classList.add("show");
      setTimeout( () => {
         snack.classList.remove("show");
      }, 3000);
   }
   
   document.querySelector('main').addEventListener('click', (e) => {
      if (e.target.nodeName.toLowerCase() == 'button') {
         // retrieve data from button and
         let id = e.target.getAttribute('data-id');
         // get painting object for this button
         let p = painting.find( p => p.id ==id);
      }
   })
});