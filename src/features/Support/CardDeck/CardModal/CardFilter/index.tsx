import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';
import { Dispatch, useReducer } from 'react';

const filterKeys = [
  'Speed',
  'Stamina',
  'Power',
  'Guts',
  'Wisdom',
  'Friends',
  'Group',
  'SSR',
  'SR',
  'R',
] as const;
type FilterKey = typeof filterKeys[number];
type FilterState = {
  [K in FilterKey]: boolean;
};

type Actions = { type: 'toggleState'; payload: { targetName: FilterKey } };

const reducer = (state: FilterState, action: Actions) => {
  switch (action.type) {
    case 'toggleState':
      const targetName = action.payload.targetName;
      const newState = { [targetName]: !state[targetName] };
      return { ...state, ...newState };
    default:
      return state;
  }
};
const initState: FilterState = {
  Speed: false,
  Stamina: false,
  Power: false,
  Guts: false,
  Wisdom: false,
  Friends: false,
  Group: false,
  SSR: false,
  SR: false,
  R: false,
};

const CardFilter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);

  return (
    <HStack w='100%' my={4} p={4} bgColor='white' borderRadius='16px'>
      <CheckboxGroup>
        <HStack bgColor='red.100'>
          {filterKeys.map((key) => (
            <CustomCheckbox type={key} dispatch={dispatch} key={key} />
          ))}
        </HStack>
      </CheckboxGroup>
    </HStack>
  );
};

const CustomCheckbox: React.FC<{ type: FilterKey; dispatch: Dispatch<Actions> }> = ({
  type,
  dispatch,
}) => {
  const onClickHandler = () => {
    dispatch({ type: 'toggleState', payload: { targetName: type } });
  };
  return <Checkbox onChange={() => onClickHandler()}>{type}</Checkbox>;
};

export default CardFilter;
