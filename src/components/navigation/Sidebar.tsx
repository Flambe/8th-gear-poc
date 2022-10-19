import { SidebarItem } from './SidebarItem';
import { SidebarUserArea } from './SidebarUserArea';

export const Sidebar = () => {
  return (
    <div class="bg-sky-900 text-white text-lg w-60 flex flex-col justify-between">
      <ul class="list-none">
        <li class="pb-2 bg-black/25">
          <img src="/src/assets/8thgearfull.svg" alt="8th Gear Racing logo" />
        </li>

        <SidebarItem label="Servers" icon="fa-server" />

        <SidebarItem label="Tracks" icon="fa-map" />

        <SidebarItem label="Cars" icon="fa-cars" />

        <SidebarItem label="Laptimes" icon="fa-stopwatch" />

        <SidebarItem label="Race results" icon="fa-flag-checkered" />
      </ul>

      <SidebarUserArea />
    </div>
  )
}
