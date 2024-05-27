import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main id="content">
      <nav className="sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-4 md:pb-3 -mt-px  dark:border-neutral-400 dark:shadow-neutral-400/70" aria-label="Jump links">
        <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Dashboard</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Users</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Account</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Projects</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Calendar</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
              Documentation
              <span className="inline bg-gray-100 text-xs text-gray-500 font-semibold rounded-full py-1 px-2 dark:bg-neutral-700 dark:text-neutral-400">v12.7</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl min-h-[75rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Your content goes here... */}
      </div>
    </main>
  );
};

export default MainContent;
