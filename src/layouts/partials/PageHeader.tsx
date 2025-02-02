import Breadcrumbs from "@/components/Breadcrumbs";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="container text-center">
        <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14  ">
          <h1>{title}</h1>
          <Breadcrumbs className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
