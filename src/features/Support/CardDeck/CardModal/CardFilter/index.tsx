import { RepeatIcon } from '@chakra-ui/icons';
import { HStack, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import type { FilterKeysType } from '../filterSlice';
import { selectFilter, filterKeys, toggleFilter, resetFilter } from '../filterSlice';

const CardFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);

  const resetHandler = () => {
    console.log('reset button');
    dispatch(resetFilter());
  };

  return (
    <HStack position='sticky' top={0} zIndex='sticky' py={{ base: 2, sm: 4 }} bgColor='#eee'>
      <HStack
        w='100%'
        py={{ base: 2, sm: 4 }}
        px={{ base: 2, sm: 6 }}
        gap={{ base: 0, sm: 2, md: 4 }}
        borderRadius={{ base: 8, sm: 16 }}
        bgColor='white'
      >
        {filterKeys.map((key) => (
          <CustomCheckbox key={key} filterKey={key} filterValue={filterState[key]} />
        ))}
        <IconButton
          variant='solid'
          colorScheme='red'
          boxSize={{ base: '6', sm: '8', md: '10' }}
          fontSize={{ base: '16', sm: '20', md: '24' }}
          onClick={resetHandler}
          icon={<RepeatIcon />}
          aria-label={'Filter Clear Icon'}
        />
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
      _focus={{ boxShadow: 'none' }}
      aria-label='Filter Button'
      icon={
        <Image
          height={40}
          width={40}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcXg8AAbMBGIpVIK8AAAAASUVORK5CYII='
          src={`uma-support-card/icons/${filterKey}.png`}
          alt={`サポートカードの "${filterKey}" アイコン`}
        />
      }
    />
  );
};

export default CardFilter;
