import { queryClient } from "@/lib/queryClient";
import type { NewsData, NewsResponse } from "@/schema/schema";
import APIClient, { type ErrorResponse } from "@/service/api-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

interface AllNewsResponse {
  news: NewsResponse[];
  totalNews: number;
  totalPages: number;
  currentPage: number;
}
export const useGetNews = (page?: number) => {
  const newsClient = new APIClient<AllNewsResponse>("/news");
  return useQuery({
    queryKey: ["news", page],
    queryFn: () =>
      newsClient.getAll({
        params: { page },
      }),
  });
};

export const useGetDetailNews = (identity: string | undefined) => {
  const navigate = useNavigate();
  const newsClient = new APIClient<NewsResponse>(`/news/${identity}`);

  if (!identity) {
    navigate("/news");
  }

  return useQuery({
    queryKey: ["news", identity],
    queryFn: () => newsClient.getAll(),
  });
};

export const useCreateNews = () => {
  const createNewsClient = new APIClient("/news");
  return useMutation({
    mutationFn: (data: NewsData) =>
      createNewsClient.post(data, {
        headers: { "Content-Type": "application/json" },
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
    mutationFn: (id: string) => deleteNewsClient.delete(id, {}),
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
