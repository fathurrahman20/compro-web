import { Link, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { useGetNews } from "@/hooks/useNews";
import { containerVariants, itemVariants } from "@/animations";

export default function NewsPage() {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;

  const { data, isLoading, isError } = useGetNews(page);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Gagal memuat berita.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        News
      </h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show">
        {data?.data.news?.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">
                {item.content}
              </p>
              <Link
                to={`/news/${item.slug}`}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-auto">
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setParams({ page: String(page - 1) })}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          Prev
        </button>

        <p className="text-sm text-gray-700 dark:text-gray-300 w-28 text-center">
          Page {data?.data.currentPage} of {data?.data.totalPages}
        </p>

        <button
          disabled={page === data?.data.totalPages}
          onClick={() => setParams({ page: String(page + 1) })}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          Next
        </button>
      </div>
    </section>
  );
}
