import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <HamburgerIcon/>
          </Link>

            <Link href='/'>
                Home
            </Link>
            <Link href='/about'>
                About
            </Link>
            <Link href='/experience'>
                Experience
            </Link>
            <Link href='/projects'>
                Projects
            </Link>
            <Link href='/music'>
                Music
            </Link>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default Header;