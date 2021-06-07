import React, {Component} from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
display: flex;
justify-content: center;
padding: 5px;

`

const InputComentarioShare = styled.input`
    width: 100%;
    margin-right: 5px;

`





export class SecaoCompartilhamento extends Component{





render(){
    return <ShareContainer>
         <InputComentarioShare
             placeholder={'Comentário'}
             
             />
        
        
        </ShareContainer>



}



}