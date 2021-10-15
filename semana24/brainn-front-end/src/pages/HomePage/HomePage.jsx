import React, { useEffect, useState } from 'react'
import { getLoterias, getConcursos, getResultados } from '../../services/get'
import { ResultDiv, NumberDiv, SelectDiv, InfoDiv, ConcursoDiv, ColorDiv } from './styled'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HomePage = () => {

    const [loterias, setLoterias] = useState([]);
    const [lotoId, setLotoId] = useState('0');
    const [concursos, setConcursos] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [cor, setCor] = useState('')

    const { numeros, loteria } = resultados

    const handleChange = (event) => {
        setLotoId(event.target.value);
    };

    let concursoAtual = concursos.filter((concurso) => {
        return concurso.loteriaId === lotoId
    }).map((concurso) => {
        return concurso.concursoId
    })

    let nomeConcurso = loterias.filter((concurso) => {
        return concurso.id === loteria
    }).shift()

    useEffect(() => {
        getLoterias(setLoterias)
        getConcursos(setConcursos)
        if (concursoAtual.length === 0) {
            getResultados(setResultados, "2359")
        }
        getResultados(setResultados, concursoAtual)

    }, [lotoId])

    useEffect(() => {
        backgroundColor()
    }, [resultados.loteria])


    const backgroundColor = () => {

        switch (resultados.loteria) {
            case 0:
                return setCor('#6BEFA3')
            case 1:
                return setCor('#8666EF')
            case 2:
                return setCor('#DD7AC6')
            case 3:
                return setCor('#FFAB64')
            case 4:
                return setCor('#5AAD7D')
            case 5:
                return setCor('#BFAF83')
            default:
                return setCor('#6BEFA3')
        }
    }

    return <div>

        <ColorDiv color={cor} >
            <SelectDiv>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={lotoId}
                        onChange={handleChange}
                    >
                        <MenuItem value="Selecione">
                        </MenuItem>
                        {loterias.map((x) => {
                            return <MenuItem
                                key={x.id}
                                value={x.id}>{x.nome.toUpperCase()}</MenuItem>
                        })}
                    </Select>
                </FormControl>

            </SelectDiv>
            <ConcursoDiv>
                {<h2>{nomeConcurso === undefined ? 'MEGA-SENA' : nomeConcurso.nome.toUpperCase()} </h2>}
                {<h3>CONCURSO N° {concursoAtual.length > 0 ? concursoAtual : '2359'}</h3>}

            </ConcursoDiv>
        </ColorDiv>
        <ResultDiv>
            {numeros && numeros.map((num) => {
                return <NumberDiv>
                    <h3>{num}</h3>
                </NumberDiv>
            })}
        </ResultDiv>
        <InfoDiv>
            <p> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
        </InfoDiv>

        {/* LOG'S DE TESTES */}
        {/* {console.log('------------------------------')}
        {console.log('Estado que guarda os concursos', concursos)}
        {console.log('Valor do concurso que tenha o mesmo ID que foi escolhido no select', concursoAtual)}
        {console.log('Estado que guarda o resultado do sorteio (resposta da requisição que usa o id do select para ser feita)', numeros)}
        {console.log('loterias', loterias)}
        {console.log('Resultados', resultados.loteria)}
        {console.log('Nome do concurso atual', nomeConcurso)}
        {console.log('ID', lotoId)} */}
    </div >
}

export default HomePage