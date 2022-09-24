import styled from "styled-components";

export const Word = (props) => {
	return <WordStyled>{props.children}</WordStyled>;
};

const WordStyled = styled.div`
	display: flex;
	gap: 5px;
`;
