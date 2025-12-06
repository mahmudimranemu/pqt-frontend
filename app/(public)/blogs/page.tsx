import { fetchBlogs } from "@/lib/wpapi";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";

export const metadata = {
    title: "Blogs - Property Quest Turkey",
    description: "Read our latest news and updates about Turkish real estate.",
};

export default async function BlogsPage() {
    const blogs = await fetchBlogs();

    return (
        <>
            <PageHeader
                title='Latest News & Articles'
                backgroundImage='/images/slide1.jpg'
                description='Your comprehensive guide to buying property in Turkey' />
            <div className="w-full lg:px-36 px-6 mx-auto py-10">



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <Card key={blog.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="p-0">
                                {blog.featured_image_url ? (
                                    <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
                                        <Image
                                            src={blog.featured_image_url}
                                            alt={blog.title.rendered}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-t-lg">
                                        <span className="text-gray-400">No Image</span>
                                    </div>
                                )}
                            </CardHeader>
                            <CardContent className="flex-grow p-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {new Date(blog.date).toLocaleDateString()}
                                </div>
                                <CardTitle className="text-xl mb-3 line-clamp-2">
                                    <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                                        {blog.title.rendered}
                                    </Link>
                                </CardTitle>
                                <div
                                    className="text-gray-600 line-clamp-3 text-sm prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
                                />
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
