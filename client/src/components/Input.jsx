import React from 'react'
import styled from 'styled-components'




export default function Input(props) {
    const InputTag = styled.input`
        padding: 3% 3%;
        margin: 3% 0%;

        max-width: 292px;
        max-height: 60px;
    `

    return (
    <InputTag
        type='text'
        placeholder={props.placeholder}
        onChange={props.func}
    />

  )
}
