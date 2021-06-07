import React from "react"





export default class Pagina1 extends React.Component {

    render() {

        return (

            <div>
                <h1>ETAPA 1- DADOS GERAIS</h1>
                <h2>1. Qual o seu nome?</h2>
                <input />
                <h2>2. Qual a sua idade?</h2>
                <input />
                <h2>3. Qual seu email?</h2>
                <input />
                <h2>4. Qual a sua escolaridade?</h2>
                <select>

                    <option selected value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                    <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>

                </select>

                

            </div>


        )
    }

}