import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import _get from 'lodash/get'
import { Typography } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Card = styled(Link)`
	height: 13rem;
	width: 33.3%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 9px;
	overflow: hidden;
	> h3 {
		z-index: 2;
		color: ${({ theme }) => theme.secondary};
		font-weight: 700;
	}
	> span {
		width: 100%;
		position: absolute;
		> img {
			width: 100%;
			height: auto;
		}
		
		&:after {
			content: '';
			width: 100%;
			height: 100%;
			display: block;
			background-color: #000;
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			opacity: .2;
		}
	}
`

const ClassCard = ({ id, slug, name, image }) => {
	return (
		<Card to={`categories/${id}`}>
			<LazyLoadImage alt={name} effect="blur" src={_get(image, 'url')} />
			<Typography variant="h3" component="h3">
				{name}
			</Typography>
		</Card>
	)
}

export default ClassCard
