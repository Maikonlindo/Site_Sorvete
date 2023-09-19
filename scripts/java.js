function mostrarOpcoes() {
  var categoriaSelecionada = document.getElementById("categoria").value;
  var opcoesFrutas = document.getElementById("opcoesFrutas");
  var opcoesLeite = document.getElementById("opcoesLeite");

  if (categoriaSelecionada === "frutas") {
    opcoesFrutas.style.display = "block";
    opcoesLeite.style.display = "none";
  } else if (categoriaSelecionada === "saboresLeite") {
    opcoesFrutas.style.display = "none";
    opcoesLeite.style.display = "block";
  } else {
    opcoesFrutas.style.display = "none";
    opcoesLeite.style.display = "none";
  }
}

document.getElementById("categoria").addEventListener("change", mostrarOpcoes);

// Função para validar os campos antes de permitir a compra
function validarCampos() {
  var nome = document.querySelector("input[type='text']").value;
  var quantidade = document.querySelector("input[type='number']").value;
  var categoria = document.getElementById("categoria").value;
  var saboresFrutas = document.getElementById("saboresFrutas").value;
  var saboresLeite = document.getElementById("saboresLeite").value;

  if (nome === "" || quantidade === "" || categoria === "selecione") {
    alert("Preencha todos os campos obrigatórios antes de fazer o pedido.");
    return false;
  }

  if (
    (categoria === "frutas" && saboresFrutas === "selecione") ||
    (categoria === "saboresLeite" && saboresLeite === "selecione")
  ) {
    alert("Escolha um sabor antes de fazer o pedido.");
    return false;
  }

  return true;
}

// Função para validar os campos antes de permitir a compra

function validarCampos() {
  var nomeInput = document.querySelector("input[type='text']");
  var quantidadeInput = document.querySelector("input[type='number']");
  var categoria = document.getElementById("categoria").value;
  var saboresFrutas = document.getElementById("saboresFrutas").value;
  var saboresLeite = document.getElementById("saboresLeite").value;
  var camposValidos = true;

  // Limpar todas as classes campos-invalidos antes de revalidar
  nomeInput.classList.remove("campos-invalidos");
  quantidadeInput.classList.remove("campos-invalidos");
  document.getElementById("categoria").classList.remove("campos-invalidos");
  document.getElementById("saboresFrutas").classList.remove("campos-invalidos");
  document.getElementById("saboresLeite").classList.remove("campos-invalidos");

  if (nomeInput.value === "") {
    nomeInput.classList.add("campos-invalidos");
    camposValidos = false;
  }

  if (quantidadeInput.value === "") {
    quantidadeInput.classList.add("campos-invalidos");
    camposValidos = false;
  }

  if (categoria === "selecione") {
    document.getElementById("categoria").classList.add("campos-invalidos");
    camposValidos = false;
  }

  if (
    (categoria === "frutas" && saboresFrutas === "selecione") ||
    (categoria === "saboresLeite" && saboresLeite === "selecione")
  ) {
    if (categoria === "frutas") {
      document
        .getElementById("saboresFrutas")
        .classList.add("campos-invalidos");
    } else {
      document.getElementById("saboresLeite").classList.add("campos-invalidos");
    }
    camposValidos = false;
  }

  if (!camposValidos) {
    alert("Preencha todos os campos obrigatórios antes de fazer o pedido.");
  }

  return camposValidos;
}





// Evento de clique para o botão de Login
document.getElementById("login-btn").addEventListener("click", function (event) {
  // Impedir o comportamento padrão do link (não seguir o href "#")
  event.preventDefault();

  // Redirecionar para a página de login
  window.location.href = "login.html";
});