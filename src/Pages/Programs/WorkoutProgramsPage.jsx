import { Box, Flex } from "@chakra-ui/react";
import CardComponent from "../../Components/Programs/CardComponent";
import FilterAndSearch from "../../Components/Programs/FilterAndSearch";
import PageHeading from "../../Components/Programs/PageHeading";
import ResultAndSortOptions from "../../Components/Programs/ResultAndSortOptions";
export default function WorkoutProgramsPage() {
  const result = "62";
  const optionsArray = [
    "Newest First",
    "Title",
    "Price",
    "Longest",
    "Shortest",
    "Longest Workouts",
    "Shortest Workouts",
  ];
  return (
    <div>
      {/* heading,filter,search  */}
      <PageHeading pageName="Workout Programs" />
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
