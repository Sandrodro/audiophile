import styled from "styled-components";

const SeeProductBtn = styled.button`
	background-color: ${(props) =>
    props.black ? props.theme.colors.blacker : props.theme.colors.brick};
	width: 160px;
	cursor: pointer;
	height: 48px;
	color: ${(props) => props.theme.colors.whiter};
	border: none;
	font-size: 13px;
	letter-spacing: 1px;
	font-weight: bold;
	${(props) => (props.transparent ? "border: 2px solid black" : null)}};
	${(props) => (props.transparent ? "background-color: transparent" : null)};
	${(props) =>
    props.transparent ? "color:" + props.theme.colors.blacker : null};
`;
export default SeeProductBtn;
