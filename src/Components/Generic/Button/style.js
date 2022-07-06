import styled from 'styled-components';


const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 48px;
    color: #FFFFFF;
    border-radius: 5px;
    user-select: none;
	width: ${({ width }) => (width ? width : 'auto')};
	height: ${({ height }) => height || '44px'};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
    border-radius: 2px solid red;
    background-color: #000000;
    color: white;
	:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

export { Container };