import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToBagModal from "../../Components/Programs/AddToBagModal";
import CardComponent from "../../Components/Programs/CardComponent";
import PageHeading from "../../Components/Programs/PageHeading";
import ResultAndSortOptions from "../../Components/Programs/ResultAndSortOptions";
import { getPilotPrograms } from "../../Redux/Programs/programs.action";

export default function PilotProgramsPage() {
  const [openModal, setModalStatus] = useState(false);
  const [programData, setData] = useState({});

  const clicked = (program) => {
    setData(program);
    setModalStatus(true);
    console.log(program);
  };

  const pilotProgramData = useSelector(
    (store) => store.programs.pilotProgramData
  );
  const dispatch = useDispatch();

  const optionsArray = ["Newest First", "Title", "Price"];

  useEffect(() => {
    dispatch(getPilotPrograms());
  }, []);

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
        {pilotProgramData.length !== 0 && (
          <ResultAndSortOptions
            result={pilotProgramData.length}
            options={optionsArray}
          />
        )}
        {/* workout programs  */}
        <Flex px="2" pb="2" flexWrap="wrap" gap="1" justifyContent="start">
          {pilotProgramData.map((program) => (
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
  );
}
