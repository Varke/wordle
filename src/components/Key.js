import styled from "styled-components";

export const Key = ({ value }) => {
	return <KeyStyled>{value.toUpperCase()}</KeyStyled>;
};

const KeyStyled = styled.button`
	width: 48px;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	user-select: none;
	background: #2d2b73;
	border-radius: 16px;
	color: white;
	font-weight: 400;
	font-size: 20px;
    border: none;
`;
