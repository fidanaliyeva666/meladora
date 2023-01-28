 

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
       
      },
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// autoplay: true,
// autoplaySpeed: 1500,
// infinite: true,
// slidesToShow: 3,
// slidesToScroll: 1,
// dots: true
const filterContainer = document.querySelector('.gallery-filter');
const galleryItem = document.querySelectorAll('.gallery-item');

filterContainer.addEventListener("click", (event)=>{
  if(event.target.classList.contains('filter-item')){
    filterContainer.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    const filterValue = event.target.getAttribute('data-filter');
   
   
    galleryItem.forEach((item)=>{
     if(item.classList.contains(filterValue) || filterValue==='all'){
      item.classList.remove('hide');
item.classList.add("show");
     }else{
      item.classList.remove('show');
item.classList.add("hide");
     }
    });
  }
})


