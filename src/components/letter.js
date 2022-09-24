import styled from "styled-components";

export const Letter = ({letter}) => {
	return <LetterStyled>{letter.toUpperCase()}</LetterStyled>;
};

const LetterStyled = styled.div`
	display: flex;
	align-items: center;
    justify-content: center;
	width: 64px;
	height: 64px;
	text-align: center;
	user-select: none;
	background: #2d2b73;
	border-radius: 16px;
    color: white;
    font-weight: 500;
    font-size: 24px;
`;
