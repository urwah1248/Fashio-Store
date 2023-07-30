import React from "react";
import Link from "next/link";
import { Button, useToast } from "@chakra-ui/react";
import Comma from "@/utils/Comma";
import { useAppDispatch } from "@/store";
import { RemoveFromCartAction } from "@/store/actions/ProductActions";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

interface Props {
  product?: any;
  className?: String;
  cart?: Boolean;
}

const CartItem = ({ product, className, cart, ...props }: Props) => {
  return (
    <div className="w-full text-start">
      <Card
        shadow="none"
        direction={"row"}
        border="none"
        rounded="none"
        className="gap-4 p-2"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "110px", sm: "120" }}
          maxH={{ base: "110px", sm: "120px" }}
          src={product.image}
          alt={product.name}
        />

        <Stack className="w-full">
          <CardBody width="full" overflow="hidden" className="p-0">
            <Link
              className="underline text-gray-700 hover:text-black"
              href={`/shop/product/${product._id}`}
            >
              <h4 className="leading-tight w-full truncate text-base m-0">
                {product.name}
              </h4>
            </Link>
            <p className="uppercase">Quantity: {product.quantity}</p>
            <p className="uppercase">Size: {product.size}</p>
            <p className="mb-0">Rs.{product.price}</p>
            <ToastButton product={product} />
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

function ToastButton({ product, ...props }: Props) {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const removeFromCart = (item: any) => {
    dispatch(RemoveFromCartAction(item));
  };
  return (
    <button
      className="underline font-semibold cursor-pointer text-gray-600 hover:text-black"
      onClick={() => {
        toast({
          title: "Removed from Cart",
          position: "top-right",
          description: `${product.quantity}x ${product.name} has been removed from your cart.`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        removeFromCart(product);
      }}
    >
      Remove
    </button>
  );
}

export default CartItem;
