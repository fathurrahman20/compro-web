import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  meta:
    | {
        totalItems: number;
        totalPages: number;
        currentPage: number;
      }
    | undefined;
  page: number;
  setPage: (page: number) => void;
}

export default function PaginationControls({
  meta,
  page,
  setPage,
}: PaginationControlsProps) {
  if (!meta || meta.totalPages <= 1) {
    return null;
  }

  const { totalPages, currentPage } = meta;

  const handlePrev = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleNext = () => {
    setPage(Math.min(page + 1, totalPages));
  };

  return (
    <div className="flex items-center justify-center -mt-3 -mb-8 gap-x-4">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="outline"
        size="icon">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="outline"
        size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
