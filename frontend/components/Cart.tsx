import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { subTotalPrice } from "@/utils/utils";
import Comma from "@/utils/Comma";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Cart = () => {
  const { cartItems } = useSelector((state: any) => {
    return state.AddAndRemoveToCartReducer;
  });

  const totalPrice = Comma(subTotalPrice(cartItems).toString());

  return (
    <div className="mx-2 text-center h-full relative">
      <div className="h-5/6 overflow-y-scroll cart-items items-center scrollbar-hide overflow-x-scroll w-full md:overflow-x-hidden flex-wrap whitespace-nowrap justify-center">
        {cartItems &&
          cartItems.map((item: any, index: number) => {
            return <CartItem key={index} product={item} cart={true} />;
          })}
        {cartItems.length <= 0 && (
          <div className="h-full flex flex-col justify-center items-center">
            <ShoppingCartOutlined className="text-4xl font-light text-gray-400"/>
            <h4 className="font-inter uppercase font-light text-gray-400">
              Your Cart is Empty
            </h4>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="absolute bottom-2 w-full">
          <hr />
          <Link href="/shop/checkout">
            <Button className="mt-4 w-full border border-black bg-zinc-900 text-gray-200 hover:text-zinc-900 hover:bg-gray-50">
              Checkout - Rs. {totalPrice}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
