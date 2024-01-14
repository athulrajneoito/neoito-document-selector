import Search from "../../components/Search";
import {
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import store from "../../store";

const SelectedDocuments = () => {
  const [selected, setSelected] = store.useState<string[]>("selectedDocuments");

  const removeItem = (index: number) => {
    const arr = [...(selected as string[])];

    arr.splice(index, 1);
    setSelected(arr);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-3 flex-1 h-full">
      <h5 className="text-sm font-medium">Selected Documents</h5>
      <Search />

      {selected.length == 0 && (
        <div className="bg-gray-100 border border-gray-200 h-full">
          <div className="mt-14">
            <ArrowLeftIcon className="w-16 h-16 text-gray-300 mx-auto" />
            <p className="text-xs text-gray-500 text-center mt-6">
              Select documents from the left panel to have employees review them
              and provide a signature acknowledging review
            </p>
          </div>
        </div>
      )}
      {selected.length > 0 && (
        <div className="p-4 border border-green-400 rounded-lg">
          {selected?.map((document, index) => {
            return (
              <div key={index} className="flex items-center gap-2 py-3">
                <CheckIcon className="w-3.5 h-3.5 text-green-500 " />
                <span className="text-sm">{document}</span>
                <div
                  onClick={() => removeItem(index)}
                  className="ml-auto rounded-[4px] border border-gray-200 p-1 hover:bg-red-500"
                >
                  <XMarkIcon className="w-3 h-3 text-gray-700 cursor-pointer"></XMarkIcon>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectedDocuments;
