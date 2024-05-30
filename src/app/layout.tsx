import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "@/app/css/satoshi.css";
import "@/app/css/style.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";

export const metadata = {
  title: "Homemark, Inc.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthContext>
            <>
              <ToasterContext />
              {children}
            </>
        </AuthContext>
      </body>
    </html>
  );
}
