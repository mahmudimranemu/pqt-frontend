
import { fetchBlogs } from "@/lib/wpapi";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export async function LatestNewsSection() {
  const blogs = await fetchBlogs();
  // Ensure we have at least one blog to show anything, 
  // though optimally we want 4 (1 main + 3 side).
  if (!blogs || blogs.length === 0) {
    return null;
  }

  const mainPost = blogs[0];
  const sidePosts = blogs.slice(1, 4);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className='flex justify-center items-center w-full bg-white px-4 md:px-8 lg:px-[167px] pt-20 pb-0'>
      <div className='flex flex-col items-center gap-10 w-full'>
        <header className='flex flex-col items-center gap-4'>
          <h2 className="font-extrabold text-dark-red text-4xl text-center tracking-[-1.08px] leading-10 [font-family:'Inter',Helvetica]">
            Latest News
          </h2>
          <p className='max-w-[418.7px] text-black text-[length:var(--paragraph-medium-regular-font-size)] text-center leading-[var(--paragraph-medium-regular-line-height)] font-paragraph-medium-regular font-[number:var(--paragraph-medium-regular-font-weight)] tracking-[var(--paragraph-medium-regular-letter-spacing)] [font-style:var(--paragraph-medium-regular-font-style)]'>
            Discover the latest trends, insights, and updates from the world of real estate in Turkey.
          </p>
        </header>

        <div className='flex flex-col lg:flex-row items-start gap-6 w-full justify-center'>
          {/* Main Featured Post */}
          <Link href={`/blogs/${mainPost.slug}`} className='w-full lg:w-[541px] group'>
            <Card className='w-full h-full bg-white rounded-lg border border-[#e1e3ec] shadow-neutral-shadow-02 overflow-hidden transition-all duration-300 hover:shadow-lg'>
              <CardContent className='p-0 h-full flex flex-col'>
                <div className='w-full h-64 relative overflow-hidden'>
                  {mainPost.featured_image_url ? (
                    <Image
                      src={mainPost.featured_image_url}
                      alt={mainPost.title.rendered}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  ) : (
                    <div className='w-full h-full bg-gray-200 flex items-center justify-center text-gray-400'>
                      No Image
                    </div>
                  )}
                </div>
                <div className='flex flex-col gap-4 px-8 py-6 flex-grow'>
                  <div className='flex items-center gap-2'>
                    <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                      News
                    </span>
                    <Image
                      className='w-[22.27px] h-px'
                      alt='Blog card details divider'
                      src='/blog-card-details-divider.svg'
                      width={22}
                      height={1}
                    />
                    <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors500 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                      {formatDate(mainPost.date)}
                    </span>
                  </div>
                  <h3 className='font-[number:var(--display-6-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-6-semi-bold-font-size)] leading-[var(--display-6-semi-bold-line-height)] font-display-6-semi-bold tracking-[var(--display-6-semi-bold-letter-spacing)] [font-style:var(--display-6-semi-bold-font-style)] group-hover:text-dark-red transition-colors'>
                    {mainPost.title.rendered}
                  </h3>
                  <div
                    className="text-gray-500 line-clamp-2 text-sm"
                    dangerouslySetInnerHTML={{ __html: mainPost.excerpt.rendered }}
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Side Posts List */}
          <div className='flex flex-col gap-6 w-full lg:w-[435px]'>
            {sidePosts.map((post) => (
              <div key={post.id} className='flex flex-col gap-4 group'>
                <div className='flex items-center gap-2'>
                  <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                    News
                  </span>
                  <Image
                    className='w-[22.27px] h-px'
                    alt='Blog card details divider'
                    src='/blog-card-details-divider.svg'
                    width={22}
                    height={1}
                  />
                  <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors500 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                    {formatDate(post.date)}
                  </span>
                </div>

                <Link href={`/blogs/${post.slug}`} className='flex items-start gap-4'>
                  <div className="relative w-[80px] h-[80px] flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                    {post.featured_image_url ? (
                      <Image
                        alt={post.title.rendered}
                        src={post.featured_image_url}
                        fill
                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Image</div>
                    )}
                  </div>
                  <h4 className="flex-1 [font-family:'Inter',Helvetica] font-semibold text-neutral-colors600 text-lg tracking-[0] leading-6 group-hover:text-dark-red transition-colors line-clamp-3">
                    {post.title.rendered}
                  </h4>
                </Link>
                <Separator className='w-full' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

