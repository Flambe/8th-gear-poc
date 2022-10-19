export const SidebarUserArea = () => {
  const avatarUrl = 'https://cdn.discordapp.com/avatars/165930869754691584/a_2d0fec2de1c79cd3368d171a298b4cb5.gif';
  const username = 'flambe';

  return (
    <div class="flex gap-4 items-center p-2 bg-black/25">
      <div class="flex rounded-full">
        <img
          class="h-10 w-10 rounded-full"
          src={avatarUrl}
          alt={`Avatar for ${username}`}
        />
      </div>

      <span>flambe</span>
    </div>
  );
};
