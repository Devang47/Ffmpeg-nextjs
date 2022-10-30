import { Meta } from "~/components/common/meta";
import { PageLayout } from "~/components/layout/page";
import Login from "~/components/sections/LoginPage";

const LoginPage = () => {
  return (
    <PageLayout>
      <Meta title="Login | Ffmpeg" description="Login to Ffmpeg" />
      <Login />
    </PageLayout>
  );
};

export default LoginPage;
