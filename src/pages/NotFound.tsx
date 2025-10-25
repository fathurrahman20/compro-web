import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>404 - Not Found</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist. Try searching
            for what you need below.
          </EmptyDescription>
        </EmptyHeader>
        <div className="flex justify-center -mt-2">
          <Link to="/">
            <Button className="cursor-pointer">Back to home</Button>
          </Link>
        </div>
      </Empty>
    </main>
  );
}
