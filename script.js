const form = document.getElementById("formUsuario");
const lista = document.getElementById("listaUsuarios");

let usuarios = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();

  if (nome && email && idade) {
    const usuario = { nome, email, idade };
    usuarios.push(usuario);
    atualizarLista();
    form.reset();
  }
});

function atualizarLista() {
  lista.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${usuario.nome} - ${usuario.email} - ${usuario.idade} anos 
      <button onclick="removerUsuario(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

function removerUsuario(index) {
  usuarios.splice(index, 1);
  atualizarLista();
}
