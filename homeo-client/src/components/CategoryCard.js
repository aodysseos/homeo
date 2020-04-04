import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, Typography } from '@material-ui/core'

import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative'
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	}
}))

const CardStyledMedia = styled(CardMedia)`
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
`

const CardTitle = styled.div`
	color: ${({ theme }) => theme.secondary};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 0 .5rem;
	z-index: 2;
	> h3 {
		font-weight: 700;
	}
`

const ClassCard = ({ link, title, date, image, short_description, long_description }) => {
	const classes = useStyles()
	return (
		<Link to={link}>
			<Card className={classes.root}>
				<CardStyledMedia className={classes.media} image={image} title={title} />
				<CardTitle>
					<Typography variant="h3" component="h3">
						{title}
					</Typography>
				</CardTitle>
			</Card>
		</Link>
	)
}

export default ClassCard
