window.addEventListener('scroll', (inicio) => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scroll > 0);
  });
  
  // Efeito de transição para o botão
  document.querySelector('.botao').addEventListener('mouseover', (contato) => {
    document.querySelector('.botao').style.background = '#1DAF4E';
  });
  
  document.querySelector('.botao').addEventListener('mouseout', (sobre) => {
    document.querySelector('.botao').style.background = '#25D366';
  });
  
  