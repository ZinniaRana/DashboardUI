var mainContainer = document.querySelector('.main-container');
var search = document.querySelector('.search-animated');
var searchbar = document.querySelector('.search');
var searchform = document.querySelector('.searchbar');
var body = document.querySelector('body');
var menuIcon = document.querySelector('.sidebarCollapse');

window.addEventListener("resize", function(){
    if (window.innerWidth <= 991){
        mainContainer.classList.add('sbar-open');
    }
    if (window.innerWidth > 991){
        mainContainer.classList.remove('sbar-open');
    }
})

menuIcon.addEventListener('click', function(){
    mainContainer.classList.toggle('sbar-open');
});

search.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("Clicked");
    searchform.classList.add('input-focused');
});

body.addEventListener('click', function(){
    if(searchform.classList.contains('input-focused')){
        searchform.classList.remove('input-focused');
       console.log('body')
    }
});
