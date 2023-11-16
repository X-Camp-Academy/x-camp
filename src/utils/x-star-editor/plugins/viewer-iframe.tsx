import { XStarMdViewerPlugin } from 'x-star-editor';

/**
 * 渲染iframe标签以适配视频 ----- 帮助中心适用
 * 如<iframe src="xxx" frameborder="0" width="800" height="450" allowfullscreen></iframe>
 * @returns
 */
export const iframePlugin = (): XStarMdViewerPlugin => (ctx) => {
  ctx.customHTMLElements.iframe = (props) => {
    //获取父元素宽度
    const parentWidth = document?.getElementById('markdownContent')?.offsetWidth;
    const zoom = 16 / 9;
    return (
      <iframe
        {...props}
        style={{
          alignSelf: 'center',
          width: parentWidth,
          height: parentWidth! / zoom,
          border: 'none',
          margin: '20px 0'
        }}
        allowFullScreen
      />
    );
  };
  ctx.customSchema = { ...ctx.customSchema, tagNames: [...(ctx.customSchema.tagNames ?? []), 'iframe'], attributes: { ...ctx.customSchema.attributes, iframe: ['src'] } };
};
