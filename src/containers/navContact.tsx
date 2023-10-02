import React from "react";
import { CircleButton } from "@/components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
export const NavigationContact = () => {
  return (
    <CircleButton $color={"#1C1E53"} href="#">
      <FontAwesomeIcon icon={faFacebookF} />
    </CircleButton>
  );
};
