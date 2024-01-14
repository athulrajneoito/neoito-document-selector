import classNames from "classnames";
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type AccordionProps = {
  items: string[];
  title: string;
  id: string;
  active?: boolean;
  index: number;
  selectedItem?: (item: string) => void;
};

export default function Accordion({
  items,
  title,
  id,
  index,
  selectedItem,
  active = false,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  const onClickItem = (item: string) => {
    selectedItem && selectedItem(item);
  };

  return (
    <div className="">
      <h2>
        <button
          className={classNames({
            "flex items-center justify-between w-full text-left  bg-gray-50 px-3 py-3":
              true,
            "!bg-gray-100": accordionOpen,
            "rounded-t-lg": index == 0,
          })}
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="text-gray-600">{title}</span>
          <span
            className={classNames({
              transition: true, // colors
              "rotate-180": accordionOpen, // layout
              "rotate-0": !accordionOpen, //positioning & styling
            })}
          >
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {items.map((item, index) => {
            return (
              <div
                className="p-3 hover:bg-primary/10 flex justify-between cursor-pointer "
                key={index}
                onClick={() => onClickItem(item)}
              >
                <span>{item}</span>
                <span className="border border-gray-200 p-0.5 rounded-[4px] ">
                  <ArrowRightIcon className="h-3 w-3 cursor-pointer" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
