import { Box } from '@chakra-ui/react';
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";


const Captcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }

  return (
     <Box>
         <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
     </Box>
  )
}
export default Captcha;