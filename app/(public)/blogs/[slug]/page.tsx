import { fetchBlogBySlug } from "@/lib/wpapi";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    try {
        const { slug } = await params;
        const blog = await fetchBlogBySlug(slug);
        return {
            title: `${blog.title.rendered} - Property Quest Turkey`,
            description: blog.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
        };
    } catch (error) {
        return {
            title: "Blog Not Found",
        };
    }
}

export default async function BlogPage({ params }: Props) {
    const { slug } = await params;
    let blog;
    try {
        blog = await fetchBlogBySlug(slug);
    } catch (error) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={blog.title.rendered}
                backgroundImage={blog.featured_image_url}
                description={blog.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160)} />
            <div className="w-full lg:px-36 px-6 mx-auto py-10">
                <Button asChild variant="ghost" className="mb-6 pl-0 hover:pl-0 hover:bg-transparent text-gray-500 hover:text-gray-900">
                    <Link href="/blogs" className="flex items-center gap-2">
                        <ArrowLeft size={20} />
                        Back to Blogs
                    </Link>
                </Button>

                <article className="max-w-4xl mx-auto">

                    <div className="flex flex-wrap items-center text-sm md:text-base text-gray-500 mb-8 gap-4 border-b pb-6">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">By PQT</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <time dateTime={blog.date}>
                            {new Date(blog.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>

                    {blog.featured_image_url && (
                        <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={blog.featured_image_url}
                                alt={blog.title.rendered}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="prose prose-lg prose-gray max-w-none 
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-lg prose-img:shadow-md
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
        ">
                        <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
                    </div>
                </article>
            </div>
        </>
    );
}
