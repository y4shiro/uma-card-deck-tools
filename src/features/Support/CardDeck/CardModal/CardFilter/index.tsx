import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';

const CardFilter: React.FC = () => {
  return (
    <HStack w='100%' my={4} p={4} bgColor='white' borderRadius='16px'>
      <CheckboxGroup>
        <HStack bgColor='red.100'>
          <CustomCheckbox label={'スピード'} />
          <CustomCheckbox label={'パワー'} />
          <CustomCheckbox label={'スタミナ'} />
          <CustomCheckbox label={'根性'} />
          <CustomCheckbox label={'賢さ'} />
          <CustomCheckbox label={'友人'} />
          <CustomCheckbox label={'グループ'} />
        </HStack>
      </CheckboxGroup>

      <CheckboxGroup>
        <HStack bgColor='blue.100'>
          <CustomCheckbox label={'SSR'} />
          <CustomCheckbox label={'SR'} />
          <CustomCheckbox label={'R'} />
        </HStack>
      </CheckboxGroup>
    </HStack>
  );
};

const CustomCheckbox: React.FC<{ label: string }> = ({ label: title }) => {
  return <Checkbox>{title}</Checkbox>;
};

export default CardFilter;
