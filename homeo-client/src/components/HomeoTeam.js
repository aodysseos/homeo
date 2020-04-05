import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.section`
	width: 100%;
	margin-top: 100px;
	margin-bottom: 100px;
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
`

const Title = styled(Typography)`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.dark};	
`
const Logo = styled(Link)`
	font-size: 2rem;
	font-weight: 600;
	text-transform: uppercase;
	> img { width: 200px; }
`

const TeamContainer = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 2rem;
	> li {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: .8rem;
	}
	> li a {
		color: ${({ theme }) => theme.dark};
	}

	> li img {
		width: 250px;
	}
`

const Member = styled.li`display: flex;`

const StyledLink = styled.a`
	font-size: 2rem;
	color: ${({ theme }) => theme.secondary};
	border: 3px solid ${({ theme }) => theme.secondary};
	border-radius: .8rem;
	padding: 1.5rem 3rem;
`

const HomeoTeam = () => {
	return (
		<Container>
			<Wrapper>
				<Title variant="h2" component="h2">
					<Logo to="/">
						<img src={`${process.env.PUBLIC_URL}/${'logo_dark.png'}`} alt="logo" />
					</Logo>
					<span>Team</span>
				</Title>
				<TeamContainer>
					<Member>
						<img src={`${process.env.PUBLIC_URL}/${'andrew.png'}`} alt="andrew" />
						<StyledLink href="mailto:aodysseos91@gmail.com">aodysseos91@gmail.com</StyledLink>
					</Member>
					<Member>
						<img src={`${process.env.PUBLIC_URL}/${'galatia.png'}`} alt="galatia" />
						<StyledLink href="mailto:galatia.partheniou@gmail.com">galatia.partheniou@gmail.com</StyledLink>
					</Member>
				</TeamContainer>
			</Wrapper>
		</Container>
	)
}

export default HomeoTeam
