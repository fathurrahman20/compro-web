import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteNews } from "@/hooks/useNews";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";

interface ModalDeleteNewsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  productId: string | undefined;
}
export function ModalDeleteNews({
  isOpen,
  setIsOpen,
  productId,
}: ModalDeleteNewsProps) {
  const { mutate, isPending, isSuccess } = useDeleteNews();

  const handleDelete = () => {
    if (!productId) return;
    mutate(productId);
    if (!isPending) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess, setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogContent className="sm:max-w-[425px] py-14">
          <DialogHeader>
            <DialogTitle className="mx-auto">
              <Trash2 className="text-[#FF0000] w-20 h-20" />
            </DialogTitle>
          </DialogHeader>
          <h3 className="text-[24px] font-medium text-center">
            Are you sure you want to delete this news?
          </h3>
          <DialogFooter className="mx-auto mt-3">
            <DialogClose asChild>
              <Button variant="outline" className="w-[180px]">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-[#FF0000] text-white w-[180px] hover:bg-red-900 cursor-pointer"
              onClick={handleDelete}
              disabled={isPending}>
              {isPending ? "Loading..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
