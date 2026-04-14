type CellProps = {
    value?: string;
    color?: 'white' | 'yellow' | 'green' | 'gray' ;
}

export default function Cell({value = '', color = 'white'}: CellProps) {
    return (
        <td className={`cell ${color}`}>{value}</td>
    )
}