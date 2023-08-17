import React from "react";

function MarketDataRow({ price, orders, qty }) {
  return (
    <tr
      className="hover:bg-gray-600
      text-md h-[40px] "
    >
      <td>{price}</td>
      {/* <td className="border-r-[1.5px] border-gray-500" >{price}</td> */}
      <td>{orders}</td>
      {/* <td className="border-r-[1.5px] border-gray-500">{orders}</td> */}
      <td>{qty}</td>
    </tr>
  );
}

class MarketDataObj {
  constructor(price, orders, qty) {
    this.price = price;
    this.orders = orders;
    this.qty = qty;
  }
}

export default function MarketData({ data, symbol, side }) {
  let marketData = [];
  let priceInserted = [];
  let filteredData = data.filter((order) => {
    // console.log("order??", order);
    return order.symbol === symbol.value && order.side === side;
  });

  filteredData.forEach((order) => {
    let price = order.price;
    let orders = 0;
    let qty = 0;

    data
      .filter(
        (order) =>
          order.symbol === symbol.value &&
          order.side === side &&
          order.price === price
      )
      .forEach((order) => {
        orders++;
        qty += order.remainingOrder;
      });

    if (!priceInserted.includes(price)) {
      marketData.push(new MarketDataObj(price, orders, qty));
      priceInserted.push(price);
    }
  });

  return (
    <tbody className={side.toLowerCase() === "buy" ? "text-buy" : "text-sell"}>
      {marketData.map((data) => {
        return (
          <MarketDataRow
            key={data.price}
            price={data.price}
            orders={data.orders}
            qty={data.qty}
          />
        );
      })}
    </tbody>
  );
}
