import { Box, Flex, Heading, Icon, IIconProps, Text } from '@stoplight/mosaic';
import * as React from 'react';

type NonIdealStateProps = {
  description?: React.ReactNode;
  icon?: IIconProps['icon'];
  title?: React.ReactNode;
};

export const NonIdealState: React.FC<NonIdealStateProps> = ({ description, icon, title }) => {
  return (
    <Flex flexDirection="col" alignItems="center" justifyContent="center" textAlign="center" w="full" h="full">
      <Box as={Icon} icon={icon || ['fas', 'exclamation-triangle']} color="light" fontSize="6xl" mb={4} />
      {/* @ts-expect-error */}
      <Heading size={4} mb={4}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Flex>
  );
};
