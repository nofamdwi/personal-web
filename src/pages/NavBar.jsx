import ThemeSwitcher from "../components/ThemeSwitcher";

export default function NavBar() {
    return (
        <nav className="md:sticky top-0 z-10 border-b-0 shadow-md dark:shadow-white">
            <div className="flex justify-between px-44 mx-28 md:flex-row items-center dark:text-white">
                <div className="text-2xl font-bold font">
                    <img src="" alt="" />
                    <span>Fams</span>
                </div>
                <ul className="flex flex-row gap-14 py-10 text-sm font-light">
                    <li>
                        <a href="" className="px-5 py-1 rounded-md transition ease-in delay-100 active:bg-slate-500 hover:bg-slate-300 hover:translate-y-1 hover:scale-110 duration-200 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="px-5 py-1 rounded-md transition ease-in delay-100 active:bg-slate-500 hover:bg-slate-300 hover:translate-y-1 hover:scale-110 duration-200 ">Skills</a>
                    </li>
                    <li>
                        <a href="" className="px-5 py-1 rounded-md transition ease-in delay-100 active:bg-slate-500 hover:bg-slate-300 hover:translate-y-1 hover:scale-110 duration-200 ">Portfolio</a>
                    </li>
                    <li>
                        <a href="" className="px-5 py-1 rounded-md transition ease-in delay-100 active:bg-slate-500 hover:bg-slate-300 hover:translate-y-1 hover:scale-110 duration-200 ">Contact</a>
                    </li>
                </ul>
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
