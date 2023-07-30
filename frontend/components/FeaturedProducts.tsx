import React from "react";
import Product from "./Product";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  products: Array<any>;
  title: String;
  category: String;
}

const FeaturedProducts = ({
  products,
  title,
  category = "",
  ...props
}: Props) => {
  return (
    <div className="py-10 w-full flex flex-col items-center">
      <h1 className="page-header my-4">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
      <div className="scrollbar-hide overflow-x-scroll overflow-y-hidden w-full md:overflow-x-hidden md:flex flex-wrap whitespace-nowrap justify-center">
        <div className="py-24 pl-[3%] inline sm:hidden"></div>
        {products
          .filter((product) =>
            category
              ? product.category == category
              : product.category != "rings" && product.category != "earrings"
          )
          .filter((product, index) => index < 4)
          .map((product, index) => {
            return (
              <Product
                className=" w-5/6 max-w-[268px] md:w-[300px] md:mr-0"
                key={index}
                product={product}
              />
            );
          })}
      </div>
      {category && (
        <Link href={`/shop/${category}`}>
          <Button
            className="mt-4 border border-black bg-zinc-900 text-gray-200 hover:text-zinc-900 hover:bg-gray-200"
            size="lg"
          >
            View More
          </Button>
        </Link>
      )}
    </div>
  );
};

export default FeaturedProducts;
