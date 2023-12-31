import Admin from "@/components/dynamic/form/Admin";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Admin" restrictions={{}}>
      <Admin />
    </ProtectedPage>
  );
};

export default Page;
