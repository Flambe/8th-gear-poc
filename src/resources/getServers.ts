import url from '../assets/json/serverList.json?url';

export interface Server {
  name: string;
  players: number;
  weather: string;
  whitelist?: string;
  maxPlayers?: number;
  backgroundUrl?: string;
}

export async function getServers(): Promise<Server[]> {
  const response = await fetch(url);

  await new Promise(resolve => setTimeout(resolve, 2_000));

  return response.json();
}
