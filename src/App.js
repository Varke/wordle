import styled from "styled-components";
import { Key } from "./components/Key";
import { Keyboard } from "./components/Keyboard";
import { Letter } from "./components/Letter";
import { Word } from "./components/Word";
import { Words } from "./components/Words";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
function App() {
  
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordInList, setCurrentWordInList] = useState(0);
  const [wordsCache, setWordsCache] = useState([]);
  const [mainWord, setMainWord] = useState("");

  useEffect( () => {
    if( mainWord.length == 0 )
      axios("https://random-word-api.herokuapp.com/word?number=1&length=5").then((res) => setMainWord(res.data));
  }, [])
  
	useEffect(() => {
    

		const onKeydown = (e) => {
			if (e.code == "Enter" && currentWord.length == 5) {
				setCurrentWordInList(currentWordInList + 1);
        wordsCache.push(currentWord);
        setWordsCache(wordsCache);
        setCurrentWord("");
			}
			if (e.keyCode >= 65 && e.keyCode <= 90 && currentWord.length < 5)
        setCurrentWord(currentWord.concat(e.key));
			if (e.keyCode == 8 && currentWord.length > 0)
      setCurrentWord(currentWord.substring(0, currentWord.length - 1));
		};

		document.addEventListener("keydown", onKeydown);

		return () => {
			document.removeEventListener("keydown", onKeydown);
		};
	}, [currentWord, currentWordInList]);

	return (
		<Content>
			<H1>{mainWord}</H1>
			<Words wordsCache={wordsCache} currentWord={currentWord} currentWordInList={currentWordInList} mainWord={mainWord[0]}/>
			<Keyboard />
		</Content>
	);
}

const H1 = styled.h1`
	color: #837fd2;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	align-items: center;
`;

export default App;
