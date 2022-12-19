import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToBagModal from "../../Components/Programs/AddToBagModal";
import CardComponent from "../../Components/Programs/CardComponent";
import FilterAndSearch from "../../Components/Programs/FilterAndSearch";
import PageHeading from "../../Components/Programs/PageHeading";
import ResultAndSortOptions from "../../Components/Programs/ResultAndSortOptions";
import { getMealPlans } from "../../Redux/Programs/programs.action";
import Footer from "../../Components/Home/Footer";

export default function MealPlansPage() {
  const [openModal, setModalStatus] = useState(false);
  const [programData, setData] = useState({});

  const clicked = (program) => {
    setData(program);
    setModalStatus(true);
    console.log(program);
  };

  const mealPlansData = useSelector((store) => store.programs.mealPlansData);
  const dispatch = useDispatch();

  const optionsArray = [
    "Newest First",
    "Title",
    "Price",
    "Longest Weeks",
    "Shortest Weeks",
    "Longest Recipe Time",
    "Shortest Recipe Time",
  ];

  useEffect(() => {
    dispatch(getMealPlans());
  }, []);

  return (
    <>
      <div>
        {/* heading*/}
        <PageHeading pageName="Meal Plans" />
        {/* filter,search   */}
        <FilterAndSearch />

        {/* content  */}
        <Box bg="#F0F4F6">
          {/* result and sort */}
          {mealPlansData.length !== 0 && (
            <ResultAndSortOptions
              result={mealPlansData.length}
              options={optionsArray}
            />
          )}
          {/* workout programs  */}
          <Flex px="2" pb="2" flexWrap="wrap" gap="1" justifyContent="start">
            {mealPlansData.map((program) => (
              <CardComponent
                key={program._id}
                id={program._id}
                image={program.image}
                week={program.week}
                time={program.time}
                desc={program.title}
                subtitle={program.subtitle}
                price={program.price}
                contentshref={program[`contents href`]}
                exclusiveitem={program.exclusiveitem}
                isClicked={clicked}
                programObj={program}
              />
            ))}
          </Flex>
        </Box>
        {programData !== undefined ? (
          <AddToBagModal
            openModal={openModal}
            setModalStatus={setModalStatus}
            programData={programData}
          />
        ) : null}
      </div>
      <Footer />
    </>
  );
}
