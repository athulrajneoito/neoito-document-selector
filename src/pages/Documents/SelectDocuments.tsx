
import AvailableDocuments from "./AvailableDocuments";
import SelectedDocuments from "./SelectedDocuments";

const SelectDocuments = () => {
  return (
    <div className="container mx-auto my-6 px-4">
      <div className="w-full bg-white p-6 flex flex-col gap-4 rounded-lg border border-gray-200">
        <h2 className="font-bold">
          Which agreements, forms and notices should be sent to Jason Smith?
        </h2>
        <h5 className="text-sm">
          Employees assigned to this job type will be required to review, where
          relevant fill-in, and sign the following agreements and notices:
        </h5>
      </div>

      <h5 className="my-4 text-sm">
        Select the agreements, notices and documents you want Jason Smith to
        sign
      </h5>

      <div className="flex gap-6">
        <div className="w-1/2">
          <AvailableDocuments />
        </div>

        <div className="w-1/2">
          <SelectedDocuments />
        </div>
      </div>
    </div>
  );
};

export default SelectDocuments;
