export default function Loading() {
    return (
        <div className="container-main py-12">
            <div className="skeleton h-8 w-64 mb-4" />
            <div className="skeleton h-4 w-96 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="card-static p-5 space-y-3">
                        <div className="skeleton h-4 w-20" />
                        <div className="skeleton h-5 w-40" />
                        <div className="skeleton h-6 w-24" />
                        <div className="skeleton h-3 w-full" />
                        <div className="skeleton h-3 w-3/4" />
                    </div>
                ))}
            </div>
        </div>
    );
}
