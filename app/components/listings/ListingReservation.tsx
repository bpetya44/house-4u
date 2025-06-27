"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabledDates: Date[];
  disabled: boolean;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabledDates,
  disabled,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-xl
      border-[1px]
      border-neutral-200
      overflow-hidden
      "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold text-purple-700">$ {price}</div>
        <div className="text-neutral-500 font-light">/ night</div>
      </div>

      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} onClick={onSubmit} label="Reserve" />
      </div>
      <div
        className="
        flex flex-row
        items-center
        justify-between
        p-4
        text-lg
        font-semibold
        "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
