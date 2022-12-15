import { Box, Flex, Text } from "@chakra-ui/react";
import CardComponent from "../../Components/Programs/CardComponent";
import PageHeading from "../../Components/Programs/PageHeading";
import ResultAndSortOptions from "../../Components/Programs/ResultAndSortOptions";

export default function PilotProgramsPage() {
  const result = "5";
  const optionsArray = ["Newest First", "Title", "Price"];
  return (
    <div>
      {/* heading*/}
      <PageHeading pageName="Pilot Programs" />
      <Box py="3" px="10" pb="10">
        <Text>Pilot programs include new and beta programs.</Text>
      </Box>

      {/* content  */}
      <Box bg="#F0F4F6">
        {/* result and sort */}
        <ResultAndSortOptions result={result} options={optionsArray} />
        {/* workout programs  */}
        <Flex px="2" pb="2" flexWrap="wrap" gap="1" justifyContent="start">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Flex>
      </Box>
    </div>
  );
}
