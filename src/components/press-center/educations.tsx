'use client'

import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import Link, { useRouter } from 'next/navigation'
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import DefButton from '../ui/buttons/DefButton'
import Description from '../ui/texts/Description'
import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

const EducationComponent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const data = [
		{
			video: 'https://www.youtube.com/embed/FipR5n9hj6I',
			title: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...'
		},
		{
			video: 'https://www.youtube.com/embed/FipR5n9hj6I',
			title: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...'
		},
		{
			video: 'https://www.youtube.com/embed/FipR5n9hj6I',
			title: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...'
		},
		{
			video: 'https://www.youtube.com/embed/FipR5n9hj6I',
			title: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...'
		},
		{
			video: 'https://www.youtube.com/embed/FipR5n9hj6I',
			title: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...'
		},
		{
			video: 'https://www.youtube.com/embed/FipR5n9hj6I',
			title: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...'
		}
	]

	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 28 }}>Обучение</TitleComponent>

			<Flex
				mt={8}
				flexWrap='wrap'
				gap={6}
			>
				{data.map((el, index) => (
					<Flex key={index}
						flexDir='column'
						textAlign='start'
						w={{ md: '334px', base: '100%' }}
						h='100%'
					>
						<Box
							w={{ md: '334px', base: '100%' }}
							h='226px'
							overflow='hidden'
							borderRadius={14}
							position='relative'
						>
							<iframe
								width='100%'
								height='100%'
								src={`${el.video}?showinfo=0&rel=0&modestbranding=1&controls=1`}
								title={el.title}
							></iframe>

							<Box display={{ md: 'flex', base: 'none' }}
							
								justifyContent='center'
								alignItems='center'
								w={{ md: '334px', base: '100%' }}
								h='226px'
								// bg="red"
								top={0}
								left={0}
								position='absolute'
								borderRadius={14}
							>
								<DefButton
									onClick={onOpen}
									display='flex'
									w='80px'
									h='80px'
									fontSize='35px'
									borderRadius={50}
									color='white'
									bg='#E3484F'
								>
									<FaPlay />
								</DefButton>
							</Box>
						</Box>
						<Title
							lineHeight='19px'
							mt={4}
							textAlign='start'
							fontSize={16}
						>
							{el.title}
						</Title>
					</Flex>
				))}
			</Flex>

			<Modal
  isOpen={isOpen}
  onClose={onClose}
  size="xl" // This increases the modal size
>
  <ModalOverlay />

  {data.map((el, index) => (
    <ModalContent maxWidth={{ md: '700px', base: '100%' }} minHeight="500px"> {/* Adjust the size of the content */}
      <ModalHeader w="80%">{el.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box
          w="100%"  
          h="380px"  
          overflow="hidden"
          borderRadius={14}
        >
          <Box
							as="iframe"
							src={el.video}
							width="100%"
							height="500px"
							allow="autoplay; encrypted-media"
							borderRadius="10px"
							border="none"
						/>
        </Box>
      </ModalBody>
    </ModalContent>
  ))}
</Modal>

		</Box>
	)
}

export default EducationComponent
