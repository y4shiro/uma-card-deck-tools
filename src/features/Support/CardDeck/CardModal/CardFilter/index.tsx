import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import type { FilterKeysType } from '../filterSlice';
import { selectFilter, filterKeys, toggleFilter } from '../filterSlice';

const CardFilter: React.FC = () => {
  const filterState = useSelector(selectFilter);

  return (
    <HStack w='100%' my={4} p={4} bgColor='white' borderRadius='16px'>
      <CheckboxGroup>
        <HStack bgColor='red.100'>
          {filterKeys.map((key) => (
            <CustomCheckbox key={key} filterKey={key} filterValue={filterState[key]} />
          ))}
        </HStack>
      </CheckboxGroup>
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
    <Checkbox isChecked={filterValue} onChange={() => onClickHandler(filterKey)}>
      {filterKey}
    </Checkbox>
  );
};

export default CardFilter;
