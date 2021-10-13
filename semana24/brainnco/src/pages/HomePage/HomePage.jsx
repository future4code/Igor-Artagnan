import React, { useEffect, useState } from 'react'
import { getLoterias, getConcursos, getResultados } from '../../services/get'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HomePage = () => {

    const [loterias, setLoterias] = useState([]);
    const [id, setId] = useState('');
    const [concursos, setConcursos] = useState([]);
    const [resultados, setResultados] = useState([]);

    const handleChange = (event) => {
        setId(event.target.value);
    };

    let concursoAtual = concursos.filter((concurso) => {
        return concurso.loteriaId === id
    })

    let selected = concursoAtual[0].concursoId

    useEffect(() => {
        getLoterias(setLoterias)
        getConcursos(setConcursos)
        getResultados(setResultados, selected)
    }, [id])




    return <div>
        HOME
        {console.log(loterias)}
        <FormControl sx={{ m: 1, minWidth: 120 }}>

            <Select
                value={id}
                onChange={handleChange}
            >
                <MenuItem value="">

                </MenuItem>
                {loterias.map((x) => {
                    return <MenuItem
                        value={x.id}>{x.nome}</MenuItem>
                })}

            </Select>

        </FormControl>

        {console.log('VALUE', id)}
        {console.log('Concursos', concursos)}
        {console.log('ATUAL', concursoAtual)}
        {console.log('SELECTED', selected)}
        {console.log('RESULTADOS', resultados)}



        <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>

    </div>
}

export default HomePage