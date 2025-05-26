import React from 'react';
import { BsFillCloudRainFill, BsFillSunFill, BsCloudyFill, BsCloudFog2Fill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import type { IconBaseProps } from 'react-icons';

export const iconChanger = (
  weather: string
): { icon: React.ReactElement; color: string } => {
  let iconElement: React.ReactElement;
  let iconColor: string;

  switch (weather) {
    case "Rain":
      iconElement = React.createElement(BsFillCloudRainFill as React.FC<IconBaseProps>);
      iconColor = "#272829";
      break;
    case "Clear":
      iconElement = React.createElement(BsFillSunFill as React.FC<IconBaseProps>);
      iconColor = "#FFC436";
      break;
    case "Clouds":
      iconElement = React.createElement(BsCloudyFill as React.FC<IconBaseProps>);
      iconColor = "#102C57";
      break;
    case "Mist":
      iconElement = React.createElement(BsCloudFog2Fill as React.FC<IconBaseProps>);
      iconColor = "#279EFF";
      break;
    default:
      iconElement = React.createElement(TiWeatherPartlySunny as React.FC<IconBaseProps>);
      iconColor = "#782869";
  }

  return { icon: iconElement, color: iconColor };
};