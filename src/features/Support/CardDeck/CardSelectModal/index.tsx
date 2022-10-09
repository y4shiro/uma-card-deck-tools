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
  Spinner,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Dispatch, useEffect, useState, SetStateAction } from 'react';

import type { SlotIdType } from '..';
import Card from '@/components/Card';
import SelectableCard from '@/features/Support/CardDeck/CardSelectModal/SelectableCard';
import type { CardType } from '@/types/cards';

type Props = {
  cards?: CardType[];
  isOpen: boolean;
  onClose: () => void;
  openSlotId: SlotIdType | null;
  setOpenSlotId: Dispatch<SetStateAction<SlotIdType | null>>;
};

const CardSelectModal: React.FC<Props> = ({
  cards,
  isOpen,
  onClose,
  openSlotId,
  setOpenSlotId,
}) => {
  const imgSize = useBreakpointValue(
    {
      base: { card: { width: 120, height: 160 }, type: 16 },
      md: { card: { width: 180, height: 240 }, type: 28 },
      lg: { card: { width: 180, height: 240 }, type: 40 },
    },
    'base',
  );

  return (
    <Modal
      size={{ base: 'md', sm: 'xl', md: '3xl', lg: '4xl', xl: '6xl' }}
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => setOpenSlotId(null)}
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
            サポートカード選択: slotId:{openSlotId}
          </Text>
        </ModalHeader>
        <ModalBody bgColor='#eee' w='full' minH='360px' textAlign='center'>
          {cards ? (
            <Grid
              gap={{ base: '1', sm: '2' }}
              templateColumns={{
                base: 'repeat(5, 1fr)',
                sm: 'repeat(6, 1fr)',
                xl: 'repeat(7, 1fr)',
              }}
              justifyContent='center'
            >
              {cards &&
                cards
                  .filter((card) => card.card_type === 'Guts')
                  .map((card, index) => (
                    <GridItem key={index}>
                      <SelectableCard card={card} imgSize={imgSize} />
                    </GridItem>
                  ))}
            </Grid>
          ) : (
            <Spinner
              mt={'16px'}
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.300'
              color='blue.500'
              size='xl'
            />
          )}
        </ModalBody>

        <ModalFooter justifyContent='center' borderBottomRadius='12'>
          <Button
            size='lg'
            w={{ base: '120px', sm: '200px' }}
            colorScheme='red'
            borderRadius='8'
            shadow='0px 4px 4px rgba(0,0,0,0.3)'
            mr={6}
          >
            選択解除
          </Button>
          <Button
            size='lg'
            w={{ base: '120px', sm: '200px' }}
            variant='ghost'
            border='2px solid #bbb'
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