import styled from "styled-components";
import { Word } from "./Word";
import { Letter } from "./Letter";
import { useState } from "react";

export const Words = ({ wordsCache, currentWord, currentWordInList }) => {
	return (
		<WordsStyled>
			<Word word={currentWordInList == 0 ? currentWord : wordsCache[0]} />
			<Word word={currentWordInList == 1 ? currentWord : wordsCache[1]} />
			<Word word={currentWordInList == 2 ? currentWord : wordsCache[2]} />
			<Word word={currentWordInList == 3 ? currentWord : wordsCache[3]} />
			<Word word={currentWordInList == 4 ? currentWord : wordsCache[4]} />
			<Word word={currentWordInList == 5 ? currentWord : wordsCache[5]} />
		</WordsStyled>
	);
};

const WordsStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
