import { createGlobalStyle, css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: "Gotham";
    src: url("../fonts/font/Gotham-Light.woff2") format("woff2"),
    url("../fonts/font/Gotham-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: "Gotham Book";
      src: url("../fonts/font/Gotham-Book.woff2") format("woff2"),
      url("../fonts/font/Gotham-Book.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: "Gotham";
      src: url("../fonts/font/Gotham-Bold.woff2") format("woff2"),
      url("../fonts/font/Gotham-Bold.woff") format("woff");
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: "Gotham";
      src: url("../fonts/font/Gotham-Medium.woff2") format("woff2"),
      url("../fonts/font/Gotham-Medium.woff") format("woff");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

`

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  	
  :root {
    --tertiary: #D94841;
    --primary-50: #F2FEFF;
    --primary-75: #D6F8FB;
    --primary-100: #BAF3F7;
    --primary-200: #85E9EF;
    --primary-300: #58DEE6;
    --primary-400: #36D1DA;
    --primary-500: #1FC1CA;
    --primary-700: #109BAA;
    --primary-800: #078699;
    --primary-900: #007187;
    --gray-900-–-text-content: #2C2C2C;
    --gray-800-–-text-content: #4B4B4B;
    --gray-700-–-text-content: #6E6E6E;
    --gray-600-–-placeholder-text: #8E8E8E;
    --gray-500-–-disabled-text: #B3B3B3;
    --gray-400: #CACACA;
    --gray-300: #E1E1E1;
    --gray-200: #EAEAEA;
    --gray-100-–-base-bg: #F5F5F5;
    --gray-75: #FAFAFA;
    --gray-50: #FFFFFF;
    --color-802f2d: #802F2D;
    --color-c6a1cf: #C6A1CF;
    --color-a05eb5: #A05EB5;
    --color-f0b323: #F0B323;
    --color-59cbe8: #59CBE8;
    --color-0085ca: #0085CA;
    --color-a72b2a: #A72B2A;
    --color-e1523d: #E1523D;
    --color-5a1e78: #5A1E78;
    --color-ed8b00: #ED8B00;
    --color-ffc72c: #FFC72C;
    --color-00a3e0: #00A3E0;
    --secondary: #004B44;
    --primary-600-base: #1AAEB7;
    --color-292929: #292929;

    
    --font-family-gotham: Gotham;
    --font-style-normal: normal;
    --font-weight-normal: normal;
    --font-weight-medium: medium;
    --font-weight-bold: bold;
    --font-size-12: 12px;
    --font-size-14: 14px;
    --font-size-16: 16px;
    --font-size-18: 18px;
    --font-size-20: 20px;
    --font-size-24: 24px;
    --font-size-30: 30px;
    --font-size-36: 36px;
    --font-size-48: 48px;
    --font-size-60: 60px;
    --font-size-72: 72px;
    --character-spacing--0-12: -0.12px;
    --character-spacing--0-28: -0.28px;
    --character-spacing--0-16: -0.16px;
    --character-spacing--0-18: -0.18px;
    --character-spacing--0-4: -0.4px;
    --character-spacing--0-72: -0.72px;
    --character-spacing--1-05: -1.05px;
    --character-spacing--1-44: -1.44px;
    --character-spacing--1-92: -1.92px;
    --character-spacing--2-4: -2.4px;
    --character-spacing--2-16: -2.16px;
    --character-spacing--0-32: -0.32px;
    --character-spacing--0-36: -0.36px;
    --character-spacing--1-8: -1.8px;
    --line-spacing-18: 18px;
    --line-spacing-20: 20px;
    --line-spacing-24: 24px;
    --line-spacing-26: 26px;
    --line-spacing-28: 28px;
    --line-spacing-30: 30px;
    --line-spacing-36: 36px;
    --line-spacing-44: 44px;
    --line-spacing-60: 60px;
    --line-spacing-72: 72px;
    --line-spacing-90: 90px;
  }

  
.character-style-1 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-60);
    line-height: var(--line-spacing-72);
    letter-spacing: var(--character-spacing--1-8);
    color: var(--color-292929);
  }
  .character-style-2 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-48);
    line-height: var(--line-spacing-60);
    letter-spacing: var(--character-spacing--1-92);
    color: var(--color-292929);
  }

  .character-style-3 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-36);
    line-height: var(--line-spacing-44);
    letter-spacing: var(--character-spacing--1-44);
    color: var(--color-292929);
  }

  .character-style-4 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-30);
    line-height: var(--line-spacing-36);
    letter-spacing: var(--character-spacing--1-05);
    color: var(--color-292929);
  }
  .character-style-5 {
      font-family: var(--font-family-gotham);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-24);
      line-height: var(--line-spacing-30);
      letter-spacing: var(--character-spacing--0-72);
      color: var(--color-292929);
  }
  .character-style-6 {
      font-family: var(--font-family-gotham);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-20);
      line-height: var(--line-spacing-28);
      letter-spacing: var(--character-spacing--0-4);
      color: var(--color-292929);
  }
  
  .character-style-7 {
     font-family: var(--font-family-gotham);
     font-style: var(--font-style-normal);
     font-weight: var(--font-weight-medium);
     font-size: var(--font-size-18);
     line-height: var(--line-spacing-26);
     letter-spacing: var(--character-spacing--0-36);
     color: var(--color-292929);
  }
  
  .character-style-8 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-16);
    line-height: var(--line-spacing-24);
    letter-spacing: var(--character-spacing--0-32);
    color: var(--color-292929);
  }
  
  .character-style-9 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-14);
    line-height: var(--line-spacing-20);
    letter-spacing: var(--character-spacing--0-28);
    color: var(--color-292929);
  }
  
  .character-style-10 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-12);
    line-height: var(--line-spacing-18);
    letter-spacing: var(--character-spacing--0-12);
    color: var(--color-292929);
  }
  
  .character-style-11 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-12);
    line-height: var(--line-spacing-18);
    letter-spacing: var(--character-spacing--0-12);
    color: var(--color-292929);
  }
  
  .character-style-12 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-14);
    line-height: var(--line-spacing-20);
    letter-spacing: var(--character-spacing--0-28);
    color: var(--color-292929);
  }
  
  .character-style-13 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-16);
    line-height: var(--line-spacing-24);
    letter-spacing: var(--character-spacing--0-16);
    color: var(--color-292929);
  }
  
  .character-style-14 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-18);
    line-height: var(--line-spacing-26);
    letter-spacing: var(--character-spacing--0-18);
    color: var(--color-292929);
  }

  .character-style-15 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-20);
    line-height: var(--line-spacing-28);
    letter-spacing: var(--character-spacing--0-4);
    color: var(--color-292929);
  }

  .character-style-16 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-24);
    line-height: var(--line-spacing-30);
    letter-spacing: var(--character-spacing--0-72);
    color: var(--color-292929);
  }

  .character-style-17 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-36);
    line-height: var(--line-spacing-44);
    letter-spacing: var(--character-spacing--1-44);
    color: var(--color-292929);
  }

  .character-style-18 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-30);
    line-height: var(--line-spacing-36);
    letter-spacing: var(--character-spacing--1-05);
    color: var(--color-292929);
  }

  .character-style-19 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-48);
    line-height: var(--line-spacing-60);
    letter-spacing: var(--character-spacing--1-92);
    color: var(--color-292929);
  }

  .character-style-20 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-60);
    line-height: var(--line-spacing-72);
    letter-spacing: var(--character-spacing--2-4);
    color: var(--color-292929);
  }

  .character-style-21 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-72);
    line-height: var(--line-spacing-90);
    letter-spacing: var(--character-spacing--2-16);
    color: var(--color-292929);
  }

  .character-style-22 {
    font-family: var(--font-family-gotham);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-72);
    line-height: var(--line-spacing-90);
    letter-spacing: var(--character-spacing--2-16);
    color: var(--color-292929);
  }

  ${fonts}

`;

export default GlobalStyles;
