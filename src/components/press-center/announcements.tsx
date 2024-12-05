import React from 'react';

import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '@/config/_variables.config';
import Image from 'next/image';
import Description from '../ui/texts/Description';
import Link from 'next/link';

import img1 from '@/assets/img/fon1.png'
import img2 from '@/assets/img/image 832.png'
import img3 from '@/assets/img/project-img4.png'
import img4 from '@/assets/img/project-img1.png'
import TitleComponent from '../ui/texts/TitleComponent';




const AnnouncementsComponent = () => {


const data = [
	{
		url: img1,
		desc: 'Закон Кыргызской Республики №YY "О государственной поддержке малого и среднего предпринимательства"',
		date: 'Авг 22 , 2022'
	},

	{
		url: img2,
		desc: 'В ТПП РФ состоялось общее годовое собрание членов СОЮЗЛЕГПРОМа',
		date: 'Авг 22 , 2022'
	},

	{
		url: img3,
		desc: 'Закон Кыргызской Республики №YY "О государственной поддержке малого и среднего предпринимательства"',
		date: 'Авг 22 , 2022'
	},
  {
		url: img4,
		desc: 'Закон Кыргызской Республики №YY "О государственной поддержке малого и среднего предпринимательства"',
		date: 'Авг 22 , 2022'
	}
]

  return (
    <Flex>
       <Container maxW={CONTAINER_WIDTH}>
        <Flex gap={4} flexDirection="column">
          <TitleComponent  fontSize={{ md: 34, base: 26 }}>Объявления</TitleComponent>
        {data.map((el, index) => (
							<Flex
								key={index}
								w="100%"
								h={{ md: 200, base: '100%' }}
								bg='#F7F7F7'
								justifyContent='space-between'
								flexDirection={{ md: 'row', base: 'column' }}
								alignItems='center'
								borderRadius={10}
								p={4}
								gap={4}
							>
								<Box
									w={{ md: '330px', base: '100%' }}
									h={180}
									borderRadius={10}
									overflow='hidden'
								>
									<Image
										style={{
											objectFit: 'cover',
											width: '100%',
											height: '100%'
										}}
										src={el.url}
										alt='img'
									/>
								</Box>
								<Flex
									w={{ md: 320, base: '100%' }}
									h='100%'
									flexDirection='column'
									justifyContent='space-between'
								>
									<Description
										fontSize={16}
										lineHeight='22px'
										fontWeight={500}
										pt={{ md: '0', base: '10px' }}
										pb={{ md: '0', base: '20px' }}
									>
										{el.desc}
									</Description>

									<Flex
										justifyContent='space-between'
										alignItems='center'
										borderTop='1.2px solid #c2c2c2'
										mt={{ md: 0, base: '50px' }}
										pt={2}
									>
										<Text
											color='#a5a5a5'
											fontSize={12}
											fontWeight={400}
										>
											{el.date}
										</Text>
										<Link
											style={{
												color: '#3046BF',
												fontSize: '14px',
												fontWeight: '400'
											}}
											href='/'
										>
											Подробнее &gt;
										</Link>
									</Flex>
								</Flex>
							</Flex>
						))}
        </Flex>
       </Container>
    </Flex>
  );
};

export default AnnouncementsComponent;