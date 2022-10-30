import { useAppStore } from "~/context/use-app-store";
import LoadingScreen from "../common/LoadingScreen";
import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { checkIfSignedIn } from "~/lib/utils/auth";
import { formatError } from "~/lib/utils";
import { toastErrorConfig } from "~/lib/constants";
import Navbar from "../common/Navbar";
import { AnimatePresence } from "framer-motion";

type Props = {
  children?: React.ReactNode;

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
};

export const PageLayout = ({ children }: Props) => {
  const [user, setUser] = useState<User | null | "doesn't exists">(null);

  useEffect(() => {
    (async function () {
      try {
        const res: User = (await checkIfSignedIn()) as User;
        useAppStore.setState({ user: res });
        if (location.pathname === "/login") return (location.pathname = "/");
        setUser(res);
      } catch (error) {
        setUser("doesn't exists");
        if (error === null) return;
        toast(formatError(error).message, toastErrorConfig);
      }
    })();
  }, []);

  return (
    <>
      <AnimatePresence>
        {(useAppStore().isLoadingPopupOpen || user === null) && (
          <LoadingScreen />
        )}
      </AnimatePresence>
      <Toaster />
      {/* TODO Header */}
      {/* <Header /> */}
      <Navbar />
      <main>{children}</main>
      {/* TODO Footer */}
      {/* <Footer /> */}
    </>
  );
};
