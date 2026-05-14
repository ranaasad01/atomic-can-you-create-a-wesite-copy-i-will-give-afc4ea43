"use client";

import { useState } from "react";
export const dynamic = "force-dynamic";

const INITIAL_TASKS = [
  { id: 1, title: "Fix leaking kitchen pipe", location: "DHA, Lahore", budget: "Rs 1,500", time: "2 hours ago", offers: 3, icon: "🔧" },
  { id: 2, title: "Create a logo for my bakery", location: "Remote", budget: "Rs 3,000", time: "5 hours ago", offers: 7, icon: "🎨" },
  { id: 3, title: "Move furniture to new apartment", location: "Gulshan, Karachi", budget: "Rs 5,000", time: "1 day ago", offers: 2, icon: "🚚" },
  { id: 4, title: "Teach my son Maths (Grade 8)", location: "F-10, Islamabad", budget: "Rs 2,000/session", time: "3 hours ago", offers: 5, icon: "📚" },
];

const CATEGORIES = [
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
];

const CATEGORY_ICONS: Record<string, string> = {
  "Home Repairs": "🔧",
  "Cleaning": "🧹",
  "Delivery & Moving": "🚚",
  "IT & Tech": "💻",
  "Tutoring": "📚",
  "Design & Creative": "🎨",
  "Gardening": "🌿",
  "Cooking & Catering": "🍳",
  "Photography": "📷",
  "Electrical Work": "🔌",
  "Other": "📋",
};

export default function Page() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState<number | null>(null);
  const [showAuthModal, setShowAuthModal] = useState<"login" | "signup" | null>(null);
  const [showTaskerModal, setShowTaskerModal] = useState(false);
  const [heroSearch, setHeroSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  // Post Task Form
  const [postForm, setPostForm] = useState({
    title: "",
    location: "",
    budget: "",
    category: "Other",
    description: "",
  });

  // Offer Form
  const [offerAmount, setOfferAmount] = useState("");
  const [offerNote, setOfferNote] = useState("");

  // Auth Form
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "" });

  // Tasker Form
  const [taskerForm, setTaskerForm] = useState({ name: "", skill: "", city: "", phone: "" });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handlePostTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postForm.title.trim() || !postForm.location.trim() || !postForm.budget.trim()) return;
    const newTask = {
      id: Date.now(),
      title: postForm.title,
      location: postForm.location,
      budget: postForm.budget.startsWith("Rs") ? postForm.budget : `Rs ${postForm.budget}`,
      time: "Just now",
      offers: 0,
      icon: CATEGORY_ICONS[postForm.category] || "📋",
    };
    setTasks([newTask, ...tasks]);
    setPostForm({ title: "", location: "", budget: "", category: "Other", description: "" });
    setShowPostModal(false);
    showToast("✅ Task posted successfully!");
  };

  const handleMakeOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerAmount.trim()) return;
    setTasks(tasks.map((t) =>
      t.id === showOfferModal ? { ...t, offers: t.offers + 1 } : t
    ));
    setOfferAmount("");
    setOfferNote("");
    setShowOfferModal(null);
    showToast("🎉 Offer submitted successfully!");
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const action = showAuthModal === "login" ? "Logged in" : "Account created";
    setAuthForm({ name: "", email: "", password: "" });
    setShowAuthModal(null);
    showToast(`✅ ${action} successfully!`);
  };

  const handleTaskerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskerForm.name.trim() || !taskerForm.skill.trim()) return;
    setTaskerForm({ name: "", skill: "", city: "", phone: "" });
    setShowTaskerModal(false);
    showToast("🎉 You're now registered as a Tasker!");
  };

  const handleHeroPost = () => {
    if (heroSearch.trim()) {
      setPostForm({ ...postForm, title: heroSearch });
      setHeroSearch("");
    }
    setShowPostModal(true);
  };

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || t.icon === CATEGORY_ICONS[filterCategory];
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-[100] bg-gray-900 text-white text-sm px-5 py-3 rounded-2xl shadow-lg animate-pulse">
          {toast}
        </div>
      )}

      {/* Post Task Modal */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Post a Task</h2>
              <button onClick={() => setShowPostModal(false)} className="text-gray-400 hover:text-gray-700 text-xl font-bold">×</button>
            </div>
            <form onSubmit={handlePostTask} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Task Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Fix my kitchen sink"
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Category</label>
                <select
                  value={postForm.category}
                  onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  {[...CATEGORIES.map((c) => c.label), "Other"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Location *</label>
                <input
                  type="text"
                  placeholder="e.g. DHA, Lahore or Remote"
                  value={postForm.location}
                  onChange={(e) => setPostForm({ ...postForm, location: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Budget *</label>
                <input
                  type="text"
                  placeholder="e.g. 2000 or 500/hour"
                  value={postForm.budget}
                  onChange={(e) => setPostForm({ ...postForm, budget: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Description (optional)</label>
                <textarea
                  placeholder="Describe your task in more detail..."
                  value={postForm.description}
                  onChange={(e) => setPostForm({ ...postForm, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-full hover:bg-green-700 transition text-sm"
              >
                Post Task
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Make Offer Modal */}
      {showOfferModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Make an Offer</h2>
              <button onClick={() => setShowOfferModal(null)} className="text-gray-400 hover:text-gray-700 text-xl font-bold">×</button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Task: <span className="font-semibold text-gray-700">{tasks.find((t) => t.id === showOfferModal)?.title}</span>
            </p>
            <form onSubmit={handleMakeOffer} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Your Offer Amount (Rs) *</label>
                <input
                  type="number"
                  placeholder="e.g. 1500"
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  min="1"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Note (optional)</label>
                <textarea
                  placeholder="Tell the customer why you're the best fit..."
                  value={offerNote}
                  onChange={(e) => setOfferNote(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-full hover:bg-green-700 transition text-sm"
              >
                Submit Offer
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">
                {showAuthModal === "login" ? "Log In" : "Create Account"}
              </h2>
              <button onClick={() => setShowAuthModal(null)} className="text-gray-400 hover:text-gray-700 text-xl font-bold">×</button>
            </div>
            <form onSubmit={handleAuth} className="space-y-4">
              {showAuthModal === "signup" && (
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={authForm.name}
                    onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
              )}
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Email *</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={authForm.email}
                  onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Password *</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  minLength={6}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-full hover:bg-green-700 transition text-sm"
              >
                {showAuthModal === "login" ? "Log In" : "Sign Up"}
              </button>
              <p className="text-xs text-center text-gray-500">
                {showAuthModal === "login" ? (
                  <>Don't have an account?{" "}
                    <button type="button" onClick={() => setShowAuthModal("signup")} className="text-green-600 font-semibold hover:underline">Sign Up</button>
                  </>
                ) : (
                  <>Already have an account?{" "}
                    <button type="button" onClick={() => setShowAuthModal("login")} className="text-green-600 font-semibold hover:underline">Log In</button>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Become a Tasker Modal */}
      {showTaskerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Become a Tasker</h2>
              <button onClick={() => setShowTaskerModal(false)} className="text-gray-400 hover:text-gray-700 text-xl font-bold">×</button>
            </div>
            <form onSubmit={handleTaskerSignup} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={taskerForm.name}
                  onChange={(e) => setTaskerForm({ ...taskerForm, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Your Skill / Service *</label>
                <select
                  value={taskerForm.skill}
                  onChange={(e) => setTaskerForm({ ...taskerForm, skill: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                >
                  <option value="">Select a skill</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.label} value={c.label}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">City</label>
                <input
                  type="text"
                  placeholder="e.g. Lahore"
                  value={taskerForm.city}
                  onChange={(e) => setTaskerForm({ ...taskerForm, city: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  value={taskerForm.phone}
                  onChange={(e) => setTaskerForm({ ...taskerForm, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-full hover:bg-green-700 transition text-sm"
              >
                Register as Tasker
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-green-600">Kaam</span>
            <span className="text-2xl font-extrabold text-gray-800">Karo</span>
            <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Pakistan</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <button onClick={() => { document.getElementById("browse-tasks")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-green-600 transition">Browse Tasks</button>
            <button onClick={() => { document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-green-600 transition">How It Works</button>
            <button onClick={() => { document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-green-600 transition">Categories</button>
            <button onClick={() => setShowTaskerModal(true)} className="hover:text-green-600 transition">Become a Tasker</button>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowAuthModal("login")} className="text-sm font-medium text-gray-700 hover:text-green-600 transition px-3 py-1.5">Log In</button>
            <button onClick={() => setShowAuthModal("signup")} className="text-sm font-semibold bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Sign Up</button>
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
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleHeroPost()}
              className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleHeroPost}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition"
            >
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
      <section id="categories" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Popular Categories</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Find help for any kind of task</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                onClick={() => {
                  setFilterCategory(cat.label);
                  document.getElementById("browse-tasks")?.scrollIntoView({ behavior: "smooth" });
                }}
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
      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
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
                action: () => setShowPostModal(true),
                actionLabel: "Post a Task",
              },
              {
                step: "2",
                title: "Get Offers",
                desc: "Verified local Taskers will send you their best offers. Compare profiles, reviews and prices.",
                icon: "📬",
                action: null,
                actionLabel: null,
              },
              {
                step: "3",
                title: "Get It Done",
                desc: "Choose your Tasker, chat to confirm details, and pay securely after the job is complete.",
                icon: "✅",
                action: null,
                actionLabel: null,
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                {item.action && (
                  <button
                    onClick={item.action}
                    className="text-sm text-green-600 border border-green-300 rounded-full px-4 py-1.5 hover:bg-green-50 transition font-medium"
                  >
                    {item.actionLabel}
                  </button>
                )}
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
                  {"★".repeat(Math.floor(tasker.