import { Box, Heading } from "@chakra-ui/react";

export default function PageHeading({ pageName }) {
  return (
    <>
      {/* heading  */}
      <Box py="3" px="10">
        <Heading fontWeight="normal">{pageName}</Heading>
      </Box>
    </>
  );
}
