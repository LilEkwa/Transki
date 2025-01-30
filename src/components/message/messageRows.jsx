/* eslint-disable react/prop-types */
export function MessageRows({message}){
    const style = message.sender ? {font : 'bold'} : undefined
    return <tr>
        <td style={style}>{message.sender}</td>
        <td>{message.Object}</td>
        <td>{message.date}</td>
        <td>{message.hours}</td>
    </tr>
}