import { queryClient } from "@/lib/queryClient";
import type { NewsData } from "@/schema/schema";
import APIClient, { type ErrorResponse } from "@/service/api-client";
import type { News } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";

interface AllNewsResponse {
  news: News[];
  totalNews: number;
  totalPages: number;
  currentPage: number;
}
export const useGetNews = () => {
  const newsClient = new APIClient<AllNewsResponse>("/news");
  return useQuery({
    queryKey: ["news"],
    queryFn: () => newsClient.getAll({ withCredentials: true }),
  });
};

export const useCreateNews = () => {
  const createNewsClient = new APIClient("/news");
  return useMutation({
    mutationFn: (data: NewsData) =>
      createNewsClient.post(data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success("News created successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data.message || "Failed to create news article"
      );
    },
  });
};

export const useUpdateNews = () => {
  const updateNewsClient = new APIClient("/news");
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: NewsData }) =>
      updateNewsClient.patch(id, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success("News updated successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data.message || "Failed to update news article"
      );
    },
  });
};

export const useDeleteNews = () => {
  const deleteNewsClient = new APIClient(`/news`);
  return useMutation({
    mutationFn: (id: string) =>
      deleteNewsClient.delete(id, {
        withCredentials: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success("News deleted successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data.message || "Failed to delete news article"
      );
    },
  });
};
