import styled from "styled-components";
import { ChevronUp } from './icons/ChevronUp';
import { ChevronDown } from './icons/ChevronDown';

const StyledButton = styled.button`
width: 44px;
height: 44px;
border-radius: 100%;
border: 0;
background-color: white;
`

type ExpandButtonType = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    isExpanded: boolean
}

export const ExpandButton = ({ onClick, isExpanded }: ExpandButtonType) => {
    return (
        <StyledButton onClick={onClick}>{isExpanded ? <ChevronUp /> : <ChevronDown />}</StyledButton>
    )
}
