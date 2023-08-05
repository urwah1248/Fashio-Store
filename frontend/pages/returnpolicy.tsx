import { useTitle } from "@/context/titleContext";
import React, { useEffect } from "react";

export default function ReturnPolicy() {
  const { changeTitle } = useTitle();

  useEffect(() => {
    changeTitle(`Return Policy | Fashio.pk`);
  }, []);

  return (
    <div className="md:max-w-5xl w-11/12 mx-auto">
      <h1 className="page-header">Return Policy</h1>
      <div className="flex flex-col gap-4 text-sm text-zinc-500">
        <p>
          All items are carefully checked before dispatch to ensure that your
          purchase is in excellent condition. If you are still not satisfied or
          an item delivered is found broken, then you can exchange or return it
          within seven days of purchase, and you will receive a 100% FULL REFUND
          ( Not applicable on Perfume Collection ).
        </p>
        <p className="font-bold">
          However, for a product to be successfully refunded or exchanged :
        </p>
        <ul className="policy">
          <li>The item must be unused. </li>
          <li>It should be in its original packaging. </li>
          <li>The receipt should also be on display. </li>
        </ul>
        <p className="font-bold">Our Refund and Exchange Procedure:</p>
        
        <ul className="policy">
          <li>The item must be unused. </li>
          <li>It should be in its original packaging. </li>
          <li>The receipt should also be on display. </li>
        </ul>
      </div>
    </div>
  );
}
