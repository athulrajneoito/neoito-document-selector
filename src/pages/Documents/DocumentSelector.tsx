import Accordion from "../../components/Accordian";
import store from "../../store";

const DocumentSelector = () => {
  const [selectedDocuments, setSelectedDocuments] = store.useState<string[]>(
    "selectedDocuments",
    { persist: true, default: [] }
  );
  const documentGroups = [
    {
      title: "Drug Policies",
      items: [
        "Alabama - Employee Handbook",
        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",
      ],
      active: false,
    },
    {
      title: "Employee Handbooks",
      items: [
        "Alabama - Employee Handbook",
        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",
      ],
      active: false,
    },
    {
      title: "Equipment Selection",
      items: [
        "Alabama - Employee Handbook",
        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",
      ],
      active: false,
    },
    {
      title: "Non-Compete Agreements",
      items: [
        "Alabama - Employee Handbook",
        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",

        "Alabama - Employee Handbook",
      ],
      active: false,
    },
  ];

  const onItemSelect = (item: string) => {
    const items = [...selectedDocuments];
    items.push(item);

    setSelectedDocuments(items);
  };
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-gray-200">
      {documentGroups.map((documentGroup, index) => (
        <Accordion
          key={index}
          title={documentGroup.title}
          index={index}
          id={`documentGroups-${index}`}
          items={documentGroup.items}
          active={documentGroup.active}
          selectedItem={(item) => onItemSelect(item)}
        ></Accordion>
      ))}
    </div>
  );
};

export default DocumentSelector;
