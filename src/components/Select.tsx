import Select, { StylesConfig } from "react-select";
type optionsType = {
  value: string;
  label: string;
};
type SelectBox = {
  title: string;
  options: optionsType[];
};
export const SelectBox = ({ title, options }: SelectBox) => {
  const style: StylesConfig = {
    control: (base, state) => {
      return {
        ...base,
        border: ".5px solid #E1E4E8",
        borderRadius: "8px",
        padding: "0px",
        height: "38px",
        cursor: !state.isDisabled ? "pointer" : "",
        boxShadow: "none",
        "&:hover": {
          border: ".5px solid #FF5A1F",
        },
      };
    },
    option: (styles, { isFocused, isSelected, isDisabled }) => {
      return {
        ...styles,
        cursor: !isDisabled ? "pointer" : "",
        "&:active": {
          backgroundColor: "#FFF8F1",
        },
        backgroundColor: isSelected
          ? "#FF5A1F"
          : isFocused
          ? "#FFF8F1"
          : undefined,
      };
    },
    multiValue: (base) => {
      return {
        ...base,
        border: "1px solid #EDEEF0",
        borderRadius: "9999px",
        padding: "0px",
        backgroundColor: "#FAFBFC",
      };
    },
  };

  return (
    <Select
      options={options}
      placeholder={title}
      className="h-9 text-sm"
      isSearchable={true}
      styles={style}
      isClearable={true}
    />
  );
};
