import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import ClassCard from '../components/ClassCard'

const Container = styled.div``

const Wrapper = styled.div`
	padding: 2rem 0;
	margin: 0 8rem;
`
const CardsWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> div {
		margin-top: 2rem;
		flex: 0 1 calc(32% - 1em);
	}
`

const ClassesListing = () => {
	return (
		<Container>
			<Header isTransparent />
			<Wrapper>
				<CardsWrapper>
					<ClassCard title={'Yoga flow'} image={`https://source.unsplash.com/800x600/?yoga`} />
					<ClassCard title={'Pilates'} image={`https://source.unsplash.com/800x600/?pilates`} />
					<ClassCard title={'Yoga flow'} image={`https://source.unsplash.com/800x600/?yoga`} />
					<ClassCard title={'Yoga flow'} image={`https://source.unsplash.com/800x600/?yoga`} />
					<ClassCard title={'Yoga flow'} image={`https://source.unsplash.com/800x600/?yoga`} />
					<ClassCard title={'Yoga flow'} image={`https://source.unsplash.com/800x600/?yoga`} />
					<ClassCard title={'Yoga flow'} image={`https://source.unsplash.com/800x600/?yoga`} />
				</CardsWrapper>
			</Wrapper>
		</Container>
	)
}

export default ClassesListing
