import Home from "@/components/Home/Home";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ searchParams }: Props) {
  const scrollToContact = searchParams.scrollToContact === "true";
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home scrollToContact={scrollToContact} />
    </Suspense>
  );
}
