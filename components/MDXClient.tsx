"use client";
import React from "react";
import dynamic from "next/dynamic";

interface MDXClientProps {
  slug: string;
}

const DynamicComponents: Record<string, React.ComponentType<any>> = {
  privacy: dynamic(() => import("@/content/privacy.mdx"), { ssr: false }),
  terms: dynamic(() => import("@/content/terms.mdx"), { ssr: false }),
};

export default function MDXClient({ slug }: MDXClientProps) {
  const DynamicMDX = DynamicComponents[slug];
  if (!DynamicMDX) {
    return <p className="text-center text-red-600">Document not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto min-h-[80vh] max-xl:px-10 max-md:px-3 flex max-xl:flex-col md:gap-5">
      <div className="mt-10 max-w-4xl mx-auto ml-2 prose pt-20 pb-20 prose-img:w-4 prose-img:inline-flex prose-strong:text-white prose-code:text-white prose-h3:text-[20px] prose-lg prose-h1:text-3xl prose-h2:mb-1 prose-h2:text-[24px] prose-h2:text-white prose-h1:text-white prose-em:text-[#89888d] prose-em:text-lg prose-em:font-bold prose-strong:font-semibold prose-a:text-white max-sm:prose-a:text-base prose-li:marker:text-[#89888d] prose-li:font-normal prose-img:my-0 prose-img:mr-1 prose-ul:text-gray-300 prose-blockquote:text-[#fff] prose-blockquote:text-opacity-70 prose-blockquote:border-l-5 prose-blockquote:border-l-[#374151] prose-blockquote:font-extrabold prose-ul:marker:text-[#89888D] marker:text-red-500 prose-hr:border-1 prose-hr:border-gray-500 prose-hr:border-opacity-25 prose-p:mt-0 prose-p:mb-0 prose-p:text-gray-300 prose-p:opacity-90 prose-p:font-light prose-strong:m-0">
        <DynamicMDX />
      </div>
    </div>
  );
}
