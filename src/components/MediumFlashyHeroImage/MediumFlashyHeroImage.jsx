import styled from "styled-components"
import tableImage from "../../../public/product/flashy-table-speaker.png"
import SeeProductBtn from "../buttons/SeeProduct"
console.log(tableImage)

const MediumFlashyContainer = styled.section`
	color: ${(props) => props.theme.colors.blacker};

	margin: 0 auto;
	margin-top: 4rem;
	background-image: url(${tableImage.src});
	background-position: right;
	background-size: cover;
	width: 1300px;
	height: 320px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	gap: 150px;
	align-items: center;

	& .textContainer {
		width: 400px;
		display: flex;
		flex-flow: column nowrap;
		gap: 1rem;
		align-items: flex-start;
		margin-left: 40px;

		& p {
			word-break: break-word;
		}
	}
`

function MediumFlashyHeroImage({ text }) {
	return (
		<MediumFlashyContainer>
			<div className="textContainer">
				<h1 className="productHeadlineMedium">{text.headline}</h1>
				<SeeProductBtn transparent>SEE PRODUCT</SeeProductBtn>
			</div>
		</MediumFlashyContainer>
	)
}

export default MediumFlashyHeroImage
