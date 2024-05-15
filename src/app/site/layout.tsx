import Navigation from "@/components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";

type Props = {
  children: React.ReactNode;
};

const SiteLayout = async ({ children }: Props) => {
  const user = await currentUser();

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main>
        <Navigation user={user} />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default SiteLayout;
