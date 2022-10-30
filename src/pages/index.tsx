import { Meta } from "~/components/common/meta";
import { PageLayout } from "~/components/layout/page";
import Home from "~/components/sections/Homepage";

const HomePage = () => {
  return (
    <PageLayout>
      <Meta />
      <Home />
    </PageLayout>
  );
};

export default HomePage;
