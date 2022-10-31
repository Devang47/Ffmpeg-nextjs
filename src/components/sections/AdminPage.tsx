import React, { useEffect, useState } from "react";
import { useAppStore } from "~/context/use-app-store";
import { checkIfUserExists } from "~/lib/utils/firestore";
import LoadingScreen from "../common/LoadingScreen";
import Container from "../layout/container";
import type { User } from "firebase/auth";
import Button from "../primitives/Button/Button";
import EyeIcon from "~/icons/EyeIcon";
import Link from "next/link";

function AdminPage() {
  const user = useAppStore().user;
  const [userdb, setUserdb] = useState<any | null | "not signed in">(null);

  console.log(user);

  useEffect(() => {
    (async function () {
      console.log("here", user);

      if (user === "not signed in") {
        return setUserdb("not signed in");
      }

      if (user && typeof user !== "string") {
        const res = await checkIfUserExists(user?.email as string);
        console.log(res);

        if (!res) return setUserdb("not signed in");

        setUserdb(res);
      }
    })();
  }, [user]);

  switch (userdb) {
    case null:
      return <LoadingScreen variant="in" />;
    case "not signed in":
      return (
        <Container className="text-center w-10/12 mx-auto mt-32">
          <h1 className="font-bold text-center text-[55px] font-mono text-light-1">
            401
          </h1>

          <div className="mt-4 text-xl leading-10 font-medium text-light-2">
            You {"aren't"} authorised to view this page
          </div>
          <Button className="mx-auto mt-16 w-[160px] gap-3" label="sign in">
            <EyeIcon /> View anyway
          </Button>
          <Link href={"/login"}>
            <Button className="mx-auto mt-6 w-[160px]" label="sign in">
              Sign in
            </Button>
          </Link>
        </Container>
      );

    case user !== "not signed in":
      return (
        <Container className="mt-32">
          <h1>Admin</h1>

          <div className="">
            <h2>metrics</h2>
          </div>
        </Container>
      );
    default:
      return <div className="">{"Maybe you're lost"}</div>;
  }
}

export default AdminPage;
