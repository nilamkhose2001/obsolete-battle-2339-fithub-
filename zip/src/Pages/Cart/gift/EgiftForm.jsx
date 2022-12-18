import { Checkbox, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

const EgiftForm = () => {
  return (
    <>
      <form>
        <Stack>
          <Input
            placeholder="Recipient Email Address"
            size="sm"
            type="email"
            required
          />
          <Textarea required placeholder="Add a Massage" />
          <Checkbox colorScheme="blue" >Make this gift anonymous.</Checkbox>
        </Stack>
      </form>
    </>
  );
};

export default EgiftForm;
