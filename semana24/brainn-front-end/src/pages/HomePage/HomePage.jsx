import React, { useEffect, useState } from 'react'
import { getLoterias, getConcursos, getResultados } from '../../services/get'
/* import moment from 'moment';
 */import { ResultDiv, NumberDiv, SelectDiv, FooterDiv, ConcursoDiv, ColorDiv, MainDiv, NumeroConcurso, InfoDiv, DesktopDiv } from './styled'
import Logo from '../../assets/logo.svg'
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

    let dataInput = resultados.data
    let data = new Date(dataInput);
    let dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' })


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

    return <MainDiv>

        <ColorDiv color={cor} >
            <div>
                <SelectDiv >
                    <FormControl sx={{/*  m: 1, minWidth: 120, */  backgroundColor: 'white', width: 250, borderRadius: 5 }}>
                        <Select
                            sx={{ borderRadius: 5 }}
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
            </div>

            <ConcursoDiv>
                <img src={Logo} alt="Logo" />
                {<h2>{nomeConcurso === undefined ? 'MEGA-SENA' : nomeConcurso.nome.toUpperCase()} </h2>}
                <NumeroConcurso>
                    {<h3>CONCURSO N° {concursoAtual.length > 0 ? concursoAtual : '2359'}</h3>}
                </NumeroConcurso>

            </ConcursoDiv>
            <DesktopDiv>
                {<h3>CONCURSO - {concursoAtual.length > 0 ? concursoAtual : '2359'} {dataFormatada}</h3>}
            </DesktopDiv>
        </ColorDiv>
        <InfoDiv>
            <ResultDiv>
                {numeros && numeros.map((num) => {
                    return <NumberDiv>
                        <h3>{num}</h3>
                    </NumberDiv>
                })}
            </ResultDiv>
            <FooterDiv>
                <p> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </FooterDiv>
            {console.log('Data', dataFormatada)}
        </InfoDiv>


        {/*  
        {console.log('------------------------------')}
        {console.log('Estado que guarda os concursos', concursos)}
        {console.log('Valor do concurso que tenha o mesmo ID que foi escolhido no select', concursoAtual)}
        {console.log('Estado que guarda o resultado do sorteio (resposta da requisição que usa o id do select para ser feita)', numeros)}
        {console.log('loterias', loterias)}
        {console.log('Resultados', resultados.data)}
        {console.log('Nome do concurso atual', nomeConcurso)}
        {console.log('ID', lotoId)}
        {console.log('Data concurso', dataFormatada)}  */}
    </MainDiv >
}

export default HomePage