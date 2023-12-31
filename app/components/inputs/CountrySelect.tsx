"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  lalabel: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Select a country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () =>
            "p-3 border-2 border-neutral-200 outline-none hover:border-purple-700 hover:bg-purple-100 transition cursor-pointer",
          input: () => "text-lg font-semibold",
          option: () =>
            "p-3 border-2 border-neutral-200 hover:border-purple-700 hover:bg-purple-100 transition cursor-pointer",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,

            primary25: "#b977f8",
            primary: "purple-500",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
