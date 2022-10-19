interface ServerCardWeatherItemProps {
  weather: string;
}

interface WeatherType {
  label: string;
  icon: string;
  colour?: string;
}

const weatherTypes: Record<string, WeatherType> = {
  sunny: {
    label: 'Sunny',
    icon: 'fa-sun',
    colour: 'yellow-400',
  },
  raining : {
    label: 'Raining',
    icon: 'fa-cloud-showers',
  }
};

export const ServerCardWeatherItem = (props: ServerCardWeatherItemProps) => {
  const weather = weatherTypes[props.weather];

  return (
    <span class={'flex items-center gap-2'}>
      <i class={`text-${weather.colour} fa-fw fa-duotone ${weather.icon}`}/> <span class={'text-sm'}>{weather.label}</span>
    </span>
  )
}
