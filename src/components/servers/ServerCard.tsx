import { Show } from 'solid-js';
import { ServerCardWeatherItem } from './ServerCardWeatherItem';
import { Server } from '../../resources/getServers';

export const ServerCard = (props: Server) => {
  const cardStyle = {
    'background-image': props.backgroundUrl ? `url(${props.backgroundUrl})` : undefined,
  };

  return (
    <div
      class={`bg-sky-900 text-white h-48 w-80 rounded-lg hover:bg-sky-800 cursor-pointer bg-cover`}
      style={cardStyle}
    >
      <div class={`py-2 pl-4 pr-2 ${props.backgroundUrl ? 'bg-black/40 hover:bg-black/30' : ''} rounded-lg h-full`}>
      <div class={'flex justify-between items-center mb-4'}>
        <span class={'text-xl font-semibold'}>{props.name}</span>

        <button
          class="rounded-md bg-green-400 py-1 px-3 text-[0.8125rem] text-black font-semibold hover:bg-green-500"
        >
          Join
        </button>
      </div>

      <div class={'flex flex-col gap-2'}>
        <span class={'flex items-center gap-2'}>
          <i class={'fa-duotone fa-fw fa-users'}/> <span class={'text-sm'}>{props.players} / {props.maxPlayers || '🤷'} players</span>
        </span>

        <ServerCardWeatherItem weather={props.weather} />

        <Show
          when={props.whitelist}
        >
          <span class={'flex items-center gap-2 rounded bg-orange-700 p-2 '}>
            <i class={'fa-fw fa-duotone fa-lock'}/> <span class={'text-sm'}>{props.whitelist} whitelist only</span>
          </span>
        </Show>
      </div>
      </div>
    </div>
  );
};
