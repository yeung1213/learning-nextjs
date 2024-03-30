import FirstComponent from "@/components/first-component";

export default function BlogDetails({ params }: { params: { blogId: string } }) {
  return (
    <div>
      <h1>Hello I am blog {params.blogId}</h1>
      <FirstComponent />
    </div>
  );
}