// Função para calcular o tempo desde que vocês se conheceram
function startLoveTimer() {
    const startDate = new Date('2024-02-31T09:00:00'); // Data e hora que vocês se conheceram
    const timerElement = document.getElementById('love-timer');

    function updateTimer() {
        const now = new Date();
        let elapsed = now - startDate;

        // Calcular meses (considerando uma média de 30.44 dias por mês)
        const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30.44));
        elapsed -= months * (1000 * 60 * 60 * 24 * 30.44);

        // Calcular dias
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        elapsed -= days * (1000 * 60 * 60 * 24);

        // Calcular horas
        const hours = Math.floor(elapsed / (1000 * 60 * 60));
        elapsed -= hours * (1000 * 60 * 60);

        // Calcular minutos
        const minutes = Math.floor(elapsed / (1000 * 60));
        elapsed -= minutes * (1000 * 60);

        // Calcular segundos
        const seconds = Math.floor(elapsed / 1000);

        // Atualizar o texto do timer
        timerElement.textContent = `${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    // Atualizar o timer a cada segundo
    setInterval(updateTimer, 1000);
}

// Iniciar o timer assim que a página carregar
window.onload = startLoveTimer;
