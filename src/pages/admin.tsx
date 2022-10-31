import { Meta } from "~/components/common/meta";
import { PageLayout } from "~/components/layout/page";
import AdminPage from "~/components/sections/AdminPage";

const Admin = () => {
  return (
    <PageLayout>
      <Meta
        title="Administrator | Ffmpeg"
        description="Administrator page of Ffmpeg"
      />
      <AdminPage />
    </PageLayout>
  );
};

export default Admin;
