import { Box, Flex } from "@chakra-ui/react";
import CardComponent from "../../Components/Programs/CardComponent";
import FilterAndSearch from "../../Components/Programs/FilterAndSearch";
import PageHeading from "../../Components/Programs/PageHeading";
import ResultAndSortOptions from "../../Components/Programs/ResultAndSortOptions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWorkoutPrograms } from "../../Redux/Programs/programs.action";

export default function WorkoutProgramsPage() {
  const workoutProgramData = useSelector(
    (store) => store.programs.workoutProgramData
  );
  const dispatch = useDispatch();

  const optionsArray = [
    "Newest First",
    "Title",
    "Price",
    "Longest",
    "Shortest",
    "Longest Workouts",
    "Shortest Workouts",
  ];

  useEffect(() => {
    dispatch(getWorkoutPrograms());
  }, []);

  return (
    <div>
      {/* heading,filter,search  */}
      <PageHeading pageName="Workout Programs" />
      {/* filter,search   */}
      <FilterAndSearch />

      {/* content  */}
      <Box bg="#F0F4F6">
        {/* result and sort */}
        {workoutProgramData.length !== 0 && (
          <ResultAndSortOptions
            result={workoutProgramData.length}
            options={optionsArray}
          />
        )}
        {/* workout programs  */}
        <Flex px="2" pb="2" flexWrap="wrap" gap="1" justifyContent="start">
          {/* <CardComponent /> */}
          {workoutProgramData.map((program) => (
            <CardComponent
              key={program._id}
              image={program.image}
              week={program.week}
              time={program.time}
              desc={program.desc}
              price={program.price}
              contentshref={program.contentshref}
              exclusiveitem={program.exclusiveitem}
            />
          ))}
        </Flex>
      </Box>
    </div>
  );
}
