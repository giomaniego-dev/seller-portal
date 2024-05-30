"use client";

import React, { useState } from "react";
import ImageMapper from "react-img-mapper";

import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import { useRouter } from "next/navigation";

const ImageMap = () => {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const URL = "/images/sitemap.jpeg";
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE AND PUT IT HERE
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [96, 106, 135, 95, 145, 138, 108, 150],
        preFillColor: "#219654",
        fillColor: "green",
        route: "/property-management/wdv2/b2l1",
      },
      {
        name: "2",
        shape: "poly",
        coords: [136, 94, 173, 84, 187, 126, 148, 136],
        preFillColor: "#d34054",
        fillColor: "red",
        route: "/page2",
      },
    ],
  };

  const navigateTo = (area: any) => {
    if (area.fillColor === "red") {
      setShowError(true);
    } else {
      router.push(area.route);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb
        pageName="Westdale Villas 2"
        links={[
          { name: "Dashboard", href: "/" },
          { name: "Property Management", href: "/property-management" },
          { name: "WDV2", href: "/wdv2" },
        ]}
      />
      {showError && (
        <div className="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
          <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                fill="#ffffff"
                stroke="#ffffff"
              ></path>
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 font-semibold text-[#B45454]">
              There area you selected is unavailable.
            </h5>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <ImageMapper
          src={URL}
          map={MAP}
          height={732}
          width={1000}
          onClick={(area) => navigateTo(area)}
        />
      </div>
      <div className="container mt-5">
        <h2 className="mb-3 text-2xl font-bold text-black sm:text-title-xl2">Legend</h2>
        <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-success text-success">
          Available
        </p>
        <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-danger text-danger ml-3">
          Unavailable
        </p>
      </div>
    </div>
  );
};

export default ImageMap;
