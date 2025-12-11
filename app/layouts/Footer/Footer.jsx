export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#F47555] text-white py-3 px-6 flex flex-col gap-2 md:hidden shadow-t">

      {/* Groupe principal de liens */}
      <div className="flex flex-col gap-1 text-sm">
        <a href="#" className="hover:underline">Confidentialité</a>
        <a href="#" className="hover:underline">Mentions légales</a>
        <a href="#" className="hover:underline">Conditions d'utilisation</a>
        <a href="#" className="hover:underline">Cookies</a>
        <a href="#" className="hover:underline">Support</a>
      </div>

      {/* Ligne de copyright */}
      <div className="text-xs text-white pt-1 border-t border-gray-200">
        © {new Date().getFullYear()} TonSite — Tous droits réservés.
      </div>
    </footer>
  );
}
