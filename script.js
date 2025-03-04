    // Efeito auto digitação

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("typedText");
  const cursor = document.getElementById("cursor");
  const speed = 70;
  let i = 0;
  const text = "Design that connects, code that transforms!";
  let typedText = "";

  function typeWriter() {
    if (i < text.length) {
      if (text.substring(i, i + 6) === "Design" || text.substring(i, i + 4) === "code") {
        typedText += `<span class="highlighted">${text.substring(i, i + (text.substring(i, i + 6) === "Design" ? 6 : 4))}</span>`;
        i += (text.substring(i, i + 6) === "Design" ? 6 : 4);
      } else {
        typedText += text.charAt(i);
        i++;
      }

      textElement.innerHTML = typedText + '<span id="cursor">|</span>';
      setTimeout(typeWriter, speed);
    } else {
      cursor.style.display = 'none';
    }
  }

  typeWriter();
});

    // Menu hamburguer click

    document.addEventListener("DOMContentLoaded", function() {
      const menuHamburguer = document.querySelector('.menu-hamburguer');
      const menu = document.querySelector('.menu');
      const menuItems = document.querySelectorAll('.menu li a');
  
      function toggleMenu() {
          menu.classList.toggle('active');
          menuHamburguer.classList.toggle('active');
      }
  
      menuHamburguer.addEventListener('click', function(event) {
          event.stopPropagation();
          toggleMenu();
      });
  
      document.addEventListener('click', function(event) {
          if (!menu.contains(event.target) && !menuHamburguer.contains(event.target)) {
              menu.classList.remove('active');
              menuHamburguer.classList.remove('active');
          }
      });
  
      menuItems.forEach(item => {
          item.addEventListener('click', function() {
              menu.classList.remove('active');
              menuHamburguer.classList.remove('active');
          });
      });
  });
  



    // Menu scroll top

    document.addEventListener("DOMContentLoaded", function() {
      const header = document.querySelector('.bg-menu');
      const linha = document.querySelector('.linha');
      let lastScrollTop = 0;
      let isHeaderVisible = true;
  
      window.addEventListener('scroll', function() {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
          if (currentScroll > lastScrollTop) {
              if (currentScroll > header.offsetHeight && isHeaderVisible) {
                  header.classList.add('hidden');
                  linha.classList.add('hidden'); 
                  isHeaderVisible = false;
              }
          } else if (currentScroll < lastScrollTop) {
              if (!isHeaderVisible) {
                  header.classList.remove('hidden');
                  linha.classList.remove('hidden');
                  isHeaderVisible = true;
              }
          }
  
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });
  });
  