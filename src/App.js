import styled from "styled-components";
import { Key } from "./components/Key";
import { Keyboard } from "./components/Keyboard";
import { Letter } from "./components/Letter";
import { Word } from "./components/Word";
import { Words } from "./components/Words";
import "./index.css";

function App() {
	return (
		<Content>
			<H1>Wordle</H1>
      <Words />
      <Keyboard />
		</Content>
	);
}

const H1 = styled.h1`
color: #837FD2;`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	align-items: center;
`;

export default App;
