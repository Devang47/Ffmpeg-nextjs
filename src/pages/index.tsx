import { useEffect } from "react";
import { Meta } from "~/components/common/meta";
import { PageLayout } from "~/components/layout/page";
import { signOutUser } from "~/lib/utils/auth";

const HomePage = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <PageLayout>
      <Meta />
      Homepage
    </PageLayout>
  );
};

export default HomePage;
