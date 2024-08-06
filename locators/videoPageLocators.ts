export type VideoPageLocators = {
    container: string;
    controlsInner: string;
    volumeToggle: string;
    icon: string;
    unmutedClass: string;
    menu: string;
  };
  
  export const videoPageLocators: VideoPageLocators = {
    container: '.video__main.video__main_gold',
    controlsInner: '.video-purchase__controls-inner',
    volumeToggle: '.video-purchase__volume-toggle',
    icon: '.icon_player-mute',
    unmutedClass: 'video-purchase__volume-toggle_unmuted',
    menu: '.video__main.video__main_gold .video-purchase__menu',
  };
  