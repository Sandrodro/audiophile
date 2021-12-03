import styled from "styled-components"
import Image from "next/image"
import audiophileIcon from "../../../public/audiophile.svg"
import cartIcon from "../../../public/cart.svg"

const StyledHeader = styled.header`
	font-size: 13px;
	color: ${(props) => props.theme.colors.whitest};
	background-color: ${(props) => props.theme.colors.black};

	& div {
		display: grid;
		grid-template-columns: 145px 1fr 32px;
		width: 1300px;
		margin: 0 auto;
		padding: 37px 0;
	}

	& ul {
		display: flex;
		margin: 0 330px auto;
		flex-flow: row wrap;
		list-style: none;
		gap: 1em;
		letter-spacing: 2px;
	}
`
function Header() {
	return (
		<StyledHeader>
			<div>
				<Image src={audiophileIcon} height={25} width={145} />
				<ul>
					<li>HOME</li>
					<li>HEADPHONES</li>
					<li>SPEAKERS</li>
					<li>EARPHONES</li>
				</ul>
				<Image src={cartIcon} height={28} width={32} />
			</div>
		</StyledHeader>
	)
}

export default Header
