document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  console.log('Estrelas encontradas:', stars); // Verificando se as estrelas estão sendo selecionadas

  stars.forEach(star => {
    star.addEventListener('click', (event) => {
      const value = parseInt(star.getAttribute('data-value')); // Obtendo o valor da estrela clicada
      console.log('Valor da estrela clicada:', value);
      updateStars(value); // Atualizando as estrelas
    });
  });

  function updateStars(value) {
    stars.forEach(star => {
      const starValue = parseInt(star.getAttribute('data-value'));
      if (starValue <= value) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
});