import DefaultLayout from "@/app/components/Layouts/DefaultLayout";
import ImageMap from "./components/ImageMap";

const PropertyManagement = () => {
  return (
    <DefaultLayout>
      <div className="w-full flex items-center justify-center">
        <ImageMap />
      </div>
    </DefaultLayout>
  );
};

export default PropertyManagement;
