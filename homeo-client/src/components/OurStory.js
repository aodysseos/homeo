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
	max-width: 900px;
	margin-bottom: 1.8rem;
	color: ${({ theme }) => theme.dark};
	h2 {
		font-weight: 700;
		margin-top: 0;
		margin-bottom: .8rem;
	}
	h3 {
		font-weight: 700;
		margin-top: 4rem;
		margin-bottom: 1.5rem;
	}
	p {
		margin-bottom: 1.2rem;
	}
	ul {
		margin-top: -0.8rem;
		margin-bottom: 1.2rem;
		max-width: 450px;
	}
	ul li {
		font-weight: 600;
		line-height: 1.1rem;
		margin-bottom: 0.5rem;
		color: ${({ theme }) => theme.dark};
	}

	a {
		color: ${({ theme }) => theme.primary};
	}
`

const Title = styled(Typography)`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.dark};	
`

const OurStory = () => {
	return (
		<Container>
			<Wrapper>
				<Title variant="h2" component="h2">
					Our Story
				</Title>
				<Typography variant="body1" component="p">
					More and more people everyday are working from home. The workplace is no longer the office space. The
					situation we are facing today with COVID-19 suggests that this is possible and potentially, inevitable. But
					staying home doesn't mean we have to drop all of our good habits. We still need to workout, entertain
					ourselves, educate our children and maybe ask for help every now and then. But most importantly, we need to do
					all those things with people.
				</Typography>
				<Typography variant="body1" component="p">
					Homeo's purpose is to become the platform that people can come together and enjoy living at home. We hope that
					people will use the platform to book livestreaming classes. We want to ensure only high quality classes are
					delivered, thus, we want to collaborate with professional instructors that will teach yoga, pilates and other
					home workouts. Medical professionals that can hold Q&amp;A sessions to debug the myths around COVID-19.
					Professional nail artists that will provide tips on how to look your bestself whist at home. Storytellers that
					can entertain our children and many many more.
				</Typography>
				<Title variant="h4" component="h3">
					How it works
				</Title>
				<Typography variant="body1" component="p">
					Easy! Just select one of our main categories and browse through a list of available classes. Ready for some
					yoga? Just book your session and we will send you an email half-hour before your class with a link to a "Zoom"
					meeting. Have your matt ready, your instructor and the rest of the class will join you!
				</Typography>
				<Title variant="h4" component="h3">
					How far we got
				</Title>
				<Typography variant="body1" component="p">
					After 2 days of coding like maniacs, we have the following:
				</Typography>
				<ul>
					<li>Select a category of interest</li>
					🚀
					<li>Browse through a number of available classes</li>
					🚀
					<li>Click to book a class (that will pop a set Zoom conference that we've created)</li>
					🚀
					<li>A back-end infrastructure build using Strapi (Node.js, PostgreSQL) hosted in Heroku.</li>
				</ul>
				<Title variant="h4" component="h3">
					The future
				</Title>
				<Typography variant="body1" component="p">
					Rome was not build in a day, in fact, it was build in{' '}
					<a target="_blank" href="https://graylinerome.com/blog/rome-wasnt-built-day">
						1,010,450 days!
					</a>{' '}
					We are committed to do the following in less time than that.
				</Typography>
				<ul>
					<li>User accounts with booked clasess and reminders.</li>
					🚀
					<li>Ability to pay for classes.</li>
					🚀
					<li>Receive a Zoom link for joining the livestream session at the scheduled time</li>
					🚀
					<li>Rating system for the livestream sessions</li>
					🚀
					<li>Ability to follow live streamers and get notified when they schedule a new session</li>
					🚀
					<li>Ability to view a demo video before joining a session</li>
					🚀
					<li>Search for a category or an event</li>
					🚀
					<li>Professionals/Instructors dasboard to setup and manage their classes.</li>
					🚀
					<li>
						Credits system for both professionals - upon excellent performance on a session - as well as for users to
						keep them motivated for booking more classes
					</li>
					🚀
					<li>Show the currently running livestreams in a designated section</li>
				</ul>
				<Typography variant="body1" component="p">
					And so much more... <br />We care about creating a community based live-streaming platform that will keep
					people active, entertain and happy, from home! And whilst doing that, to help the tech savvy professionals to
					become content creators for our platform, win win! <br /> Now excuse us while we are out saving the world!
				</Typography>
			</Wrapper>
		</Container>
	)
}

export default OurStory
