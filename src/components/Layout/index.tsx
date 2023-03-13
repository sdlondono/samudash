import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  meta: {
    title: string;
    description?: string;
    icon?: string;
  };
};

const Layout = ({
  children,
  meta: { description, icon = "/favicon.ico", title },
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
      </Head>
      <main className="flex flex-col h-screen">
        <div className="flex-1 max-w-screen">{children}</div>
      </main>
    </>
  );
};
export default Layout;
