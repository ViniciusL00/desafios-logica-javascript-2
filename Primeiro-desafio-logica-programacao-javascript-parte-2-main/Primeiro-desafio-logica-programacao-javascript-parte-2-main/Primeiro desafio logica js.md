# 🚀 Desafio: Lógica de Programação com JavaScript (Parte 2) — Desafio 1

---

## 🧠 Manipulando Elementos HTML

### 1️⃣ Alterar o conteúdo de uma tag `<h1>`

```javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
```

---

## 🖱️ Lidando com Eventos de Botão

### 2️⃣ Exibir mensagem no console ao clicar no botão "Console"

```javascript
function verificarConsole() {
    console.log('O Botão console foi clicado!');
}
```

### 3️⃣ Mostrar alerta ao clicar no botão "Alerta"

```javascript
function verificarAlert() {
    alert('Eu amo JS <3!');
}
```

### 4️⃣ Usar prompt e alerta com nome de cidade

```javascript
function perguntarCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você!`);
}
```

---

## ➕ Soma de Números

### 5️⃣ Pedir dois números e mostrar a soma

```javascript
function somar() {
    let numero1 = parseInt(prompt('Digite um número inteiro aqui:'));
    let numero2 = parseInt(prompt('Digite um número inteiro aqui:'));

    let resultado = numero1 + numero2;
    alert(`O resultado da soma é ${resultado}.`);
}
```

---

## 🧾 Conclusão

- ✅ Manipular elementos HTML com JavaScript e como interagir com o usuário por meio de **eventos**, **alerts**, **prompts** e **funções simples**.
