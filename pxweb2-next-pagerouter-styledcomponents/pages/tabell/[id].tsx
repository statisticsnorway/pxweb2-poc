import { useRouter } from "next/router";
import { SuccesResponse, getTableMetaData } from "../../api/getTableMetadata";
import { useEffect, useState } from "react";
import { VariableSelector } from "@pxweb2-poc/pxweb2-ui";
import { components } from '../../api/schema';
import styled from "styled-components";
import { DataView } from "../../components/DataView";

type RegularVariable = components["schemas"]["RegularVariable"];

const VariableSelectorBox = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const TablePage = () => {
    const { query } = useRouter();
   
    const [metadata, setMetadata] = useState<SuccesResponse>()

    const [valueCodes, setValueCodes] = useState<{ [key: string]: string[]; }>({});

    const setValueCode = (variableCode: string, valueCode: string[]) => {
        setValueCodes({ ...valueCodes, [variableCode]: valueCode });
    }

    console.log(valueCodes);

    useEffect(() => {

        const loadMetaData = async () => {
            if (query.id) {
                const idAsString = Array.isArray(query.id) ? query.id[0] : query.id;
                const { data } = await getTableMetaData(idAsString)
                setMetadata(data as SuccesResponse);
            }
        }
        loadMetaData();
    }, [query.id])

    return <>
        {/* <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={() => setTheme('light')}>Light</button> */}
        <PageWrapper>
            <VariableSelectorBox>
                {/* TODO: Kolla type på variabel istället... */}
                {metadata?.variables.map(variable => {
                    const regularVariable = variable as unknown as RegularVariable;
                    return (
                        <VariableSelector
                            key={regularVariable.id}
                            code={regularVariable.id}
                            title={regularVariable.label}
                            required={!regularVariable.elimination}
                            values={
                                regularVariable.values.map(value => ({ label: value.label, code: value.code }))
                            }
                            onChange={setValueCode}
                        />

                    )
                })}
            </VariableSelectorBox>
            <div>
                <h1>{metadata?.label}</h1>
                <DataView valueCodes={valueCodes} id={query.id && Array.isArray(query.id) ? query.id[0] : query.id} />
            </div>
        </PageWrapper>
    </>
}
export default TablePage;