// import { useState } from "react"

type MultiSelectType = {
    values: { label: string, code: string }[],
    selectedIds: string[],
    setSelectedIds: (ids: string[]) => void
}

export const MultiSelect = ({ values, selectedIds, setSelectedIds }: MultiSelectType) => {
    const toggleById = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    }

    const toggleAll = () => {
        if (selectedIds.length === values.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(values.map(value => value.code));
        }
    }

    const isChecked = (id: string) => {
        return selectedIds.includes(id);
    }

    return (
        <>
            <div><input id="all" onChange={() => toggleAll()} checked={selectedIds.length === values.length} type="checkbox"></input><label htmlFor="all">Välj alla</label></div>
            {
                values.map((value) => (
                    <div key={value.code}>
                        <input onChange={() => toggleById(value.code)} checked={isChecked(value.code)} id={`c_${value.code}`} type="checkbox"></input><label htmlFor={`c_${value.code}`}>{value.label}</label>
                    </div>
                ))
            }
        </>
    )
}