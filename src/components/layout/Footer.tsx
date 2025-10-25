import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-auto mx-auto">
      <Separator />
      <div className="container py-6 text-center mx-auto text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
