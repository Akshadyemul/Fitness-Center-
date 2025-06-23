function JoinModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-slate-900/80 w-full max-w-md mx-auto rounded-2xl shadow-lg p-8 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-white text-xl font-bold hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">Join FitCenter</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full text-white px-4 py-2 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border text-white rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 text-white border rounded-md" />
          <button type="submit" className="w-full border text-white py-2 rounded-lg hover:bg-gray-700">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinModal
