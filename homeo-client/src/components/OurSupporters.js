import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: top;
	color: ${({ theme }) => theme.secondary};
	background-color: ${({ theme }) => theme.primary};
`

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px 0;
	> h1 {
		font-weight: 700;
		margin-bottom: 1rem;
	}
`

const Title = styled(Typography)`
  max-width: 850px;
`

const SupportersWrapper = styled.ul`
	max-width: 900px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 3rem;
	> li {
		width: 33.3%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> li a {
		max-width: 200px;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.secondary};
		padding: 1rem .8rem;
		display: flex;
		align-items: center;
	}

	> li img {
		width: 150px;
	}
`
const ImageWrapper = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const OurSupporters = () => {
	return (
		<Container>
			<Wrapper>
				<Title variant="h2" component="h1">
					Our Supporters
				</Title>
				<SupportersWrapper>
					<li>
						<ImageWrapper>
							<img src={`${process.env.PUBLIC_URL}/${'HCPro.jpg'}`} alt="Human Capital Professional Education Ltd" />
						</ImageWrapper>

						<a href="https://www.humancapitalpro.com/" target="_blank">
							Human Capital Professional Education Ltd
						</a>
					</li>
					<li>
						<ImageWrapper>
							<img src={`${process.env.PUBLIC_URL}/${'TBSYR.jpg'}`} alt="The Ballet School Yiolanda Roupina" />
						</ImageWrapper>
						<a href="https://www.facebook.com/TBSYR/" target="_blank">
							The Ballet School Yiolanda Roupina
						</a>
					</li>
					<li>
						<ImageWrapper>
							<img src={`${process.env.PUBLIC_URL}/${'mpote.jpg'}`} alt="Mpote Beauty Studio" />
						</ImageWrapper>
						<a href="https://www.facebook.com/MPote.Beauty.Studio/" target="_blank">
							Mpote Beauty Studio
						</a>
					</li>
				</SupportersWrapper>
			</Wrapper>
		</Container>
	)
}

export default OurSupporters
