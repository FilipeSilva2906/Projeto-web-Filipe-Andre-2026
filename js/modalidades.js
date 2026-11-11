// ==========================================================================
// PulseFit Studio - Filtragem Dinâmica de Modalidades (js/modalidades.js)
// Funcionalidade Interativa Extra em JavaScript
// ==========================================================================

// Seleção de elementos da página
const botoesFiltro = document.querySelectorAll('[data-filtro]');
const cartoesModalidade = document.querySelectorAll('[data-categoria]');

// Classes de estilo para os botões de filtro (Tailwind CSS)
const classesBotaoAtivo = ['bg-[#00a8e8]', 'text-slate-950', 'font-bold', 'shadow-md'];
const classesBotaoInativo = ['bg-[#131d31]', 'text-slate-300', 'border', 'border-slate-700/80', 'hover:text-white', 'hover:border-slate-500', 'font-semibold'];

/**
 * Filtra os cartões de modalidade de acordo com o objetivo selecionado
 * @param {string} filtroSelecionado - Categoria a filtrar ('todos', 'cardio', 'forca', 'flexibilidade')
 */
function filtrarModalidades(filtroSelecionado) {
    cartoesModalidade.forEach((cartao) => {
        const categoriasCartao = cartao.getAttribute('data-categoria') || '';
        const listaCategorias = categoriasCartao.toLowerCase().split(' ');

        if (filtroSelecionado === 'todos' || listaCategorias.includes(filtroSelecionado.toLowerCase())) {
            cartao.classList.remove('hidden');
        } else {
            cartao.classList.add('hidden');
        }
    });
}

/**
 * Atualiza o aspeto visual do botão ativo e dos botões inativos
 * @param {HTMLElement} botaoAtivo - O botão que foi clicado
 */
function atualizarBotoes(botaoAtivo) {
    botoesFiltro.forEach((botao) => {
        if (botao === botaoAtivo) {
            botao.classList.remove(...classesBotaoInativo);
            botao.classList.add(...classesBotaoAtivo);
            botao.setAttribute('aria-pressed', 'true');
        } else {
            botao.classList.remove(...classesBotaoAtivo);
            botao.classList.add(...classesBotaoInativo);
            botao.setAttribute('aria-pressed', 'false');
        }
    });
}

// Adiciona o evento de clique a cada botão de filtro
botoesFiltro.forEach((botao) => {
    botao.addEventListener('click', () => {
        const categoria = botao.getAttribute('data-filtro');
        if (categoria) {
            filtrarModalidades(categoria);
            atualizarBotoes(botao);
        }
    });
});
