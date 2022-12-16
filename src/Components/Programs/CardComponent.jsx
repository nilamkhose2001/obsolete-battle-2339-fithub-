import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";

// const initState = {
//     _id: "",
//     contentshref: "",
//     exclusiveitem: "",
//     image: "",
//     week: "",
//     time: "",
//     desc: "",
//     price: "",
//     category: "",
//   };
export default function CardComponent({
  contentshref,
  exclusiveitem,
  image,
  week,
  time,
  desc,
  price,
}) {
  const [isSmallerThan700] = useMediaQuery("(max-width: 380px)");

  return (
    <Box
      w={!isSmallerThan700 ? "300px" : "100%"}
      bg="white"
      border="3px solid #F0F4F6"
      _hover={{ border: "3px solid #4296CB" }}
    >
      <a href={contentshref}>
        <Image src={image} width="100%" maxH="168px" />
        <Box margin="auto" w="90%" pt="5" pb="8">
          <Text color="#4A9ACD" mb="1" fontSize="11px">
            {week} - {time}
          </Text>
          <Text fontWeight="bold" fontSize="15px">
            {desc}
          </Text>
        </Box>
      </a>
      <Flex py="3" px="2" justifyContent="space-between">
        <Box>
          <Text>As Low As</Text>
          <Text fontWeight="semibold">{price}</Text>
        </Box>
        <Box>
          <Button bg="#4296CB" color="white" height="100%">
            <span style={{ width: "25px", height: "30px" }}>
              <BiShoppingBag size="100%" />
            </span>
            &nbsp; ADD TO BAG
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}