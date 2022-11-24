import { Text } from '@chakra-ui/react';
import type { TextProps } from '@chakra-ui/react';

const ItemText: React.FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight='bold'
      textColor='#653B21'
      textShadow='0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff'
      {...props}
    />
  );
};

export default ItemText;
