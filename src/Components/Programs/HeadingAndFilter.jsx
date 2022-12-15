import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";

export default function HeadingAndFilter({ pageName }) {
  return (
    <>
      {/* heading  */}
      <Box py="3" px="10">
        <Heading fontWeight="normal">{pageName}</Heading>
      </Box>

      {/* filter and search  */}
      <hr />
      <Flex alignItems="center" px="10">
        <Box
          display="flex"
          alignItems="center"
          p="3"
          columnGap="2"
          borderLeft="1px solid gainsboro"
          borderRight="1px solid gainsboro"
        >
          <AiOutlineFilter size="22px" />
          <Text>FILTERS</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          p="3"
          columnGap="2"
          borderLeft="1px solid gainsboro"
          borderRight="1px solid gainsboro"
        >
          <AiOutlineSearch size="22px" />
          <Text>SEARCH</Text>
        </Box>
      </Flex>
      <hr />
    </>
  );
}
