import { HStack, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import type { FilterKeysType } from '../filterSlice';
import { selectFilter, filterKeys, toggleFilter } from '../filterSlice';

const CardFilter: React.FC = () => {
  const filterState = useSelector(selectFilter);

  return (
    <HStack w='100%' my={4} p={4} bgColor='white' borderRadius='16px'>
      <HStack gap={{ base: 0, sm: 2, md: 4 }}>
        {filterKeys.map((key) => (
          <CustomCheckbox key={key} filterKey={key} filterValue={filterState[key]} />
        ))}
      </HStack>
    </HStack>
  );
};

const CustomCheckbox: React.FC<{ filterKey: FilterKeysType; filterValue: boolean }> = ({
  filterKey,
  filterValue,
}) => {
  const dispatch = useDispatch();

  const onClickHandler = (targetKey: FilterKeysType) => {
    dispatch(toggleFilter(targetKey));
  };

  return (
    <IconButton
      colorScheme='whiteAlpha'
      size={{ base: '16', sm: '32' }}
      filter={!filterValue ? 'grayscale(100%)' : ''}
      onClick={() => onClickHandler(filterKey)}
      aria-label='Filter Button'
      icon={
        <Image
          height={40}
          width={40}
          src={`uma-support-card/icons/${filterKey}.png`}
          alt={`サポートカードの "${filterKey}" アイコン`}
        />
      }
    />
  );
};

export default CardFilter;
