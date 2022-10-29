export const addTime = props => {
    return{
        type: 'domain/addTime', // Type: Nome a ser chamado para que essa Action seja executada.
        payload: props // Payload: Trazer dados inseridos pelo usuário.
    }
}

export const resetTable = props => {
    return{
        type: 'domain/resetTable',
        payload: props,
    }
}
