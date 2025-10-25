import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { type NewsData, newsSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useCreateNews, useUpdateNews } from "@/hooks/useNews";

interface ModalAddEditNewsProps {
  isOpen: boolean;
  initialData?: {
    id: string;
    title: string;
    content: string;
    published: boolean;
  };
  setIsOpen: (isOpen: boolean) => void;
}

export function ModalAddEditNews({
  isOpen,
  initialData,
  setIsOpen,
}: ModalAddEditNewsProps) {
  const form = useForm({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: "",
      content: "",
      published: false,
    } as const,
  });
  const { mutate: addNews, isPending: isPendingAddNews } = useCreateNews();
  const { mutate: updateNews, isPending: isPendingUpdateNews } =
    useUpdateNews();

  useEffect(() => {
    if (initialData) {
      form.setValue("title", initialData.title);
      form.setValue("content", initialData.content);
      form.setValue("published", initialData.published);
    }
  }, [initialData, form]);

  function onSubmit(values: NewsData) {
    const data: NewsData = {
      title: values.title,
      content: values.content,
      published: values.published,
    };

    if (initialData) {
      updateNews({ id: initialData.id, data });
    } else {
      addNews(data);
    }
    console.log(data);
    setIsOpen(false);
    form.reset();
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] max-h-[90%] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit News" : "Add News"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* <div className="grid gap-4"> */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormLabel className="">Published</FormLabel>
                  <Select
                    onValueChange={(val) => field.onChange(val === "true")}
                    value={String(field.value)}>
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select published status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* </div> */}
            <DialogFooter className="mt-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={initialData ? isPendingUpdateNews : isPendingAddNews}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
