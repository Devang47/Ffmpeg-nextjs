import { useAppStore } from "~/context/use-app-store";
import LoadingScreen from "../common/LoadingScreen";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { checkIfSignedIn } from "~/lib/utils/auth";
import Navbar from "../common/Navbar";

type Props = {
  children?: React.ReactNode;
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
        useAppStore.setState({ user: "not signed in" });
        setUser("doesn't exists");
        if (error === null) return;

        alert("Error (check console)");
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <LoadingScreen
        variant={
          useAppStore().isLoadingPopupOpen || user === null ? "in" : "out"
        }
      />
      {!useAppStore().isLoadingPopupOpen && (
        <>
          <Navbar />
          <main>{children}</main>
        </>
      )}
    </>
  );
};
