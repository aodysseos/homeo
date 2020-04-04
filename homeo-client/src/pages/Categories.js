import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'

const Container = styled.div``

const Wrapper = styled.div`
	padding: 2rem 0;
	margin: 0 8rem;
`
const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> a {
		margin-top: 2rem;
		flex: 0 1 calc(32% - 1em);
	}
`

const Categories = () => {
	return (
		<Container>
			<Header isTransparent />
			<Wrapper>
				<CardsWrapper>
					<CategoryCard
						link={'categories/fitness'}
						title={'Fitness'}
						image={`https://source.unsplash.com/800x600/?yoga`}
					/>
					<CategoryCard
						link={'categories/beauty'}
						title={'Beauty'}
						image={`https://source.unsplash.com/800x600/?beauty`}
					/>
					<CategoryCard
						link={'categories/mentalhealth'}
						title={'Mental health'}
						image={`https://source.unsplash.com/800x600/?mental`}
					/>
					<CategoryCard
						link={'categories/childrencorner'}
						title={'Children corner'}
						image={`https://source.unsplash.com/800x600/?children`}
					/>
				</CardsWrapper>
			</Wrapper>
		</Container>
	)
}

export default Categories
