import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.section`
	width: 100%;
	min-height: 100vh;
	margin-top: -100px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.secondary};
	background-color: ${({ theme }) => theme.primary};
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
  max-width: 700px;
`

const SubTitle = styled(Typography)`
  max-width: 900px;
`

const ButtonsContainer = styled.ul`
	width: 650px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 3rem;
	> li a {
		color: ${({ theme }) => theme.secondary};
	}
`

const StyledLink = styled(Link)`
  width: 200px;
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary};
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: .8rem;
  padding: 1.5rem 3rem;
`

const Hero = () => {
	return (
		<Container>
			<Wrapper>
				<Title variant="h2" component="h1">
					Streaming classes from the comfort of your home
				</Title>
				<SubTitle variant="h5" component="h2">
					Looking for a Yoga teacher? A hair stylist? Or someone to help you feel better? Explore classes and book a
					livestreaming that'll get you feeling like your best self.
				</SubTitle>
				<ButtonsContainer>
					<li>
						<StyledLink to="/instructors">Teach a class</StyledLink>
					</li>
					<li>
						<StyledLink to="/classes">Find a class</StyledLink>
					</li>
				</ButtonsContainer>
			</Wrapper>
		</Container>
	)
}

export default Hero