import { Box } from '@chakra-ui/react'

import HowWork from '../for-implementer/How-work'
import SearchProduct from '../for-implementer/Search-product'
import Sewings from '../for-implementer/Sewings'
import News from '../main/News'

const ForClient = () => {
	return (
		<Box>
			<SearchProduct />
			<HowWork />
			<Sewings />
			<News />
		</Box>
	)
}

export default ForClient
