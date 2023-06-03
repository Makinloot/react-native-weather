import cloudy from "./assets/day/cloudy.jpg";
import heavyRain from "./assets/day/heavy_rain.jpg";
import heavySnow from "./assets/day/heavy_snow.jpg";
import lightRain from "./assets/day/light_rain.jpg";
import lightSnow from "./assets/day/light_snow.jpg";
import lightThunder from "./assets/day/light_thunder.jpg";
import mist from "./assets/day/mist.jpg";
import sunny from "./assets/day/sunny.jpg";
import thunderyOutbreak from "./assets/day/thundery_outbreak.jpg";
import clear from "./assets/night/clear.jpg";
import cloudyNight from "./assets/night/cloudy.jpg";
import heavyRainNight from "./assets/night/heavy_rain.jpg";
import lightRainNight from "./assets/night/light_rain.jpg";
import lightSnowNight from "./assets/night/light_snow.jpg";
import mistNight from "./assets/night/mist.jpg";
import thunderyOutbreakNight from "./assets/night/thundery_outbreak.jpg";

export default function background(bgId, bgIdDay) {

  if(bgId == 113) {
    // sunny / clear
    if (bgIdDay == "day") return sunny
    else return clear
  } else if (bgId >= 116 && bgId <= 122) {
    // CLOUDY
    if (bgIdDay == "day") return cloudy
    else return cloudyNight
  } else if (bgId == 143 || bgId == 248 || bgId == 260) {
    // mist
    if (bgIdDay == "day") return mist
    else return mistNight
  } else if (bgId == 176 || bgId == 185 || bgId == 311 || bgId == 353 || (bgId >= 263 && bgId <= 284) || (bgId >= 293 && bgId <= 302) || (bgId >= 317 && bgId <= 320)) {
    // light/medium rain
    if (bgIdDay == "day") return lightRain
    else return lightRainNight
  } else if (bgId == 182 || bgId == 314 || bgId == 350 || (bgId >= 305 && bgId <= 308) || (bgId >= 356 && bgId <= 359) || (bgId >= 374 && bgId <= 377)) {
    // heavy rain
    if (bgIdDay == "day") return heavyRain
    else return heavyRainNight
  } else if (bgId == 386 || bgId == 389) {
    // background image rain with thunder
    if (bgIdDay == "day") return lightThunder
    else  return lightRainNight
  } else if (bgId == 200) {
    // thundery outbreak image
    if (bgIdDay == "day") return thunderyOutbreak
    else return thunderyOutbreakNight
  } else if (bgId == 179 || (bgId >= 323 && bgId <= 329) || (bgId >= 362 && bgId <= 368) || bgId == 392) {
    // light snow
    if (bgIdDay == "day") return lightSnow
    else return lightSnowNight
  } else if ((bgId >= 227 && bgId <= 330) || (bgId >= 332 && bgId <= 338) || bgId == 371 || bgId == 395) {
    // heavy snow
    if (bgIdDay == "day") return heavySnow
    else  return heavyRainNight
  }
}