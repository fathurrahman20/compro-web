import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { useGetDetailNews } from "@/hooks/useNews";

export default function NewsDetailPage() {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGetDetailNews(slug);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg text-red-600">News not found</p>
      </div>
    );
  }

  return (
    <motion.article
      className="container mx-auto max-w-3xl py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl mb-4">
          {data?.data.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          By: {data?.data.author?.name}
        </p>
        <time className="text-gray-500 text-sm">
          {data?.data.createdAt
            ? new Date(data.data.createdAt).toLocaleDateString()
            : "N/A"}
        </time>
      </header>

      <div className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
        {data?.data.content}
      </div>

      <Link
        to="/news?page=1"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mt-12 gap-2">
        <span aria-hidden="true">←</span>
        Back to News
      </Link>
    </motion.article>
  );
}
