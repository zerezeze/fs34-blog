export default function PostHeader() {
    return (
        <div className="flex items-center space-x-4 font-mono mt-5 ml-5">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src="src/public/pexels-photo-5082976.webp" alt="Avatar" />
          </div>
          <a href="#" className="text-sm underline">Fulano de tal</a>
          <span>-</span>
          <span className="text-sm">20/10/2024</span>
        </div>
      );
    };