import { notFound } from "next/navigation";
import { Metadata } from "next";
import MDXClient from "@/components/MDXClient";

const slugToImport: Record<string, () => Promise<any>> = {
  privacy: () => import("@/content/privacy.mdx"),
  terms: () => import("@/content/terms.mdx"),
};
export async function generateStaticParams() {
  return Object.keys(slugToImport).map((slug) => ({ slug }));
}
export async function generateMetadata(
  props: {
    params: Promise<{ slug?: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  if (!params?.slug) {
    notFound();
  }
  const slug = params.slug.toLowerCase();
  if (!slugToImport[slug]) {
    notFound();
  }
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    description: `Read our ${slug} document.`,
  };
}
export default async function LegalPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const slug = params.slug.toLowerCase();
  if (!slugToImport[slug]) {
    notFound();
  }
  return <MDXClient slug={slug} />;
}