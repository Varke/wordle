import styled from "styled-components";
import { Word } from "./Word";
import { Letter } from "./Letter";
export const Words = (props) => {
	return (
		<WordsStyled>
			<Word>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
			</Word>
			<Word>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
			</Word>
			<Word>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
			</Word>
			<Word>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
			</Word>
			<Word>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
			</Word>
			<Word>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
				<Letter letter="a"></Letter>
			</Word>
		</WordsStyled>
	);
};

const WordsStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
