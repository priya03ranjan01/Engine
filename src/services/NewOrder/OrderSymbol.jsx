import React from "react";
import { Controller } from "react-hook-form";
import CustomLabel from "../../components/CustomLabel";
import SelectSymbol from "../../components/SelectSymbol";

const OrderSymbol = ({ control, error }) => {
  return (
    <>
      <div className="w-full md:w-1/2 px-3 mb-2 ">
        <CustomLabel label="Symbol" />

        <Controller
          name="symbol"
          control={control}
          rules={{ required: "Symbol is required" }}
          render={({ field: { value, onChange } }) => (
            <>
              <SelectSymbol value={value} onChange={onChange} error={error} />
            </>
          )}
        />
        <small className="text-red">{error && error.message}</small>
      </div>
    </>
  );
};

export default OrderSymbol;
