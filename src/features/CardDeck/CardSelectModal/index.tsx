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
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Card from '../Card';
import type { CardType } from '@/types/cards';
import { supabase } from '@/utils/supabaseClient';

type Props = { cards: CardType[] };

const CardSelectModal: React.FC<Props> = ({ cards }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Modal size='3xl' isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent h='640px' borderRadius='12'>
        <ModalHeader color='white' bgColor='#89c53d' borderTopRadius='12'>
          サポートカード選択
        </ModalHeader>
        {/* <ModalCloseButton textAlign='center' /> */}
        <ModalBody>
          <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
            {cards &&
              cards
                .filter((card) => card.card_type === 'Guts')
                .map((card, index) => <Card card={card} key={index} />)}
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
