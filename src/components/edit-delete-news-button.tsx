import type { News } from "@/types";
import { Button } from "./ui/button";
import { useState } from "react";
import { ModalAddEditNews } from "./modal-add-edit-news";
import { ModalDeleteNews } from "./modal-delete-news";

export default function EditDeleteNewsButton({ news }: { news: News }) {
  const [isShowModal, setShowModal] = useState(false);
  const [isShowModalDelete, setShowModalDelete] = useState(false);
  return (
    <div>
      <div className="flex gap-x-4">
        <Button
          className="bg-green-600 hover:bg-green-800"
          onClick={() => {
            setShowModal(true);
          }}>
          Edit
        </Button>
        <Button
          className="bg-red-600 hover:bg-red-800"
          onClick={() => setShowModalDelete(true)}>
          Delete
        </Button>
      </div>
      {isShowModal && (
        <ModalAddEditNews
          initialData={news}
          isOpen={isShowModal}
          setIsOpen={setShowModal}
        />
      )}
      {isShowModalDelete && (
        <ModalDeleteNews
          isOpen={isShowModalDelete}
          setIsOpen={setShowModalDelete}
          productId={news.id}
        />
      )}
    </div>
  );
}
