import { XStarMdViewerPlugin } from 'x-star-editor';

/**
 * 渲染iframe标签以适配视频 ----- 帮助中心适用
 * 如<iframe src="xxx" frameborder="0" width="800" height="450" allowfullscreen></iframe>
 * @returns
 */
export const iframePlugin = (): XStarMdViewerPlugin => (ctx) => {
  console.log(ctx);
  return (ctx.customHTMLElements.iframe = (props) => {
    //获取父元素宽度
    console.log('props', props);
    const parentWidth = document?.getElementById('markdownContent')?.offsetWidth;
    const zoom = +props.width! / +props.height! || 1.78;
    return (
      <iframe
        {...props}
        style={{
          alignSelf: 'center',
          width: parentWidth! * 0.9,
          height: (parentWidth! * 0.9) / zoom
        }}
        allowFullScreen
      />
    );
  });
};
