import { Box, Flex } from "@chakra-ui/react";
import CardComponent from "../../Components/Programs/CardComponent";
import FilterAndSearch from "../../Components/Programs/FilterAndSearch";
import PageHeading from "../../Components/Programs/PageHeading";
import ResultAndSortOptions from "../../Components/Programs/ResultAndSortOptions";

export default function MealPlansPage() {
  const result = "4";
  const optionsArray = [
    "Newest First",
    "Title",
    "Price",
    "Longest Weeks",
    "Shortest Weeks",
    "Longest Recipe Time",
    "Shortest Recipe Time",
  ];
  return (
    <div>
      {/* heading*/}
      <PageHeading pageName="Meal Plans" />
      {/* filter,search   */}
      <FilterAndSearch />

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
