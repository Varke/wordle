import styled from "styled-components";
import { Key } from "./Key";

export const Keyboard = () => {
	return (
		<Block>
			<Line>
				<Key value="q" />
				<Key value="w" />
				<Key value="e" />
				<Key value="r" />
				<Key value="t" />
				<Key value="y" />
				<Key value="u" />
				<Key value="i" />
				<Key value="o" />
				<Key value="p" />
			</Line>
			<Line>
				<Key value="a" />
				<Key value="s" />
				<Key value="d" />
				<Key value="f" />
				<Key value="g" />
				<Key value="h" />
				<Key value="j" />
				<Key value="k" />
				<Key value="l" />
			</Line>
			<Line>
				<Key value="z" />
				<Key value="x" />
				<Key value="c" />
				<Key value="v" />
				<Key value="b" />
				<Key value="n" />
				<Key value="m" />
			</Line>
		</Block>
	);
};

const Block = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const Line = styled.div`
	width: 100%;
	display: flex;
	gap: 5px;
	justify-content: center;
`;
