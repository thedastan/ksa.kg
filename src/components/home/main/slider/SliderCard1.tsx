import { Box } from '@chakra-ui/react';
import img from '@/assets/img/kgmap.png';
import Image from 'next/image';

const SliderCard1 = () => {
  return (
    <Box w="100%">
        <Image src={img} alt="" />
    </Box>
  );
};

export default SliderCard1;