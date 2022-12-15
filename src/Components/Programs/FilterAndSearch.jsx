import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";

export default function FilterAndSearch() {
  return (
    <>
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
