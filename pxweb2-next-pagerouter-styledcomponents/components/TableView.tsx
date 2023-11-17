import { Column, MyDataType } from "./DataView";

export const TableView = ({ data }: { data?: MyDataType }) => (
    <table>
        <thead>
            <tr>
                {data?.columns?.map((column: Column) => <th key={column.code}>{column.text}</th>)}
            </tr>
        </thead>
        <tbody>
            {data?.data?.map((row, index) => <tr key={index}>
                {row.key.map((keyItem, index) => <td key={index}>{keyItem}</td>)}
                {row.values.map((keyItem, index) => <td key={index}>{keyItem}</td>)}
            </tr>)}
        </tbody>
    </table>
)