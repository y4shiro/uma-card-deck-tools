import {
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Card from '../Card';
import type { CardType } from '@/types/cards';

type Props = { cards?: CardType[]; isOpen: boolean; onClose: () => void };

const CardSelectModal: React.FC<Props> = ({ cards, isOpen, onClose }) => {
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
          <Text
            color='white'
            fontSize={{ base: '1.25rem', sm: '1.5rem', lg: '1.75rem' }}
            fontWeight='bold'
          >
            サポートカード選択
          </Text>
        </ModalHeader>
        <ModalBody bgColor='#eee'>
          <Grid
            gap={{ base: '1', sm: '2' }}
            templateColumns={{ base: 'repeat(5, 1fr)', sm: 'repeat(6, 1fr)', xl: 'repeat(7, 1fr)' }}
            justifyContent='center'
          >
            {cards &&
              cards.map((card, index) => (
                <GridItem key={index}>
                  <Card card={card} key={index} />
                </GridItem>
              ))}
          </Grid>
        </ModalBody>

        <ModalFooter justifyContent='center' borderBottomRadius='12'>
          <Button
            size='lg'
            w={{ base: '160px', sm: '200px' }}
            colorScheme='red'
            borderRadius='8'
            shadow='0px 4px 4px rgba(0,0,0,0.3)'
            mr={6}
          >
            選択解除
          </Button>
          <Button
            size='lg'
            w={{ base: '160px', sm: '200px' }}
            variant='ghost'
            border='2px solid #666'
            borderRadius='8'
            shadow='0px 4px 4px rgba(0,0,0,0.3)'
            onClick={onClose}
          >
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardSelectModal;
