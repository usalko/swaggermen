import { Box, Flex, Icon } from '@swaggermen/mosaic';
import React from 'react';

export const UpgradeToStarter = () => (
  <Flex
    as="a"
    href="https://swaggermen.io/pricing/"
    target="_blank"
    rel="noreferrer noopener"
    justify="center"
    alignItems="center"
    w="full"
    minH="screen"
    color="muted"
    flexDirection="col"
  >
    <Icon icon={['fas', 'exclamation-triangle']} size="4x" />
    <Box pt={3}>
      Please upgrade your Swaggermen Workspace to the Starter Plan to use Swaggermen Dev Portal in production.
    </Box>
  </Flex>
);
