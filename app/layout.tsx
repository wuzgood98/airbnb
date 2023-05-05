import { Nunito } from "next/font/google";
import {
  ClientOnly,
  Navbar,
  RegisterModal,
  ToasterProvider,
  LoginModal,
  RentModal,
  SearchModal,
} from "@/components";
import "./globals.css";
import { getCurrentUser } from "@/actions";

export const metadata = {
  title: "Airbnb",
  description: "A clone of the Airbnb web app",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
