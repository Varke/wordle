import styled from "styled-components";

export const Letter = () => {
	return <LetterStyled>A</LetterStyled>;
};

const LetterStyled = styled.div`
	width: 64px;
	height: 64px;
	text-align: center;
	user-select: none;
	background: black;
	border-radius: 16px;
`;
