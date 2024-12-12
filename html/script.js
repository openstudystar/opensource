
 let searchbutton =document.querySelector('.search-button'); // for srch button
 let searchinput= document.querySelector('.search-input');
let lastScrollTop = 0; // Keep track of the last scroll position
const navbar = document.querySelector('nav'); // Select the navbar

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If the user scrolls down, hide the navbar, else show it
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-2000px"; // Move navbar out of view (adjust this value as needed)
    } else {
        navbar.style.top = "-20"; // Bring navbar back to the top
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

// for search

searchbutton.addEventListener('click', ()=>{
    if(searchinput.value ===''){
        searchinput.placeholder='Search here!'

    }
    else if(searchinput.value !== "") {
           searchinput.value="";
          searchinput.placeholder='Not found!'   
    }


});

searchinput.addEventListener('keydown', (event)=>{
    if(event.key ==='Enter'){

        if(searchinput.value ===''){
        searchinput.placeholder='Search here!'



    }
    else {
           searchinput.value="";
          searchinput.placeholder='Not found!'   
    }
}

});


 
