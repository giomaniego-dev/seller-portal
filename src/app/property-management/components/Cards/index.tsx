"use client";

import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cards = () => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb
        pageName="Property Management"
        links={[
          { name: 'Dashboard', href: '/' },
          { name: 'Property Management', href: '/property-management' },
        ]}
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5" onClick={() => router.push("/property-management/wdv2")}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            width={300}
            height={300}
            src={"/images/house.jpg"}
            alt="house"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Westdale Villas 2</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
