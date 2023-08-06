import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

const OrdersTable = () => {
  const getDate = (mongoDate: any) => {
    const date = new Date(mongoDate);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrdersData(data);
        setLoading(false)
      });
  }, []);

  const subTotalPrice = (order: any) => {
    let total = 0;

    for (const product of order) {
      total += product.price;
    }

    return total;
  };

  const columns: ColumnsType<any> = [
    {
      title: "S. No.",
      key: "sno",
      render: (_, record, index) => <>{index + 1}</>,
    },
    {
      title: "Order Details",
      key: "orderDetails",
      render: (data) => (
        <>
          <p>
            <span className="font-semibold">ID:</span> {data._id}
          </p>
          <p>
            <span className="font-semibold">Bill:</span> Rs.{" "}
            {subTotalPrice(data.cartItems) + 200}
          </p>
          <p>
            <span className="font-semibold">Order Date:</span>{" "}
            {getDate(data.order_date)}
          </p>
        </>
      ),
    },
    {
      title: "Order Items",
      key: "items",
      render: (data) => (
        <>
          {data.cartItems.map((item: any, index: number) => {
            return (
              <p key={index}>
                {item.quantity}x {item.name} ({item.size})
              </p>
            );
          })}
        </>
      ),
    },
    {
      title: "Customer Details",
      key: "customerDetails",
      render: (data) => (
        <>
          <p>{data.name}</p>
          <p>{data.email ? data.email : ""}</p>
          <p>{data.phoneNumber}</p>
        </>
      ),
    },
    {
      title: "Address",
      key: "address",
      render: (data) => (
        <>
          <p>{data.address}</p>
          <p>{data.city}</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
      scroll={{
        x: 700,
      }}
      loading={loading}
      dataSource={ordersData} columns={columns} />
    </div>
  );
};

// const StatusCell = (data:any) => {
//   const [status, setStatus] = useState(data.status)
//   return (
//     <Td>
//       <Select name="status" id="status" value={status} onChange={(e)=> setStatus(e.target.value)}>
//         <option value="pending">Pending</option>
//         <option value="confirmed">Confirmed</option>
//         <option value="shipped">Shipped</option>
//         <option value="delivered">Delivered</option>
//       </Select>
//       <br />
//       <Button width="full" disabled={data.status}>Change</Button>
//     </Td>
//   )
// }

export default OrdersTable;
