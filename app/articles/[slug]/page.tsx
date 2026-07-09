// from official docs of next.
// dynamic routing

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // editing this path cause my content is inside articles
  const { default: Post } = await import(`@/content/articles/${slug}.mdx`);

  return (
    <article className="prose prose-invert lg:prose-lg mx-auto max-w-3xl px-6 py-10">
      <Post />
    </article>
  );
}

export function generateStaticParams() {
  // array should have mdx files, otherwise it'll give 404 as dynamicParams = false
  return [{ slug: 'something' }];
}

export const dynamicParams = false;
