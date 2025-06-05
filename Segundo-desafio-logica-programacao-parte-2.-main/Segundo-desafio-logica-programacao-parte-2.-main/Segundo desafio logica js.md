# 🚀 Segundo Desafio de Lógica de Programação – Parte 2

---

## 1️⃣ Função que exibe "Olá, mundo!" no console

```javascript
function exibirOlaMundo(){
    console.log('Olá, Mundo!'); // Função criada para exibir a mensagem
}

exibirOlaMundo(); // Executa a função
```

📌 **Explicação:**  
Função simples que exibe uma mensagem no console.

---

## 2️⃣ Função que recebe um nome como parâmetro

```javascript
function saudacao(nome){
    console.log(`Olá, ${nome}`);
}

saudacao('Pumpkinn');
```

📌 **Explicação:**  
Recebe um nome e exibe ele com um "Olá".

---

## 3️⃣ Função que retorna o dobro de um número

```javascript
function dobro(numero){
    return numero * 2; 
}

let resultado = dobro(10); 
console.log(resultado); // Exibe: 20
```

📌 **Explicação:**  
Multiplica o número por 2 e retorna o resultado.

---

## 4️⃣ Função que calcula a média de três números

```javascript
function calcularMedia(num1, num2, num3){
    let soma = num1 + num2 + num3;
    return soma / 3;
}

let media = calcularMedia(5, 7, 9); 
console.log(media); // Exibe: 7
```

📌 **Explicação:**  
Somou, dividiu por 3, entregou a média.

---

## 5️⃣ Função que retorna o maior entre dois números

```javascript
function maiorNumero(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

let resultado = maiorNumero(8, 5);
console.log(resultado); // Exibe: 8
```

📌 **Explicação:**  
Verifica qual número é maior.

---

## 6️⃣ Função que retorna o número multiplicado por ele mesmo

```javascript
function multiplicado(numero){
    return numero * numero;
}

let resultado = multiplicado(8);
console.log(resultado); // Exibe: 64
```

📌 **Explicação:**  
Também conhecido como elevar ao quadrado. Boa pra cálculos matemáticos.

---

## 📃 Conclusão:

- ✅ Função sem parâmetro: mostra como criar uma função simples que executa uma ação.
- ✅ Função com parâmetro: ensina a passar informação para personalizar a saída.
- ✅ Função com retorno: mostra como a função pode devolver um resultado para usar depois.
- ✅ Função com múltiplos parâmetros: ensina a manipular vários dados e calcular média.
- ✅ Função para comparar valores: ajuda a entender decisões lógicas dentro da função.
- ✅ Função para cálculo matemático: mostra como criar funções que processam números e retornam resultados.
