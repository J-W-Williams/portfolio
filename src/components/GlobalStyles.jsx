import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
    :root {
      --primary-color: black
      --accent-bg-color: rgba(204, 85, 0, 0.1);
      --page-horizontal-padding: 20px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --heading-font-family: 'Vollkorn', sans-serif;
      --user-img-width: 120px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    body {
        background-color: #1f1f1f;
        color:white;

}

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
      color: var(--primary-color);
      font-family: var(--heading-font-family);
    }
    h2 {
      font-size: 28px;
    }

    /* Views Animation */
    ::view-transition-old(root) {
    animation: fade-and-scale-out 0.5s ease-in-out 1 backwards;
    }
    ::view-transition-new(root) {
    animation: fade-and-scale-in 0.5s ease-in-out 1 forwards;
    }

    @keyframes fade-and-scale-in {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
    }
    @keyframes fade-and-scale-out {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(2);
    }
    }
    /* Second animation */
    @keyframes slide-in {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
    }
    @keyframes slide-out {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-100%);
    }
    }
`;
