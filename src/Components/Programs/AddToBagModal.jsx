import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function AddToBagModal({
  openModal,
  setModalStatus,
  programData,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (openModal) {
      onOpen();
      setModalStatus(false);
    }
  });

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0.5rem">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton color="white" fontSize="md"/>
          <ModalBody p="0" mb="5">
            <Image
              src={programData.image}
              w="100%"
              alt="img"
              borderTopRadius="0.5rem"
            />
            <Box px="5" pt="2">
              <Text p="0" m="0" fontSize="25px" fontWeight="semibold">
                FB <span style={{ color: "#4296CB" }}>Plus</span>{" "}
                <Button size="xs" color="white" bg="#3CDBB8">
                  PASS
                </Button>
              </Text>
              <Box mt="2" mb="5" lineHeight="6" fontSize="sm">
                <Text>15 days of FB Plus Access </Text>
                <Text>Your selected program </Text>
                <Text>All other FB Plus programs </Text>
                <Text> All the additional content and features of FB Plus</Text>
              </Box>
              <Button
                bg="#4296CB"
                color="white"
                w="100%"
                size="sm"
                onClick={onClose}
              >
                <Text fontSize="xs">BUY PASS</Text>
              </Button>
              <br />
              <Text align="center" fontWeight="semibold">
                {programData.price}
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
