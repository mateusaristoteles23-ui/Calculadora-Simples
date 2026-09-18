# 🧮 Calculadora Simples — React JS

Projeto desenvolvido como desafio prático de **React JS**, com o objetivo de criar uma calculadora capaz de realizar operações matemáticas básicas entre dois números.

## 📋 Sobre o projeto

A aplicação permite que o usuário informe dois números, escolha uma operação matemática e visualize o resultado diretamente na tela.

As operações disponíveis são:

- Adição (`+`)

- Subtração (`-`)

- Multiplicação (`*`)

- Divisão (`/`)

Além disso, a calculadora possui um botão para limpar os campos e o resultado apresentado.

## 🎯 Objetivos do desafio

- Criar um componente React chamado `FormCalculadora`.

- Trabalhar com campos de entrada (`input`).

- Utilizar um campo de seleção (`select`) para escolher a operação.

- Criar botões para calcular e limpar os dados.

- Exibir o resultado na tela.

- Praticar o uso de estados, eventos e renderização condicional no React.

- Estilizar o componente utilizando CSS.

## 🛠️ Tecnologias utilizadas

- [React JS](https://react.dev/)

- JavaScript

- HTML/JSX

- CSS

- Vite ou Create React App

## 📁 Estrutura sugerida do projeto

```
src/
├── components/
│   ├── FormCalculadora.jsx
│   └── FormCalculadora.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Acesse a pasta do projeto

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Depois, acesse o endereço exibido no terminal, normalmente:

```
http://localhost:5173
```

## 🧩 Funcionalidades

### Entrada dos números

A interface possui dois campos para que o usuário informe o primeiro e o segundo número da operação.

### Seleção da operação

A operação matemática é escolhida por meio de um elemento HTML `<select>`, contendo as opções `+`, `-`, `*` e `/`.

### Cálculo

Ao clicar no botão **Calcular**, a aplicação verifica a operação selecionada, realiza o cálculo e mostra o resultado na tela.

### Limpeza dos dados

O botão **Limpar** restaura os campos para seus valores iniciais e remove o resultado exibido.

### Validações

A aplicação deve impedir cálculos inválidos, como:

- Campos numéricos vazios.

- Valores que não sejam números.

- Divisão por zero.

## 🧠 Conceitos de React aplicados

### Componentização

A calculadora é organizada em um componente independente chamado `FormCalculadora.jsx`. A componentização facilita a manutenção, a reutilização e a organização do código.

### Estado com `useState`

Os valores digitados, a operação selecionada e o resultado podem ser controlados com o Hook `useState`.

Exemplo:

```jsx
const [primeiroNumero, setPrimeiroNumero] = useState('' );
const [segundoNumero, setSegundoNumero] = useState('');
const [operacao, setOperacao] = useState('+');
const [resultado, setResultado] = useState(null);
```

### Eventos

A aplicação utiliza eventos como:

- `onChange`: para acompanhar as alterações nos campos.

- `onClick`: para executar o cálculo ou limpar os dados.

- `onSubmit`: caso o formulário seja enviado dessa forma.

### Renderização dinâmica

O resultado é atualizado na tela conforme o estado da aplicação é alterado, sem a necessidade de recarregar a página.

## 💡 Exemplo de funcionamento

Considerando os seguintes valores:

```
Primeiro número: 10
Segundo número: 5
Operação: *
```

O resultado apresentado será:

```
Resultado: 50
```

## 🎨 Estilização

O componente deve possuir um CSS próprio para organizar o formulário e melhorar a experiência do usuário. Podem ser aplicados estilos em:

- Título da calculadora.

- Campos de entrada.

- Lista de operações.

- Botões de calcular e limpar.

- Área de resultado.

- Mensagens de validação.

Exemplo de importação do CSS no componente:

```jsx
import './FormCalculadora.css';
```

## 📦 Comandos básicos

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências do projeto |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza a versão de produção localmente |

## ✅ Critérios atendidos

- [x] Pasta `components` criada.

- [x] Componente `FormCalculadora.jsx` criado.

- [x] Campo para o primeiro número.

- [x] Campo para o segundo número.

- [x] Campo `<select>` para a operação.

- [x] Botão **Calcular**.

- [x] Botão **Limpar**.

- [x] Exibição do resultado na tela.

- [x] Estilização do componente.

- [x] README com a explicação dos conceitos aplicados.

## 📤 Entrega

A entrega do projeto deve ser realizada pelo **GitHub**, com o repositório público e este arquivo `README.md` explicando o funcionamento da aplicação e os conceitos utilizados.

## 👨‍💻 Autor

Desenvolvido por **SEU NOME**.

Substitua `SEU NOME` pelo seu nome e adicione o link do seu repositório antes de realizar a entrega.
