export function Footer() {
  return (
    <footer className="w-full bg-[#f2f2f2] border-t border-[#333333]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-[#333333] text-sm sm:text-base text-center sm:text-left">
            © 2025 Rardi • The world's first on-prem AI Network Technician.
          </p>
          <div className="flex gap-4 sm:gap-6 lg:gap-8">
            <a href="mailto:team@rardi.io" className="text-[#333333] hover:underline text-sm sm:text-base">
              team@rardi.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}