import { Box } from '@chakra-ui/react'

import About from './About'
import Home from './Home'
import News from './News'
import Sewing from './Sewing'
import AccordionComponent from './Accardion'

const MainHome = () => {
	return (
		<Box>
			<Home />
			<AccordionComponent />
			<About />
			<News />
			<Sewing />
		</Box>
	)
}

export default MainHome
