import { TableOfContentsData } from "./tableOfContentsData";
import Link from "next/link";

export default function TOC() {
  return (
    <div className="flex flex-wrap p-3">
      {TableOfContentsData.map((e) => (
        <Link href={`/bible${e.href}`}>
          <h4
            style={{
              "min-width": "18vh",
              width: "19vw",
              "max-width": "240px",
            }}
            className="text-white text-base border sm:text-lg lg:text-2xl p-3 my-2 mx-3 rounded-md hover:bg-gray-700 hover:scale-110 duration-200"
          >
            {e.name}
          </h4>
        </Link>
      ))}
    </div>
  );
}
