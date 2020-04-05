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

const OurStory = () =>  {
	return (
		<Container>
			<Wrapper>
				<Title variant="h2" component="h1">
					Our Story
				</Title>
				<SubTitle variant="h5" component="h2">
					What is homeo (mporei na mpei to logo dame anti to "homeo")
					Homeo is a platform that allows people to find virtual classes and join them from the comfort of their home. COVID-19 has changed the way we live and forced us to adapt to this new reality. People need to be healthy and happy while staying safe at home. Professionals need to keep their business running. Homeo will facilitate the means to bringing people and professionals together under one platform. Personal trainers, mental health professionals, hairdressers, storytellers and other professionals will be able to schedule virtual livestream classes at a day and time of their choice. People can use Homeo to browse a list of classes of the following categories (list of categories) and join them. A virtual meeting room will be created using the “Zoom” livestreaming service, and users can join the session by tapping the link that they will receive half-hour prior to the class’s start time. 


					So far...

					For the purposes of the two day hackathon we have tried to present our idea in a presentation(link) as well as in a video (link) and have an initial set up of the project. So far we’ve set up our database, our API and have managed to do several features on the website. What are the available features for the users? Keep on reading: 
						<li>Scroll through list to find and select categories of interest</li>
						<li>See classes for a given category</li>
						<li>Book your spot at any session of your choice</li>
						<li>Receive a Zoom link for joining the livestream session at the scheduled time</li>
						<li>UI-wise we’ve added features we’d love to have in the future</li>


						We have a lot in store for the future and we are more than happy to share our plans with you. Firstly, our MVP is not completed just yet.. So we’d love to get there first by implementing the following:
						<li>Rating system for the livestream sessions</li>
						<li>Registration/Login system for both professionals </li>
						<li>Ability to follow live streamers and get notified when they schedule a new session</li>
						<li>Ability to view a demo video before joining a session</li>
						<li>Search for a category or an event</li>
						<li>Credits system for both professionals - upon excellent performance on a session - as well as for users to keep them motivated for booking more classes</li>
						<li>Show the currently running livestreams in a designated section</li>

						And so much more…
						We care about creating a community based live-streaming application that will enable people at home to stay active and have fun, whilst also helping the not so tech savvy professionals to become content creators for our platform, easily do livestream sessions and reach to a greater audience.

				</SubTitle>

				<SubTitle variant="h5" component="h2">
					The future
				</SubTitle>
			</Wrapper>
		</Container>
	)
}

export default OurStory
