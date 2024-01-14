import { SelectBox } from "../../components/Select";
import Switch from "../../components/Switch";

import DocumentSelector from "./DocumentSelector";
import Search from "../../components/Search";

const AvailableDocuments = () => {

  
  const options = [
    {
      value: "  Heavy Equipment Operator",
      label: "Heavy Equipment Operator",
    },
    {
      value: "Heavy Equipment Service Technician",
      label: "Heavy Equipment Service Technician",
    },
    { value: "Equipment Operator", label: "Equipment Operator" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-3 flex-1">
      <h5 className="text-sm font-medium">Available Documents</h5>
      <Search />
      <div>
        <h5 className="text-sm font-medium mb-2">Filter by:</h5>

        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <SelectBox title="Job Templates" options={options} />
          <SelectBox title="Locations" options={options} />
          <SelectBox title="Subsidiary" options={options} />
          <SelectBox title="Seniority" options={options} />
        </div>

        <div className="flex justify-between mt-4 items-center">
          <h5 className="text-sm font-medium">12 Available Documents</h5>
          <div className="flex gap-2 items-center">
            <Switch /> <span>Select all</span>
          </div>
        </div>
      </div>
      <DocumentSelector />
    </div>
  );
};

export default AvailableDocuments;
