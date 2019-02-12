import React from "react";
import { Svg } from 'expo';

const  { G, Path, Circle } = Svg;

export default {
  CelsiusViewBox: "0 0 32 32",
  Celsius: (
    <Path id="celsius-logo" d="M24.7,12.2c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6
        C24.4,11.6,24.7,11.9,24.7,12.2 M24.1,10.9c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4
        C25.5,11.5,24.8,10.9,24.1,10.9 M22.3,22.9c0.3-0.3,0.3-0.7,0.1-1c-0.3-0.3-0.7-0.3-1-0.1c-1.5,1.3-3.3,2-5.3,2
        c-4.4,0-7.9-3.5-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9c2,0,3.9,0.7,5.3,2c0.3,0.3,0.8,0.2,1-0.1c0.3-0.3,0.2-0.8-0.1-1
        c-1.7-1.6-4-2.4-6.3-2.4c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4C18.3,25.4,20.6,24.5,22.3,22.9 M16,1.5C8,1.5,1.5,8,1.5,16
        C1.5,24,8,30.5,16,30.5S30.5,24,30.5,16C30.5,8,24,1.5,16,1.5 M16,31.9C7.2,31.9,0.1,24.8,0.1,16C0.1,7.2,7.2,0.1,16,0.1
        S31.9,7.2,31.9,16C31.9,24.8,24.8,31.9,16,31.9"/>
  ),
  CloseViewBox: "-350 -350 1800 1800",
  Close: (
    <G>
      <Path d="M945.7,989.4L10,53.8L54.3,9.4L990,945.1L945.7,989.4z"/>
      <Path d="M10,946.2L945.7,10.6L990,54.9L54.3,990.6L10,946.2L10,946.2z"/>
    </G>
  ),
  IconArrowRight: (
    <Path id="icon-arrow-right" d="M22.5,12l-7.6-7.6l-0.3-0.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0
        c0,0,7.3,7.3,9.5,9.5c0.4,0.4,0.4,1,0,1.4c-2.2,2.2-9.2,9.2-9.5,9.5c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l7.9-7.9H1.2
        c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7C0.7,12.1,1,12,1.2,12H22.5z"/>
  ),
  EyeShowViewBox: "0 0 34.35 21.48",
  EyeShow: (
    <G>
      <Path
        d="M31.55,7,29.86,5.21A22.85,22.85,0,0,0,25.13,1.9,18,18,0,0,0,18,0a22.6,22.6,0,0,0-2.73.16c-4.28.6-8.46,3-12.43,7.1a1,1,0,0,0-.27.84,1,1,0,0,0,.27.9l1.73,1.69A22.59,22.59,0,0,0,9.24,14a18,18,0,0,0,7.15,1.9,22.72,22.72,0,0,0,2.73-.16c4.28-.59,8.46-3,12.43-7.09a1,1,0,0,0,.26-.85A1,1,0,0,0,31.55,7ZM18.87,13.76a22.18,22.18,0,0,1-2.44.14,15.63,15.63,0,0,1-6.28-1.69,20.4,20.4,0,0,1-4.25-3L4.8,8.11c3.49-3.44,7.09-5.46,10.7-6A22,22,0,0,1,17.94,2a15.63,15.63,0,0,1,6.28,1.69,20.66,20.66,0,0,1,4.25,3l1.08,1.1C26.08,11.23,22.48,13.25,18.87,13.76Z"/>
      <Circle cx="17.19" cy="7.85" r="4.02"/>
    </G>
  ),
  EyeHideViewBox: "0 0 34.35 21.48",
  EyeHide: (
    <G>
      <Path
        d="M29.45,8.13a.85.85,0,0,0-.61-.28.92.92,0,0,0-.63.26c-3.12,3.23-6.36,5.1-9.61,5.52a16.18,16.18,0,0,1-2.09.13,13.8,13.8,0,0,1-5.37-1.44A18.15,18.15,0,0,1,7.52,9.78L6.11,8.37a.79.79,0,0,0-.6-.26h0a.9.9,0,0,0-.66.25L.28,13.06a.86.86,0,0,0,1.22,1.2l4-4.08.84.87a19.59,19.59,0,0,0,3.17,2.33L6.43,17.69a.84.84,0,0,0,.18,1.18h0a.85.85,0,0,0,1.19-.2l3.23-4.52a15.12,15.12,0,0,0,4.58,1.25v5.26a.85.85,0,0,0,1.7,0v-5.2c.49,0,1-.06,1.48-.11A14.88,14.88,0,0,0,23.23,14l2.48,4.82a.86.86,0,0,0,.76.46.79.79,0,0,0,.4-.1A.85.85,0,0,0,27.23,18l-2.51-4.82A23.84,23.84,0,0,0,28.8,10l4,4.31a.85.85,0,1,0,1.25-1.16h0Z"/>
    </G>
  ),
  CaretDownViewBox: "0 0 14 8.77",
  CaretDown: <Path d="M.09,0C0,0,0,.05,0,.13L6.89,8.72a.13.13,0,0,0,.21,0L14,.13C14,.05,14,0,13.91,0Z"/>,
  CaretUpViewBox: "0 0 14 8.77",
  CaretUp: <Path d="M.09,0C0,0,0,.05,0,.13L6.89,8.72a.13.13,0,0,0,.21,0L14,.13C14,.05,14,0,13.91,0Z"/>,
  IconChevronLeftViewBox: "0 0 26 20",
  IconChevronLeft: (
    <G><Path
      d="M9.76.41.4,9.4a1.29,1.29,0,0,0,0,1.86l9.36,9a1.48,1.48,0,0,0,2.05-2.14L4,10.58a.35.35,0,0,1,0-.5l7.84-7.53a1.48,1.48,0,0,0-1-2.55A1.51,1.51,0,0,0,9.76.41Z"/></G>
  ),
  WarningCircleViewBox: "0 0 29 29",
  WarningCircle: (
    <G>
      <Path
            d="M14.5,0A14.5,14.5,0,1,0,29,14.5,14.5,14.5,0,0,0,14.5,0Zm7.15,19.56a2.14,2.14,0,0,1-1.89,1.09H8.5a2.19,2.19,0,0,1-1.91-3.27l5.63-9.92a2.2,2.2,0,0,1,3.82,0l5.63,9.92A2.15,2.15,0,0,1,22,18.45,2.24,2.24,0,0,1,21.65,19.56Z"/>
      <Path className="cls-2"
            d="M20.54,18,14.91,8.1a.9.9,0,0,0-1.56,0L7.72,18a.86.86,0,0,0,0,.89.87.87,0,0,0,.77.44H19.76a.87.87,0,0,0,.77-.44A.91.91,0,0,0,20.54,18Zm-5.76-.58a.65.65,0,0,1-1.3,0v-.15a.65.65,0,0,1,1.3,0Zm0-2.11a.65.65,0,1,1-1.3,0V10.84a.65.65,0,0,1,1.3,0Z"/>
    </G>
  ),
  CheckCircleViewBox: "0 0 29 29",
  CheckCircle: <Path d="M14.5,0A14.5,14.5,0,1,0,29,14.5,14.5,14.5,0,0,0,14.5,0Zm8.23,9.92L13,20.74a.42.42,0,0,1-.28.14h0l-.1,0a.4.4,0,0,1-.2-.09L6.53,15.51a.47.47,0,0,1-.14-.29.44.44,0,0,1,.11-.29l1-1.12a.41.41,0,0,1,.58,0l4.41,4L21,8.35a.41.41,0,0,1,.58,0l1.12,1a.37.37,0,0,1,.13.28A.41.41,0,0,1,22.73,9.92Z"/>,
  InfoCircleViewBox: "0 0 29 29",
  InfoCircle: <Path d="M14.5,0A14.5,14.5,0,1,0,29,14.5,14.5,14.5,0,0,0,14.5,0Zm-.07,6.75a1,1,0,0,1,1,.92.89.89,0,0,1-.88.91h-.07a.92.92,0,1,1,0-1.83Zm1.4,16.45H13.17a.87.87,0,1,1,0-1.73h.46V12.53h-.46a.87.87,0,1,1,0-1.73H14.5a.87.87,0,0,1,.87.87v9.8h.46a.87.87,0,1,1,0,1.73Z"/>,
  CloseCircleViewBox: "0 0 29 29",
  CloseCircle: <Path d="M14.5,0A14.5,14.5,0,1,0,29,14.5,14.5,14.5,0,0,0,14.5,0Zm5.34,18.64a.85.85,0,0,1,0,1.2.82.82,0,0,1-.6.25.83.83,0,0,1-.6-.25l-4-4-4,4a.83.83,0,0,1-.6.25.82.82,0,0,1-.6-.25.85.85,0,0,1,0-1.2l4-4-4-4a.85.85,0,0,1,1.2-1.2l4,4,4-4a.85.85,0,1,1,1.2,1.2l-4,4Z"/>,
  SearchViewBox: "0 0 26 26",
  Search: <Path d="M15.19,14.85a7.94,7.94,0,1,0-.38.38A1.46,1.46,0,0,1,15,15,1.84,1.84,0,0,1,15.19,14.85Zm1.63.13,0,0L23,21.17a1.33,1.33,0,1,1-1.88,1.89L15,16.91l0-.05A9.39,9.39,0,1,1,16.82,15Z"/>,
  GreenCheckViewBox: "0 0 26 26",
  GreenCheck: <G>
      <Path fill="#4fb895" d="M13,0h0A13,13,0,1,1,0,13,13,13,0,0,1,13,0Z"/>
      <Path fill="#fff" d="M20,8.89l-.89-.81a.32.32,0,0,0-.46,0l-6.77,7.5L8.35,12.43a.33.33,0,0,0-.46,0l-.81.9a.36.36,0,0,0-.08.23.3.3,0,0,0,.11.23L11.75,18a.35.35,0,0,0,.16.08H12a.38.38,0,0,0,.23-.11L20,9.35a.29.29,0,0,0,.08-.23A.3.3,0,0,0,20,8.89" />
  </G>,
  CirclePlusViewBox: "0 0 14.34 14.34",
  CirclePlus: (
    <G>
      <Path d="M7.17,0a7.17,7.17,0,1,0,7.17,7.17A7.18,7.18,0,0,0,7.17,0Zm0,13.74a6.57,6.57,0,1,1,6.57-6.57A6.58,6.58,0,0,1,7.17,13.74Z"/>
      <Path d="M11.65,7.17a.32.32,0,0,1-.31.32H7.49v3.85a.32.32,0,0,1-.64,0V7.49H3a.32.32,0,0,1,0-.64H6.85V3a.32.32,0,0,1,.64,0V6.85h3.85A.32.32,0,0,1,11.65,7.17Z"/>
    </G>
  ),
  ReceiveArrowTransactionsViewBox: "0 0 17 20.54",
  ReceiveArrowTransactions: (
    <G>
      <Path
            d="M9.27,17.92l6.14-6.13.27-.26a.77.77,0,0,1,1.09,0,.75.75,0,0,1,0,1.09l-7.72,7.7a.78.78,0,0,1-1.1,0L.23,12.62a.75.75,0,0,1,0-1.09.77.77,0,0,1,1.09,0l6.4,6.38V.77A.78.78,0,0,1,8,.23.76.76,0,0,1,8.5,0,.74.74,0,0,1,9,.23a.74.74,0,0,1,.23.54Z"/>
    </G>
  ),
  FilterViewBox: "0 0 4.29 18",
  Filter: (
    <G>
      <Circle cx="2.14" cy="15.86" r="2.14"/>
      <Circle cx="2.14" cy="9" r="2.14"/>
      <Circle cx="2.14" cy="2.14" r="2.14"/>
    </G>
  ),
  NewWindowIconViewBox: "0 0 12.89 12.87",
  NewWindowIcon: (
    <G>
      <Path
            d="M11.68,6.28v4.14a2.44,2.44,0,0,1-2.43,2.45H2.45A2.44,2.44,0,0,1,0,10.44V3.64A2.44,2.44,0,0,1,2.43,1.19H6.6a.55.55,0,0,1,.56.54v0a.56.56,0,0,1-.55.57H2.45a1.31,1.31,0,0,0-1.32,1.3v6.8a1.31,1.31,0,0,0,1.3,1.32h6.8a1.31,1.31,0,0,0,1.32-1.3V6.28a.56.56,0,0,1,.55-.57h0a.56.56,0,0,1,.56.56Z"/>
      <Path
            d="M12.89.4V4a.59.59,0,0,1-.57.57A.56.56,0,0,1,11.76,4V1.94L6.56,7.12a.56.56,0,0,1-.79-.79L11,1.13H8.86A.56.56,0,0,1,8.29.58h0A.56.56,0,0,1,8.84,0h3.65A.4.4,0,0,1,12.89.4Z"/>
    </G>
  ),
};