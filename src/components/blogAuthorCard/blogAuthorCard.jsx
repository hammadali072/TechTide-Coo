export default function BlogAuthorCard({ blog }) {
  const initials = blog.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="bg-black border border-white/8 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
      <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl font-bold">
        {initials}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white/50 tracking-widest uppercase mb-1">
          Written By
        </h4>
        <p className="text-xl font-bold text-white mb-1">{blog.author}</p>
        <p className="text-sm font-medium text-primary mb-4">{blog.authorRole}</p>
        <p className="text-sm text-white/70 leading-relaxed">
          {blog.authorBio}
        </p>
      </div>
    </div>
  );
}
