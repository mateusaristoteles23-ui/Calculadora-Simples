import { useState } from "react";

import styles from "./Calculadora.module.css";

function Calculadora() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState("");

    function limpar() {
        setNum1("");
        setNum2("");
        setOperacao("");
        setResultado("");
    }

    function Calcular(e) {

        e.preventDefault();

        // Verificar se os campos foram preenchidos
        if (!num1 || !num2) {
            alert("Os campos devem ser preenchidos.");
            return;
        }

        // Calcular
        if (operacao === "+") {

            setResultado(Number(num1) + Number(num2));

        } else if (operacao === "-") {

            setResultado(Number(num1) - Number(num2));

        } else if (operacao === "*") {

            setResultado(Number(num1) * Number(num2));

        } else if (operacao === "/") {

            setResultado(Number(num1) / Number(num2));

        }
    }

    return (
        <div className={styles.container}>

            <h1>Calculadora</h1>

            <input
                className={styles.input}
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Primeiro número"
            />

            <select
                className={styles.select}
                value={operacao}
                onChange={(e) => setOperacao(e.target.value)}
            >
                <option value="">Selecione uma operação</option>
                <option value="+">Soma (+)</option>
                <option value="-">Subtração (-)</option>
                <option value="*">Multiplicação (*)</option>
                <option value="/">Divisão (/)</option>
            </select>

            <input
                className={styles.input}
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Segundo número"
            />

            <div className={styles.botoes}>

                <button
                    className={styles.botao}
                    onClick={Calcular}
                >
                    Calcular
                </button>

                <button
                    className={styles.botao}
                    onClick={limpar}
                >
                    Limpar
                </button>

            </div>

            <h2 className={styles.resultado}>
                Resultado: {resultado}
            </h2>

        </div>
    );
}

export default Calculadora;