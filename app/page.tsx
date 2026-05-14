export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-green-600">Kaam</span>
            <span className="text-2xl font-extrabold text-gray-800">Karo</span>
            <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Pakistan</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-green-600 transition">Browse Tasks</a>
            <a href="#" className="hover:text-green-600 transition">How It Works</a>
            <a href="#" className="hover:text-green-600 transition">Categories</a>
            <a href="#" className="hover:text-green-600 transition">Become a Tasker</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-green-600 transition px-3 py-1.5">Log In</button>
            <button className="text-sm font-semibold bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Get Any Task Done <span className="text-green-600">Across Pakistan</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Connect with skilled local Taskers for everyday jobs — from home repairs to digital work, deliveries to tutoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition">
              Post a Task
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Free to post · Get offers within minutes · Pay only when done</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-green-600 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center text-white">
          <div>
            <p className="text-2xl font-extrabold">50,000+</p>
            <p className="text-sm opacity-80">Tasks Completed</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold">15,000+</p>
            <p className="text-sm opacity-80">Verified Taskers</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold">30+</p>
            <p className="text-sm opacity-80">Cities Covered</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Popular Categories</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Find help for any kind of task</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { icon: "🔧", label: "Home Repairs" },
              { icon: "🧹", label: "Cleaning" },
              { icon: "🚚", label: "Delivery & Moving" },
              { icon: "💻", label: "IT & Tech" },
              { icon: "📚", label: "Tutoring" },
              { icon: "🎨", label: "Design & Creative" },
              { icon: "🌿", label: "Gardening" },
              { icon: "🍳", label: "Cooking & Catering" },
              { icon: "📷", label: "Photography" },
              { icon: "🔌", label: "Electrical Work" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="flex flex-col items-center justify-center gap-2 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-green-300 cursor-pointer transition"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">How It Works</h2>
          <p className="text-center text-gray-500 text-sm mb-12">Three simple steps to get your task done</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Post Your Task",
                desc: "Describe what you need done, when, and your budget. It's free and takes less than 2 minutes.",
                icon: "📝",
              },
              {
                step: "2",
                title: "Get Offers",
                desc: "Verified local Taskers will send you their best offers. Compare profiles, reviews and prices.",
                icon: "📬",
              },
              {
                step: "3",
                title: "Get It Done",
                desc: "Choose your Tasker, chat to confirm details, and pay securely after the job is complete.",
                icon: "✅",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Taskers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Top Taskers Near You</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Trusted professionals ready to help</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Ali Raza", skill: "Plumber", city: "Lahore", rating: 4.9, jobs: 132, img: "AR" },
              { name: "Fatima Noor", skill: "Home Cleaner", city: "Karachi", rating: 4.8, jobs: 98, img: "FN" },
              { name: "Usman Khan", skill: "Electrician", city: "Islamabad", rating: 4.7, jobs: 214, img: "UK" },
              { name: "Sara Ahmed", skill: "Graphic Designer", city: "Lahore", rating: 5.0, jobs: 67, img: "SA" },
            ].map((tasker) => (
              <div key={tasker.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-200 text-green-800 flex items-center justify-center font-bold text-sm">
                    {tasker.img}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{tasker.name}</p>
                    <p className="text-xs text-gray-500">{tasker.skill}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
                  {"★".repeat(Math.floor(tasker.rating))}
                  <span className="text-gray-600 text-xs ml-1">{tasker.rating}</span>
                </div>
                <p className="text-xs text-gray-500">{tasker.jobs} tasks · {tasker.city}</p>
                <button className="mt-3 w-full text-sm text-green-600 border border-green-300 rounded-full py-1.5 hover:bg-green-50 transition font-medium">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tasks */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Recent Tasks Posted</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Jump in and offer your skills</p>
          <div className="space-y-4">
            {[
              { title: "Fix leaking kitchen pipe", location: "DHA, Lahore", budget: "Rs 1,500", time: "2 hours ago", offers: 3, icon: "🔧" },
              { title: "Create a logo for my bakery", location: "Remote", budget: "Rs 3,000", time: "5 hours ago", offers: 7, icon: "🎨" },
              { title: "Move furniture to new apartment", location: "Gulshan, Karachi", budget: "Rs 5,000", time: "1 day ago", offers: 2, icon: "🚚" },
              { title: "Teach my son Maths (Grade 8)", location: "F-10, Islamabad", budget: "Rs 2,000/session", time: "3 hours ago", offers: 5, icon: "📚" },
            ].map((task) => (
              <div key={task.title} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{task.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{task.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">📍 {task.location} · {task.time}</p>
                  </div>
                </div>
                <div className="text-right ml-4 shrink-0">
                  <p className="text-green-600 font-bold text-sm">{task.budget}</p>
                  <p className="text-xs text-gray-400">{task.offers} offers</p>
                  <button className="mt-2 text-xs bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition">
                    Make Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">What People Are Saying</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Loved by thousands across Pakistan</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Hamza Iqbal",
                city: "Lahore",
                quote: "Found a great plumber within 30 minutes. Highly recommend KaamKaro to everyone!",
                rating: 5,
              },
              {
                name: "Amna Siddiqui",
                city: "Karachi",
                quote: "As a freelance designer, KaamKaro has given me consistent work. Amazing platform!",
                rating: 5,
              },
              {
                name: "Bilal Chaudhry",
                city: "Islamabad",
                quote: "Super easy to post a task. Got 5 offers in an hour and hired the best one seamlessly.",
                rating: 4,
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-yellow-500 text-sm mb-2">{"★".repeat(t.rating)}</div>
                <p className="text-gray-600 text-sm italic mb-4">"{t.quote}"</p>
                <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-400">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-3">Ready to get things done?</h2>
        <p className="text-green-100 text-sm mb-6 max-w-xl mx-auto">
          Whether you need help or want to earn money using your skills — KaamKaro is Pakistan's #1 task marketplace.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition text-sm">
            Post a Task
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-green-700 transition text-sm">
            Become a Tasker
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-white font-extrabold text-lg mb-2">
              <span className="text-green-400">Kaam</span>Karo
            </p>
            <p className="text-sm">Pakistan's trusted marketplace for local tasks and services.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-sm">For Customers</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Post a Task</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Browse Taskers</a></li>
              <li><a href="#" className="hover:text-green-400 transition">How It Works</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-sm">For Taskers</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Sign Up as Tasker</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Browse Tasks</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Tasker Insurance</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-sm">Company</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} KaamKaro Pakistan. All rights reserved.
        </div>
      </footer>
    </main>
  );
}