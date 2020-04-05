import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.section`
	width: 100%;
	min-height: 100vh;
	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: top;
	color: ${({ theme }) => theme.primary};
	background-color: ${({ theme }) => theme.secondary};
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h1 {
		font-weight: 700;
		margin-bottom: 1rem;
	}
`

const Title = styled(Typography)`
  max-width: 850px;
`

const SubTitle = styled(Typography)`
	max-width: 650px;
`


const ButtonsContainer = styled.ul`
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 3rem;
	> li {
		width: 20%;
		display: flex;
	}
	> li a {
		width: 100%;
		color: ${({ theme }) => theme.primary};
	}
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary};
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: .8rem;
  padding: 1.5rem 3rem;
`
const Logo = styled(Link)`
	font-size: 2rem;
	font-weight: 600;
	text-transform: uppercase;
	color: ${({ theme, isTransparent }) => (isTransparent ? theme.primary : theme.secondary)};
	> img { width: 200px; }
`

const OurSupporters = () =>  {
	return (
		<Container>
			<Wrapper>
				<Title variant="h2" component="h1">
					Our Supporters
				</Title>
				<SubTitle variant="h5" component="h2">
					
				<ButtonsContainer>
					<li>
						<StyledLink to="https://www.humancapitalpro.com/">Human Capital Professional Education Ltd</StyledLink>
					</li>
					<li>
						<StyledLink to="https://www.facebook.com/TBSYR/">The Ballet School Yiolanda Roupina</StyledLink>
					</li>
					<li>
						<StyledLink to="https://www.facebook.com/MPote.Beauty.Studio/">Mpote Beauty Studio</StyledLink>
					</li>
				</ButtonsContainer>
				</SubTitle>
			</Wrapper>
		</Container>
	)
}

export default OurSupporters
