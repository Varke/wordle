import styled, {css} from "styled-components";
import { Letter } from "./Letter";
export const Word = ({ word, mainWord, needColor }) => {
	
	if( !word)
	word = "     ";
	if( !mainWord)
	mainWord = "     "

	// var colors = [0,0,0,0,0];
	// for(let i = 0; i < word.length; i++)
	//  {
	// 	if(mainWord.includes(word[i]))
	// 		colors[i] = 1;
	// 	if(mainWord[i] === word[i])
	// 		colors[i] = 2;
	// };
	const CalculateColor = (i) => {
		if( mainWord[i] == word[i])
			return css`#06A789`;
		if( mainWord.includes(word[i]) )
			return css`#F9AA00`;
		return css`#837FD2`;

	}
	return (
		<WordStyled>
			<Letter letter={word[0] ? word[0] : ""} color={CalculateColor(0)} needColor={needColor}></Letter>
			<Letter letter={word[1] ? word[1] : ""} color={CalculateColor(1)} needColor={needColor}></Letter>
			<Letter letter={word[2] ? word[2] : ""} color={CalculateColor(2)} needColor={needColor}></Letter>
			<Letter letter={word[3] ? word[3] : ""} color={CalculateColor(3)} needColor={needColor}></Letter>
			<Letter letter={word[4] ? word[4] : ""} color={CalculateColor(4)} needColor={needColor}></Letter>
		</WordStyled>
	);
};

const WordStyled = styled.div`
	display: flex;
	gap: ${props => props.needColor ? css`20px` : css`5px`};
`;
