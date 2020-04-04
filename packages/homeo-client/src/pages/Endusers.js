import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import ClassCard from '../components/ClassCard'

const Container = styled.div``

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem 0;
	margin: 0 8rem;
`

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const EndusersPage = () => {
	return (
		<Container>
			<Header isTransparent />
			<Wrapper>
				<CardsWrapper>
					<ClassCard />
					<ClassCard />
					<ClassCard />
					<ClassCard />
					<ClassCard />
					<ClassCard />
					<ClassCard />
					<ClassCard />
				</CardsWrapper>
			</Wrapper>
		</Container>
	)
}

export default EndusersPage
