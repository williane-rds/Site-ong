// ==================== Menu Mobile ====================
// MENU RESPONSIVO
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

// FORMULÁRIO DE CADASTRO
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("volunteerForm");
    const tabelaVoluntarios = document.getElementById("tabelaVoluntarios");
    const successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("telefone").value;
            const cidade = document.getElementById("cidade").value;

            if (!nome || !email) {
                alert("Por favor, preencha os campos obrigatórios!");
                return;
            }

            // Cria linha de tabela com os dados
            const row = `
                <tr>
                    <td>${nome}</td>
                    <td>${email}</td>
                    <td>${telefone}</td>
                    <td>${cidade}</td>
                </tr>
            `;

            // Adiciona na tabela
            if (!document.querySelector("#tabelaVoluntarios table")) {
                tabelaVoluntarios.innerHTML = `
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                            </tr>
                        </thead>
                        <tbody>${row}</tbody>
                    </table>
                `;
            } else {
                const tbody = tabelaVoluntarios.querySelector("tbody");
                tbody.insertAdjacentHTML("beforeend", row);
            }

            // Exibe mensagem de sucesso
            successMessage.style.display = "block";

            // Limpa o formulário
            form.reset();

            // Oculta a mensagem após 5s
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        });
    }
});
