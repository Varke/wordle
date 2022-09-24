import styled from "styled-components";
import { Letter } from "./Letter";
export const Word = ({ word }) => {
	if( !word)
	word = "               ";
	return (
		<WordStyled>
			<Letter letter={word[0] ? word[0] : ""}></Letter>
			<Letter letter={word[1] ? word[1] : ""}></Letter>
			<Letter letter={word[2] ? word[2] : ""}></Letter>
			<Letter letter={word[3] ? word[3] : ""}></Letter>
			<Letter letter={word[4] ? word[4] : ""}></Letter>
		</WordStyled>
	);
};

const WordStyled = styled.div`
	display: flex;
	gap: 5px;
`;
