import styled from "styled-components";
import { Word } from "./Word";
import { Letter } from "./Letter";
import { useState } from "react";

export const Words = ({ wordsCache, currentWord, currentWordInList, mainWord }) => {

	const NeedColor = (i) => {
		return i < currentWordInList;
	}

	return (
		<WordsStyled>
			<Word word={currentWordInList == 0 ? currentWord : wordsCache[0]} mainWord={mainWord} needColor={NeedColor(0)}/>
			<Word word={currentWordInList == 1 ? currentWord : wordsCache[1]} mainWord={mainWord} needColor={NeedColor(1)}/>
			<Word word={currentWordInList == 2 ? currentWord : wordsCache[2]} mainWord={mainWord} needColor={NeedColor(2)}/>
			<Word word={currentWordInList == 3 ? currentWord : wordsCache[3]} mainWord={mainWord} needColor={NeedColor(3)}/>
			<Word word={currentWordInList == 4 ? currentWord : wordsCache[4]} mainWord={mainWord} needColor={NeedColor(4)}/>
			<Word word={currentWordInList == 5 ? currentWord : wordsCache[5]} mainWord={mainWord} needColor={NeedColor(5)}/>
		</WordsStyled>
	);
};

const WordsStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
