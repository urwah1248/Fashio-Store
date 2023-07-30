import Product from "@/components/Product";
import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useTitle } from "@/context/titleContext";

interface Props {
  title?: String;
  category?: String;
}

const LoadingProduct = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;
  return (
    <div className="flex w-full justify-center items-center h-52">
      <Spin indicator={antIcon} />
    </div>
  )
}

export default function ProductsPage({ title, category, ...props }: Props) {
  const { changeTitle } = useTitle();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeTitle(`${title} | Fashio.pk`);
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full md:max-w-5xl mx-auto">
      <h1 className="page-header">{title}</h1>
      <div className="flex flex-wrap w-[96%] mx-auto justify-center sm:justify-start gap-[2%]">
        <LoadingProduct/>
      </div>
    </div>
    ) // Show a loading indicator or a placeholder component
  }

  return (
    <div className="w-full">
      <h1 className="page-header">{title}</h1>
      <div className="flex flex-wrap w-11/12 mx-auto justify-center sm:justify-start">
        {products
          .filter((product: any) => product.category == category)
          .map((item: any) => {
            return <Product className={"w-5/6 md:w-1/3 lg:w-1/4"} key={item._id} product={item} />;
          })}
      </div>
    </div>
  );
}
