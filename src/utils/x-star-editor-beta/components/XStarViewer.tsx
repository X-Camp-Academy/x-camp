import classNames from 'classnames/bind';
import { type ViewerOptions, viewerRender } from '../utils/markdown';
import { composeHandlers } from '../utils/handler';
import styles from './XStarViewer.module.css';

const cx = classNames.bind(styles);

export interface XStarViewerPlugin {
  (ctx: ViewerOptions): void;
}

export interface XStarViewerProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  plugins?: XStarViewerPlugin[];
}

const XStarViewer = ({
  className,
  style,
  value = '',
  plugins,
}: XStarViewerProps) => (
  <div className={cx('x-star-viewer', 'container', className)} style={style}>
    {viewerRender(
      value,
      composeHandlers(plugins)({
        customHTMLElements: {},
        customBlocks: {},
      }),
    )}
  </div>
);

XStarViewer.displayName = 'XStarViewer';

export default XStarViewer;
