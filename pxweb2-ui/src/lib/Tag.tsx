import styled from 'styled-components';

type TagProps = {
    children: React.ReactNode,
    roundedStyle: "light" | "heavy"
}

export const Tag = styled.span<TagProps>`
    padding: 4px 10px 4px 10px;
    font-size: 16px;
    line-height: 20px;
    color: #162327;
    background-color: #EBEBEB;
    border-radius: ${props => props.roundedStyle === "light" ? "4px" : "20px"};
`