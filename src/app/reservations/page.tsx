import DefaultLayout from "../components/Layouts/DefaultLayout";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Tables from "./components/Tables";

const Reservations = () => {
  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Holdings"
        links={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Holdings", href: "/Reservations" },
        ]}
      />

      <div className="flex flex-col gap-10">
        <Tables />
      </div>
    </DefaultLayout>
  );
};

export default Reservations;
