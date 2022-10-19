interface SidebarItemProps {
  label: string;
  icon: string;
  link?: string;
}

export const SidebarItem = (props: SidebarItemProps) => {
  return (
    <li class="px-4 py-3 hover:bg-black/20 cursor-pointer">
      <i class={`fa-duotone fa-fw mr-4 ${props.icon}`}></i>{props.label}
    </li>
  )
}
