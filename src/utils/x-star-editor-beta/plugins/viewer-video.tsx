import { XStarViewerPlugin } from "../components/XStarViewer";

export const viewerVideoPlugin = (): XStarViewerPlugin => (ctx) =>
  (ctx.customHTMLElements.video = (props) => (
    <video controls style={{ width: "100%" }}>
      <source src={props?.src} type="video/mp4" />
    </video>
  ));
