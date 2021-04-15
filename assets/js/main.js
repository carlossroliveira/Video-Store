    // ==================== Criação de Função
    function converterDuracao() {

        // ==================== Criar referencia
        const inTitulo = document.querySelector('[data-inTitulo]');
        const inDuracao = document.querySelector('[data-inDuracao]');

        const outTitulo = document.querySelector('[data-outTitulo]');
        const outResposta = document.querySelector('[data-outResposta]');

        // ==================== Obtém conteúdos 
        const titleValue = inTitulo.value;
        const duracaoValue = inDuracao.value;
        inTitulo.value = '';
        inDuracao.value = '';


        const horas = Math.floor(duracaoValue / 60); 
        const minutos = duracaoValue % 60;


        outTitulo.textContent = titleValue;
        outResposta.textContent = `${horas} horas(s) e ${minutos} minutos(s)`;

    }

    

    // ==================== Executando a Função
    const btnConverter = document.querySelector('[data-btnConverter]');
    btnConverter.addEventListener('click', converterDuracao);