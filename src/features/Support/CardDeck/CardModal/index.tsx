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

import { removeCard } from '../cardDeckSlice';
import { closeModal, selectModal } from '../modalSlice';

import CardFilter from './CardFilter';
import SelectableCard from './SelectableCard';
import { selectFilter, filterKeys } from './filterSlice';
import { filterdCardLists } from './outputFilterdCardLists';

import { RootState } from '@/app/store';
import { useGetCardsQuery } from '@/services/card';

import { SlotId } from '@/types/cardSlot';
import { ImgSize } from '@/types/cards';

type Props = {
  imgSize: ImgSize;
};

const CardModal: React.FC<Props> = ({ imgSize }) => {
  const { data, error, isLoading } = useGetCardsQuery();
  const { isOpen, openSlotId } = useSelector(selectModal);
  const filterState = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterLists = filterKeys.filter((key) => filterState[key] === true);
  const cards = filterdCardLists(data!, filterLists);

  const selectedCards = useSelector((state: RootState) => state.cardDeck)
    .map((card) => card.cardId)
    .filter((cardId) => cardId !== null);

  const belongCharaIds = new Set(
    cards
      ?.filter((card) => selectedCards.includes(card.card_id)) // デッキ編成済みカードのデータのみを filter で取得
      .flatMap((card) => card.belong_charactor_ids) // カードに所属する charactor_id のリストを作成
      .sort(),
  );

  const onCloseHandler = () => {
    dispatch(closeModal());
  };

  const removeHandler = (slotId: SlotId) => {
    dispatch(removeCard({ slotId }));
    dispatch(closeModal());
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
            サポートカード選択
          </Text>
        </ModalHeader>
        <ModalBody bgColor='#eee' w='full' minH='360px' textAlign='center'>
          <CardFilter />
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
              {cards.map((card, index) => (
                <GridItem key={index}>
                  <SelectableCard
                    card={card}
                    selectedCards={selectedCards}
                    belongCharaIds={belongCharaIds}
                    imgSize={imgSize}
                  />
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
            onClick={() => removeHandler(openSlotId!)}
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
