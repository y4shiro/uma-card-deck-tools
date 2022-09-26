import {
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Card from '../Card';
import type { CardType } from '@/types/cards';

type Props = { cards?: CardType[] };

const CardSelectModal: React.FC<Props> = ({ cards }) => {
  const sampleImages = [
    'trading_card01_blue.png',
    'trading_card02_red.png',
    'trading_card03_yellow.png',
    'trading_card04_green.png',
    'trading_card05_orange.png',
    'trading_card06_purple.png',
    'trading_card07_back_blue.png',
    'trading_card08_back_red.png',
    'trading_card09_back_yellow.png',
    'trading_card10_back_green.png',
    'trading_card11_back_orange.png',
    'trading_card12_back_purple.png',
  ];
  const imgArray = [...sampleImages, ...sampleImages, ...sampleImages];
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Modal
      size={{ base: 'md', sm: 'xl', md: '3xl', lg: '4xl', xl: '6xl' }}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior='inside'
    >
      <ModalOverlay />
      <ModalContent borderRadius='12'>
        <ModalHeader bgColor='#89c53d' borderTopRadius='12' textAlign='center'>
          <Text color='white'>サポートカード選択</Text>
        </ModalHeader>
        <ModalCloseButton textAlign='center' />
        <ModalBody>
          <Grid
            gap={{ base: '1', sm: '2' }}
            templateColumns={{ base: 'repeat(5, 1fr)', sm: 'repeat(6, 1fr)', xl: 'repeat(7, 1fr)' }}
          >
            {imgArray.map((name, index) => (
              <Image
                key={index}
                // layout='fill'
                width='160px'
                height='240px'
                src={`card-sample/${name}`}
                alt='sample'
              ></Image>
            ))}
          </Grid>
        </ModalBody>

        <ModalFooter justifyContent='center' bgColor='#ddd' borderBottomRadius='12'>
          <Button w='160px' colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button w='160px' onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardSelectModal;
