window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // Efeito de transição para o botão
  document.querySelector('.botao').addEventListener('mouseover', () => {
    document.querySelector('.botao').style.background = '#1DAF4E';
  });
  
  document.querySelector('.botao').addEventListener('mouseout', () => {
    document.querySelector('.botao').style.background = '#25D366';
  });
  
  