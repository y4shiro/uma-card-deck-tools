import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';
import React from 'react';

const CardFilter: React.FC = () => {
  return (
    <HStack w='100%' my={4} p={4} bgColor='white' borderRadius='16px'>
      <CheckboxGroup>
        <HStack bgColor='red.100'>
          <Checkbox>スピード</Checkbox>
          <Checkbox>パワー</Checkbox>
          <Checkbox>スタミナ</Checkbox>
          <Checkbox>根性</Checkbox>
          <Checkbox>賢さ</Checkbox>
          <Checkbox>友人</Checkbox>
          <Checkbox>グループ</Checkbox>
        </HStack>
      </CheckboxGroup>

      <CheckboxGroup>
        <HStack bgColor='blue.100'>
          <Checkbox>SSR</Checkbox>
          <Checkbox>SR</Checkbox>
          <Checkbox>R</Checkbox>
        </HStack>
      </CheckboxGroup>
    </HStack>
  );
};

export default CardFilter;
