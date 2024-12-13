import {
	Divider,
	Flex,
	Modal,
	ModalContent,
	ModalOverlay,
	Spinner
} from '@chakra-ui/react'

import ModalButton from '../buttons/ModalButton'
import Title from '../texts/Title'

interface ModalComponentProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: () => void
	title: string
	isLoading?: boolean
	withoutOverlay?: boolean
}

const ModalComponent = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	isLoading,
	withoutOverlay
}: ModalComponentProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='sm'
			isCentered={true}
			autoFocus={false}
			closeOnOverlayClick={!withoutOverlay}
			blockScrollOnMount={!withoutOverlay}
		>
			{!withoutOverlay && <ModalOverlay />}
			<ModalContent
				px='5'
				py='30px'
				rounded='20px'
				zIndex='0'
			>
				<Flex
					flexDirection='column'
					alignItems='center'
				>
					<Title
						color='#101010'
						mb='10px'
					>
						{title}
					</Title>
					{isLoading && <Spinner />}
				</Flex>

				<Flex
					gap='50px'
					mt='5'
					justifyContent='center'
				>
					<ModalButton onClick={onClose}>Нет</ModalButton>
					<Divider
						orientation='vertical'
						bg='#0E121E'
						opacity='.1'
						w='1px'
						h='100%'
					/>
					<ModalButton
						onClick={onSubmit}
						isDisabled={isLoading}
						color='#3046BF'
					>
						Да
					</ModalButton>
				</Flex>
			</ModalContent>
		</Modal>
	)
}

export default ModalComponent
