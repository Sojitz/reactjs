import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [isDkoalam, setIsDkoalamOpen] = useState(false);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setIsContactOpen(false);
      setIsButtonOpen(false);
      setIsDkoalamOpen(false);
    }
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full bg-[#704c39] transition-all duration-300 ease-in-out z-60 ${
          sidebarOpen ? "w-52" : "w-14"
        }`}
      >
        <div
          className="absolute top-3 right-[6px] text-white text-2xl p-2 rounded-r cursor-pointer z-30"
          onClick={toggleSidebar}
        >
          &#9776;
        </div>

        {sidebarOpen && (
          <div className="flex flex-col items-center justify-between space-y-4 mt-20">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="w-45 bg-[#d2b49c] text-[#4c2a17] py-3 rounded-xl hover:bg-[#b89b84] cursor-pointer"
            >
              Contact Us
            </button>

            {isContactOpen && (
              <div className="mt-2 bg-[#f0e6dd] p-4 rounded-xl shadow-inner transition-all duration-300">
                <p className="text-[#4c2a17]">
                  You can reach us at: <br />
                  📧 email@example.com <br />
                  📞 (123) 456-7890
                </p>
              </div>
            )}

            <button
              onClick={() => setIsButtonOpen(!isButtonOpen)}
              className="w-45 bg-[#d2b49c] text-[#4c2a17] py-3 rounded-xl hover:bg-[#b89b84] cursor-pointer"
            >
              58504A
            </button>
            {isButtonOpen && (
              <div className="mt-2 bg-[#f0e6dd] p-4 rounded-xl shadow-inner transition-all duration-300">
                <p className="text-[#4c2a17]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, dolorem porro, facilis labore possimus incidunt
                  consequuntur, nihil laudantium similique quis doloremque eius
                  aliquam dolores enim quasi autem nesciunt officia tenetur.
                </p>
              </div>
            )}

            <button
              onClick={() => setIsDkoalamOpen(!isDkoalam)}
              className="w-45 bg-[#d2b49c] text-[#4c2a17] py-3 rounded-xl hover:bg-[#b89b84] cursor-pointer"
            >
              Contact Us
            </button>
            {isDkoalam && (
              <div className="mt-2 bg-[#f0e6dd] p-4 rounded-xl shadow-inner transition-all duration-300">
                <p className="text-[#4c2a17]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, dolorem porro, facilis labore possimus incidunt
                  consequuntur, nihil laudantium similique quis doloremque eius
                  aliquam dolores enim quasi autem nesciunt officia tenetur.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
