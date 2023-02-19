const navbar = document.querySelector('.navbar');
const navbarToggler = navbar.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
// Smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });
  
  // Set video attributes for the tattoo video
  const tattooVideo = document.getElementById('tattoo-video');
  tattooVideo.setAttribute('src', 'img/tattoo.mp4');
  tattooVideo.setAttribute('poster', 'img/tattoo.jpg');
  tattooVideo.setAttribute('autoplay', true);
  tattooVideo.setAttribute('loop', true);
  tattooVideo.setAttribute('muted', true);
  