const $button = document.querySelector('.sidebar-toggle');
const $buttonClose = document.querySelector('#sidebar-close');
const $sidebar = document.querySelector('aside.sidebar');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("button")
  $sidebar.classList.toggle('toggled');
});


// slick slider js starts

$('.patientXray ul').slick({
  dots: false,
  infinite: false,
  arrows: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1

      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1

      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// history tab start

$("#historyButton").click(function () {
  if (window.innerWidth < 600) {
    $("#historyButton").hide(300);
    $("#rightBox").slideDown(300);
  } else {
    $("#historyButton").hide(300);
    $("#rightBox").show(300);
  }
});

$("#closeBox").click(function () {
  if (window.innerWidth < 600) {
    $("#historyButton").show(300);
    $("#rightBox").slideUp(300);
  } else {
    $("#historyButton").show(300);
    $("#rightBox").hide(300);
  }
});


// history tab end


