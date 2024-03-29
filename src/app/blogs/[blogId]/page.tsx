export default function BlogDetails({ params }: { params: { blogId: string } }) {
  return <h1>Hello I am blog {params.blogId}</h1>
}