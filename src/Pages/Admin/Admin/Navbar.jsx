import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="gray.300" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex> <Image w="10%" src="https://pbs.twimg.com/profile_images/1491039844881125377/cSmikWrT_400x400.jpg" />  <Button ml="10" mt="2" colorScheme="teal" >Go to HomePage</Button></Flex>
         

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
             

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://lh3.googleusercontent.com/a/AEdFTp4-Wx2-dbRzYqAaqPwMJUns1MeWeUdlVPQY-qI=s360-p-rw-no'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://lh3.googleusercontent.com/a/AEdFTp4-Wx2-dbRzYqAaqPwMJUns1MeWeUdlVPQY-qI=s360-p-rw-no'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>admin</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}