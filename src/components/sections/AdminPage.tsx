import React, { useEffect, useState } from "react";
import { useAppStore } from "~/context/use-app-store";
import { checkIfUserExists, getMetrics } from "~/lib/utils/firestore";
import LoadingScreen from "../common/LoadingScreen";
import Container from "../layout/container";
import type { User } from "firebase/auth";
import Button from "../primitives/Button/Button";
import EyeIcon from "~/icons/EyeIcon";
import Link from "next/link";

function AdminPage() {
  const user = useAppStore().user;
  const [userdb, setUserdb] = useState<any | null | "not signed in">(null);
  const [metricsData, setMetricsData] = useState<Array<string>[]>();

  const [data, setData] = useState<any[][]>([]);

  useEffect(() => {
    (async function () {
      if (user === "not signed in") {
        return setUserdb("not signed in");
      }

      if (user && typeof user !== "string") {
        const res = await checkIfUserExists(user?.email as string);

        if (!res) return setUserdb("not signed in");

        setUserdb(res);
      }
    })();
  }, [user]);

  useEffect(() => {
    (async function () {
      const metrics: any = (await getMetrics()) as Object;
      const array: any = [];

      Object.keys(metrics).forEach(function (key) {
        array.push([key, metrics[key]]);
      });
      setData([...array]);
    })();
  }, []);

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

          {user && user !== "not signed in" && (
            <Button
              onClick={() => setUserdb("test")}
              className="mx-auto mt-16 w-[160px] gap-3"
              label="sign in"
            >
              <EyeIcon /> View anyway
            </Button>
          )}

          <Link href={"/login"}>
            <Button className="mx-auto mt-6 w-[160px]" label="sign in">
              Sign in
            </Button>
          </Link>
        </Container>
      );

    default:
      return (
        <Container className="mt-32">
          <h1 className="text-[45px] font-bold text-light-1">Admin page</h1>

          <div className="mt-10">
            <h2 className="text-lg text-light-1">Metrics</h2>
            <table
              border={1}
              className="mt-6 text-light-2 border border-light-3 padding-4 w-full max-w-md overflow-scroll"
            >
              <tbody>
                {data.map((e, id) => (
                  <tr className="p-2 border-b border-light-3" key={id}>
                    {e.map((e, id) => (
                      <td className="p-3 border-r border-light-3" key={id}>
                        {e}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      );
  }
}

export default AdminPage;
