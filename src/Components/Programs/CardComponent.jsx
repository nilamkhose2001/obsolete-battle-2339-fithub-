import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

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
  id,
  image,
  week,
  time,
  desc,
  subtitle,
  price,
  isClicked,
  programObj,
}) {
  const [isSmallerThan380] = useMediaQuery("(max-width: 380px)");

  return (
    <Box
      w={!isSmallerThan380 ? "300px" : "100%"}
      bg="white"
      border="3px solid #F0F4F6"
      _hover={{ border: "3px solid #4296CB" }}
    >
      <Link to={`/workoutprogram/${id}`}>
        <Image src={image} width="100%" maxH="168px" />
        <Box margin="auto" w="90%" pt="5" pb="8" minHeight="150px">
          <Text color="#4A9ACD" mb="1" fontSize="11px">
            {week} - {time}
          </Text>
          <Text fontWeight="bold" fontSize="15px">
            {desc}
          </Text>
          {subtitle ? <Text>{subtitle}</Text> : null}
        </Box>
      </Link>
      <Flex py="3" px="2" justifyContent="space-between">
        <Box>
          <Text>As Low As</Text>
          <Text fontWeight="semibold">{price}</Text>
        </Box>
        <Box>
          <Button
            bg="#4296CB"
            color="white"
            height="100%"
            onClick={() => isClicked(programObj)}
          >
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
