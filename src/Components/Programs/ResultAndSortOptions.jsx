import { Box, Flex, Select } from "@chakra-ui/react";

export default function ResultAndSortOptions({ options, result }) {
  const optionsArray = options;

  return (
    <>
      {/* results and sort options  */}
      <Flex px="10" py="2" alignItems="center" columnGap="5">
        <Box>{result} Results</Box>
        <Box>
          <Select bg="transparent" border="none" fontWeight="bold">
            {optionsArray.map((sortOption, index) => (
              <option value="" key={index}>
                {sortOption}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
    </>
  );
}
