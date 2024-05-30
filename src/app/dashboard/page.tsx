import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import ECommerce from "@/app/components/Dashboard/E-commerce";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
