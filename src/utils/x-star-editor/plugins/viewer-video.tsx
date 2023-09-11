import { XStarMdViewerPlugin } from "x-star-editor";

export const viewerVideoPlugin = (): XStarMdViewerPlugin => (ctx) =>
(ctx.customHTMLElements.video = (props) => (
  <video controls style={{ width: "100%" }}>
    <source src={props?.src} type="video/mp4" />
  </video>
));
