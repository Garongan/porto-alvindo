import { Profile } from "./Profile";
import { Skills } from "./Skills";


export const Sidebar = () => {
    return (
        <aside className="md:col-span-1">
            {/* Profile Section */}
            < Profile />
            {/* Skills Section */}
            <Skills />
        </aside>
    )
}