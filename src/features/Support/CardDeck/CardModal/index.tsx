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
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import SelectableCard from '../CardSlot/SelectableCard';

import { removeCard } from '../cardDeckSlice';
import { closeModal, selectModal } from '../modalSlice';
import { useGetCardsQuery } from '@/services/card';
import { SlotId } from '@/types/cardSlot';

type Props = {
  imgSize: { card: { width: number; height: number }; type: number } | undefined;
};

const CardModal: React.FC<Props> = ({ imgSize }) => {
  const { data: cards, error, isLoading } = useGetCardsQuery();
  const { isOpen, slotId } = useSelector(selectModal);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(closeModal());
  };

  const removeHandler = (slotId: SlotId) => {
    dispatch(removeCard({ slotId }));
  };

  return (
    <Modal
      size={{ base: 'md', sm: 'xl', md: '3xl', lg: '4xl', xl: '6xl' }}
      isOpen={isOpen}
      onClose={onCloseHandler}
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
            サポートカード選択 SlotId:{slotId ?? 'null'}
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
              {cards
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
            onClick={() => removeHandler(slotId!)}
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
            onClick={onCloseHandler}
          >
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;
