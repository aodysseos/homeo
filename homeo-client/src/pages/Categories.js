import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import _get from 'lodash/get'
import _map from 'lodash/map'

import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'

import { Typography } from '@material-ui/core'

const Container = styled.div``

const Wrapper = styled.div`
	padding: 2rem 0;
	margin: 0 8rem;
`
const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	> a {
		margin-top: 2rem;
		flex: 0 1 calc(32% - 1em);
	}
`

const Title = styled(Typography)`
	text-align: left;
	color: ${({ theme }) => theme.primary};
`

const Categories = () => {
	const [ categories, setCategories ] = React.useState([])

	React.useEffect(() => {
		const fetchcategories = async () => {
			await fetch(`${process.env.REACT_APP_API_URL}/categories`, {
				methods: 'GET',
				header: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((results) => {
					setCategories(results)
				})
		}
		fetchcategories()
	}, [])

	return (
		<Container>
			<Header isTransparent />
			<Wrapper>
				<Title variant="h4" component="h2">
					Explore HOMEO
				</Title>
				<CardsWrapper>
					{_map(categories, (category) => <CategoryCard key={_get(category, 'id')} {...category} />)}
				</CardsWrapper>
			</Wrapper>
		</Container>
	)
}

export default Categories
