import React from 'react'

export default function ExecutionsData({element}) {
  return (
    <><td className="whitespace-nowrap px-4 sm:px-5">
    {element.order_id}
  </td>
  <td className="whitespace-nowrap px-4 sm:px-5">
    {element.time}
  </td>
  <td className="whitespace-nowrap px-4 sm:px-5">
    {element.symbol}
  </td>
  <td className="whitespace-nowrap px-4 sm:px-5">
    {element.order_type}
  </td>
  <td className="whitespace-nowrap px-4 sm:px-5">
    {element.order_type.toLowerCase() === "market"
      ? "MKT"
      : `${element.price}`}
  </td>
  <td
    className={`px-4 sm:px-5 marker:font-bold border-2 inline-block  my-2 rounded-full whitespace-nowrap ${
      element.side.toUpperCase().startsWith("BUY")
        ? "text-buy  border-buy  "
        : "text-sell  border-sell "
    }`}
  >
    {element.side.toUpperCase()}
  </td>
  <td className="whitespace-nowrap px-4 sm:px-5">
    {element.volume}
  </td>
    <td className="whitespace-nowrap px-4 sm:px-5">
      {element.executed_quantity}
    </td></>
  )
}
