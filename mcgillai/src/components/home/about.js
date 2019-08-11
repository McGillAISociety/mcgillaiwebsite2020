import React from 'react'
import styled from '@emotion/styled'

import { PrimaryFont, SecondaryFont, SectionTextContent } from '../commonstyles'
import Lightbulb from './assets/Lightbulb.svg'
import People from './assets/People.svg'
import Network from './assets/Network.svg'

const Container = styled('div')`
	${SecondaryFont};
	font-size: 48px;
	text-align: center;
`;

const Column = styled('div')`
	${SecondaryFont};
	font-size: 32px;
	float: left;
	width: 33.33%;
	box-sizing: border-box;
    padding: 0 50px 0 50px;

	@media screen and (max-width: 600px) {
    	width: 100%;
	}
	> p {
		margin: 0px;
   		padding: 0px;
	}
`;

const Icon = styled('img')`
	padding: 20px;
`;

class About extends React.Component {
	render() {
		return (
			<Container>
				About Us <br/>
				<Column>
					<Icon src={Lightbulb} />
					<p>Learn</p>
					<SectionTextContent>
						We aim to make AI more accessible by hosting events, bootcamps, workshops, and producing blog articles that cover computer vision, NLP, and anything in between.
					</SectionTextContent>
				</Column>
				<Column>
					<Icon src={People} />
					<p>Foster Community</p>
					<SectionTextContent>
						We want to make learning AI fun. Want to talk to a prof, but too scared to speak up in class? Come to our research talks, surround yourself with like minded people at revision sessions and fun community building events. 
					</SectionTextContent>
				</Column>
				<Column>
					<Icon src={Network} />
					<p>Exposure</p>
					<SectionTextContent>
						We aim to make AI more accessible by holding biweekly workshops and research talks that cover anything from computer vision, NLP, and anything in between. We also hold MAIS 202 - an ML fundamentals bootcamp - once per semester.
					</SectionTextContent>
				</Column>
			</Container>
		);
	}
}

export default About