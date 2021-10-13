import React, { useEffect, useState } from 'react'
import { getLoterias, getConcursos, getResultados } from '../../services/get'
import { ResultDiv, ColorDiv } from './styled'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HomePage = () => {

    const [loterias, setLoterias] = useState([]);
    const [id, setId] = useState('0');
    const [concursos, setConcursos] = useState([]);
    const [resultados, setResultados] = useState([]);

    const handleChange = (event) => {
        setId(event.target.value);
    };

    let concursoAtual = concursos.filter((concurso) => {
        return concurso.loteriaId === id
    }).map((concurso) => {
        return concurso.concursoId
    })


    useEffect(() => {

        getLoterias(setLoterias)
        getConcursos(setConcursos)
        if (concursoAtual.length === 0) {
            getResultados(setResultados, "2359")
        }
        getResultados(setResultados, concursoAtual)

    }, [id])

    const { numeros } = resultados

    return <div>
        HOME

        <FormControl sx={{ m: 1, minWidth: 120 }}>

            <Select
                value={id}
                onChange={handleChange}
            >
                <MenuItem value="">

                </MenuItem>
                {loterias.map((x) => {
                    return <MenuItem
                        key={x.id}
                        value={x.id}>{x.nome.toUpperCase()}</MenuItem>
                })}

            </Select>

        </FormControl>

        {numeros && numeros.map((num) => {
            return <div>
                <h3>{num}</h3>
            </div>
        })}
        {/* <ColorDiv> </ColorDiv>   */}

        <p> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>

        {/* LOGS DE TESTES */}
        {console.log('------------------------------')}
        {console.log('Estado que guarda os concursos', concursos)}
        {console.log('Valor do concurso que tenha o mesmo ID que foi escolhido no select', concursoAtual)}
        {console.log('Estado que guarda o resultado do sorteio (resposta da requisição que usa o id do select para ser feita)', numeros)}
        {console.log(concursoAtual.length)}

    </div >
}

export default HomePage