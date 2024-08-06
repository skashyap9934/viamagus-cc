/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";

import {
  Box,
  Table,
  Tbody,
  Tr,
  Thead,
  Th,
  TableContainer,
  Heading,
  Text,
  FormLabel,
  Input,
  Button,
  Td,
  Image,
} from "@chakra-ui/react";

import loadingGIF from "../assets/loading.gif";

import "../styles/cart.css";
import Product from "./Product";

import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts } from "../redux/actions/fetch.cart.products";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const [discount, setDiscount] = React.useState(0);
  const [hide, setHide] = React.useState(false);
  const [updatePage, setUpdatePage] = React.useState(0);

  const update = () => setUpdatePage((prev) => prev + 1);

  React.useEffect(() => {
    let intervalId = setTimeout(() => {
      dispatch(fetchCartProducts);
    }, 300);

    return () => clearInterval(intervalId);
  }, [updatePage]);

  if (cart.loading)
    return (
      <Box className="cart-pre-load">
        <Heading
          mb={"1rem"}
          color={"red"}
          fontFamily={"Poppins"}
          fontSize={"25px"}
          as="h2"
        >
          Please wait while we get the data
        </Heading>
        <Image w={"101px"} src={loadingGIF} alt="loading" />
      </Box>
    );

  return (
    <>
      <Heading
        fontFamily={"Poppins"}
        fontSize={"27px"}
        textAlign={"center"}
        as={"h3"}
        mt={"1rem"}
        mb={"1rem"}
      >
        All the products of the cart:
      </Heading>

      <Box className="cart">
        <TableContainer>
          <Table className="table" variant="none">
            <Thead>
              <Tr>
                <Th isNumeric>No.</Th>
                <Th>Name</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.data.map((product) => (
                <Product
                  key={product.id}
                  {...product}
                  total={cart.total}
                  update={update}
                  hide={hide}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Box className="details" minWidth={"30%"}>
          <Text fontWeight={"bold"} borderBottom={"1px solid black"} mb={3}>
            Summary:
          </Text>
          <FormLabel>Apply Discount</FormLabel>
          <Box className="discount" hidden={hide}>
            <Input
              onChange={(event) => setDiscount(Number(event.target.value))}
              placeholder="Discount Amount in INR"
              type="number"
            />
            <Button
              isDisabled={
                Number(discount) >= cart.total || Number(discount) < 0
              }
              colorScheme="red"
              onClick={() => setHide(true)}
            >
              Apply
            </Button>
          </Box>
          <Text color={"red"}>
            {discount < 0 || discount > cart.total
              ? "Invalid discount amount"
              : null}
          </Text>

          <Box className="discount">
            <TableContainer w={"100%"}>
              <Table variant="none">
                <Tbody>
                  <Tr>
                    <Td fontWeight={"bold"}>Subtotal</Td>
                    <Td textAlign={"right"} fontWeight={"bold"}>
                      ₹ {cart.total}
                    </Td>
                  </Tr>

                  <Tr borderBlockEnd={"1px solid black"}>
                    <Td fontWeight={"bold"}>Discount</Td>
                    <Td textAlign={"right"} fontWeight={"bold"}>
                      ₹ {discount}
                    </Td>
                  </Tr>

                  <Tr borderBlockEnd={"1px solid black"}>
                    <Td fontWeight={"bold"}>Total Pay</Td>
                    <Td textAlign={"right"} fontWeight={"bold"}>
                      ₹{" "}
                      {discount <= 0
                        ? cart.total
                        : discount <= cart.total
                        ? cart.total - discount
                        : cart.total}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
