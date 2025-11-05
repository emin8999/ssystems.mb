import React from "react";
import insaat1 from '../../img/insaat1.jpg'
import insaat2 from '../../img/insaat2.jpg'
import insaat3 from '../../img/insaat3.jpg'
import insaat4 from '../../img/insaat4.jpg'
const BlogPage = () => {
    const posts = [
        {
          id: 1,
          title: "How Welding Shapes Modern Industry",
          description:
            "Discover how precision welding defines the durability and safety of modern infrastructure.",
          date: "03 Noyabr 2025",
          image:insaat1,
        },
        {
          id: 2,
          title: "Inside Our Latest Ship Repair Project",
          description:
            "A detailed look into how our team restored a 40-meter cargo vessel with cutting-edge methods.",
          date: "20 Oktyabr 2025",
          image:insaat2,
        },
        {
          id: 3,
          title: "Safety First: How We Keep Every Workplace Secure",
          description:
            "Our commitment to maintaining high safety standards across all operations.",
          date: "08 Sentyabr 2025",
          image:insaat3,
        },
        {
          id: 4,
          title: "Revolutionizing Construction Through Technology",
          description:
            "Learn how automation and smart tools are transforming the construction industry.",
          date: "28 Avqust 2025",
          image:insaat4,
        },
        {
          id: 5,
          title: "Meet the Team Behind Our Success",
          description:
            "Get to know the skilled engineers and technicians powering our best projects.",
          date: "12 Avqust 2025",
          image:insaat1,
        },
      ];
      

  const tags = ["marine", "teamwork", "innovation", "maintenance", "welding", "projects"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section
  className="relative bg-center bg-cover text-white py-24 text-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Dark Green Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#054E32]/90 via-[#0ED789]/60 to-[#054E32]/85"></div>

  {/* Hero Text */}
  <div className="relative z-10 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug drop-shadow-lg">
      Building the Future — One Weld at a Time.
    </h1>
    <p className="text-lg text-gray-100 max-w-2xl mx-auto">
      News, Tips, and Real Stories from the field — welding, construction,
      innovation, and teamwork shaping tomorrow’s infrastructure.
    </p>
  </div>
</section>


      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-4">
        {/* BLOG GRID */}
        <div className="lg:col-span-3 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-[#054E32] transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <button className="text-[#054E32] font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🧭 SIDEBAR */}
        <aside className="space-y-8">
          {/* 🔍 Search */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="font-semibold mb-3 text-[#054E32]">Search</h4>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#054E32]"
            />
          </div>

          {/* 📂 Categories */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="font-semibold mb-3 text-[#054E32]">Categories</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-[#054E32] cursor-pointer">Welding</li>
              <li className="hover:text-[#054E32] cursor-pointer">Construction</li>
              <li className="hover:text-[#054E32] cursor-pointer">Repair</li>
              <li className="hover:text-[#054E32] cursor-pointer">Safety</li>
              <li className="hover:text-[#054E32] cursor-pointer">Projects</li>
            </ul>
          </div>

          {/* 🕒 Recent Posts */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="font-semibold mb-3 text-[#054E32]">Recent Posts</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              {posts.slice(0, 4).map((post) => (
                <li
                  key={post.id}
                  className="hover:text-[#054E32] cursor-pointer border-b pb-1"
                >
                  {post.title}
                </li>
              ))}
            </ul>
          </div>

          {/* 🏷 Tag Cloud */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="font-semibold mb-3 text-[#054E32]">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#054E32]/10 text-[#054E32] px-3 py-1 text-xs font-medium rounded-full hover:bg-[#054E32]/20 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="flex justify-center py-20 bg-gray-50">
  <div className="bg-[#0ED789] text-white max-w-3xl w-full mx-4 rounded-2xl shadow-xl text-center p-10 transform ">
    <p className="text-2xl italic mb-6 font-medium">
      “Knowledge shared is power multiplied.”
    </p>
    <button className="bg-white text-[#0ED789] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-all duration-300">
      Follow Us for More Updates
    </button>
  </div>
</section>

    </div>
  );
};

export default BlogPage;
