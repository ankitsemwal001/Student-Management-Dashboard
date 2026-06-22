const Explore = ({ search, setSearch }) => {
    return (
        <div className="mt-8">
            <div className="w-full gap-3 flex">
                <input
                    type="search"
                    placeholder="🔍 Search by name"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className="border p-1 w-1/4 rounded">
                    All Courses
                </button>
            </div>
        </div>
    );
};

export default Explore;