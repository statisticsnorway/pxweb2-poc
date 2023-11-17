import { paths } from './schema';

export type SuccessResponse = paths["/tables/{id}/data"]["get"]["responses"][200]["content"]["application/json"];
export type QueryType = paths["/tables/{id}/data"]["get"]["parameters"]["query"];

export const getData = async (id: string, valueCodes: { [key: string]: string[]; }) => {
    const valueCodeQueryStrings = Object.keys(valueCodes).map(key => `VALUECODES[${key}]=${valueCodes[key].join(",")}`);
    const response = await fetch(`https://pxapi2-master-cnmm.scb.se/api/v2/tables/${id}/data?outputFormat=json&${valueCodeQueryStrings.join("&")}`);
    const data = await response.json();
    return data as unknown as SuccessResponse;
}