# 🧠 Terceiro Desafio de Lógica de Programação com JavaScript - Parte 2

## 1. Calculando o IMC (Índice de Massa Corporal) 🏋️‍♂️

- **Objetivo:** Criar uma função que recebe altura (em metros) e peso (em kg) e calcula o IMC.
- **Fórmula:** IMC = peso / (altura * altura)
- **Dica:** Corrige a variável que está errada no exemplo (`alturaMetros` não foi declarada, o certo é usar `altura`).

```js
function calculaIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // arredonda para 2 casas decimais
}
```

## 2. Calculando o Fatorial de um Número! 🔢

- **O que é:** Multiplicação de todos os números inteiros de 1 até o número dado.
- **Exemplo:** Fatorial de 5 = 5×4×3×2×1 = 120
- **Cuidado:** 0! e 1! são iguais a 1 por definição.

```js
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
```

## 3. Converter Dólar para Real 💵➡️💰

- **Cenário:** Passa um valor em dólar e retorna o valor em reais.
- **Cotação fixa:** R$4,80 por dólar (pra facilitar o cálculo).
- **Dica:** Use `toFixed(2)` pra deixar o valor com duas casas decimais.

```js
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}
```

## 4. Área e Perímetro de uma Sala Retangular 🏠⬛

- **Fórmulas:**
  - Área = altura × largura
  - Perímetro = 2 × (altura + largura)

```js
function calcularAreaPerimetro(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} metros`);
}
```

## 5. Área e Perímetro de uma Sala Circular 🏠⭕️

- **Fórmulas:**
  - Área = π × raio²
  - Perímetro (circunferência) = 2 × π × raio
- **Use:** π = 3,14 (valor aproximado)

```js
function calcularAreaPerimetroCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} metros`);
}
```

## 6. Mostrar Tabuada 📚

- **Mostra a tabuada do número até um limite definido.**
- **Exemplo:** tabuada do 12 até 10 (12×1 até 12×10)

```js
function mostrarTabuada(numero, limite) {
    for (let i = 1; i <= limite; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
```

## 🏁 Conclusão Passo a Passo

- ✅ **Entenda o problema:** Leia o que a função precisa fazer, quais dados recebe e o que deve retornar ou imprimir.
- ✅ **Pegue a fórmula ou regra:** Se for cálculo, saiba a fórmula (IMC, área, fatorial, etc.).
- ✅ **Escreva a função:** Use parâmetros para deixar o código reutilizável.
- ✅ **Trate casos especiais:** Como fatorial de 0 e 1, arredondamento, etc.
- ✅ **Teste com exemplos:** Sempre chame a função com valores reais e veja se o resultado bate.
- ✅ **Aprimore a saída:** Use `console.log` para mostrar o resultado ou `return` para devolver o valor (dependendo do uso).
- ✅ **Repita o processo:** Cada desafio é um exercício de lógica e prática com funções, loops e operações matemáticas.
