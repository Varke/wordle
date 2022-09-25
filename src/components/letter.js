import styled, { css } from "styled-components";

export const Letter = ({ letter, color, needColor }) => {
	return <LetterStyled color={needColor ? color : css`#2d2b73`}>{letter ? letter.toUpperCase() : ""}</LetterStyled>;
};

const LetterStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	text-align: center;
	user-select: none;
	background: ${(props) => props.color};
	border-radius: 16px;
	color: white;
	font-weight: 500;
	font-size: 24px;
`; // #06A789
