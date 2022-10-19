import { ServerCardSkeleton } from './ServerCardSkeleton';
import {
  createResource,
  For,
  Show,
} from 'solid-js';
import {
  getServers,
  Server,
} from '../../resources/getServers';
import { ServerCard } from './ServerCard';

export const ServerList = () => {
  const [data] = createResource<Server[]>(getServers);

  return (
    <div class="my-4 mr-4 w-full flex gap-4">
      <Show
        when={!data.loading}
        fallback={
          <>
            <ServerCardSkeleton/>
            <ServerCardSkeleton/>
            <ServerCardSkeleton/>
          </>
        }
      >
        <For<Server> each={data()}>
          {(server) => {
            return <ServerCard
              name={server.name}
              players={server.players}
              maxPlayers={server.maxPlayers}
              weather={server.weather}
              whitelist={server.whitelist}
              backgroundUrl={server.backgroundUrl}
            />;
          }}
        </For>
      </Show>
    </div>
  );
};
