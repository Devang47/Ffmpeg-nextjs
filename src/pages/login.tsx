import { Meta } from "~/components/common/meta";
import { PageLayout } from "~/components/layout/page";
import Login from "~/components/sections/LoginPage";

const LoginPage = () => {
  return (
    <PageLayout>
      <Meta title="Login | Menyū" description="Login to Menyū" />
      <Login />
    </PageLayout>
  );
};

export default LoginPage;
