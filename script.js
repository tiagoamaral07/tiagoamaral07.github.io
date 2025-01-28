document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typedText");
    const cursor = document.getElementById("cursor");
    const speed = 100; // Velocidade da digitação
    let i = 0;
    const text = "Design that connects, code that transforms!"; // O texto a ser digitado
    let typedText = ""; // Texto digitado até o momento
  
    // Função para digitar o texto com efeito
    function typeWriter() {
      if (i < text.length) {
        // Verifica se o caractere é parte de uma palavra "Design" ou "Code"
        if (text.substring(i, i + 6) === "Design" || text.substring(i, i + 4) === "code") {
          // Adiciona a classe 'highlighted' para essas palavras
          typedText += `<span class="highlighted">${text.substring(i, i + (text.substring(i, i + 6) === "Design" ? 6 : 4))}</span>`;
          i += (text.substring(i, i + 6) === "Design" ? 6 : 4);
        } else {
          // Adiciona o texto normalmente
          typedText += text.charAt(i);
          i++;
        }
  
        // Atualiza o conteúdo da tag <p> com o texto digitado e o cursor
        textElement.innerHTML = typedText + '<span id="cursor">|</span>';
        
        // Chama a função novamente após o intervalo
        setTimeout(typeWriter, speed);
      } else {
        // Remove o cursor depois de terminar a digitação
        cursor.style.display = 'none';
      }
    }
  
    typeWriter(); // Inicia o efeito de digitação
  });
  