/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../redux/actions/update";

const Product = ({ id, name, price, quantity, update }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Tr className="product">
        <Td isNumeric>{id}</Td>
        <Td>{name}</Td>
        <Td isNumeric>₹ {price}</Td>
        <Td isNumeric>
          <Button
            onClick={() => {
              update();
              dispatch(changeQuantity(id, -1));
            }}
            colorScheme="green"
            isDisabled={quantity < 2}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            onClick={() => {
              dispatch(changeQuantity(id, 1));
              update();
            }}
            colorScheme="green"
          >
            +
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default Product;
