window.onscroll = function() {
    var scrollLimit = 100;

    let navbar = document.querySelector('.navbar');
    let menuList = document.querySelector('.menuList');
    if (window.scrollY >= scrollLimit) {
      navbar.style.backgroundColor = '#fff';
      menuList.style.color = 'black';
      navbar.style.boxShadow = '0px 0px 8px 2px black';
    }
  };