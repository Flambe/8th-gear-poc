import { For } from 'solid-js';

export const ServerCardSkeleton = () => {
  const itemCount = [0, 1];

  return (
    <div
      class={`bg-sky-900/80 h-48 w-80 rounded-lg`}
    >
      <div class={`py-2 pl-4 pr-2 rounded-lg h-full animate-pulse`}>
        <div class={'flex justify-between items-center mb-4'}>
          <div class="h-2 w-48 bg-white/25 rounded"></div>

          <div class="h-7 w-12 bg-green-400 rounded-md"></div>
        </div>

        <div class={'flex flex-col gap-2'}>
          <For<number> each={itemCount}>
            {() => {
              return (
                <span class={'flex items-center gap-2 h-5'}>
                  <div class="h-3 w-3 mx-1 bg-white/25 rounded" />

                  <div class="h-1 w-16 bg-white/25 rounded" />
                </span>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
};
