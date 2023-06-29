import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import FileInput from './FileInput';
import { type Executor, toggleHandler } from '../utils/handler';
import styles from './Toolbar.module.css';

const cx = classNames.bind(styles);

interface ButtonProps {
  toolbarRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  popoverRender?: (close: () => void) => React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  toolbarRef,
  children,
  tooltip,
  popoverRender,
  onClick,
}: ButtonProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const popover = popoverRender?.(() => setPopoverOpen(false));
  const popoverMount = !!popover && popoverOpen;
  const tooltipMount = !popoverMount && !!tooltip && tooltipOpen;

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popoverMount) {
      if (toolbarRef.current && popoverRef.current) {
        const left =
          toolbarRef.current.getBoundingClientRect().right -
          popoverRef.current.getBoundingClientRect().right;
        popoverRef.current.style.left = `${left < 0 ? left : 0}px`;
        popoverRef.current.style.opacity = '1';
      }

      const listener = (e: MouseEvent) => {
        if (
          !(e.target instanceof Node) ||
          !popoverRef.current?.contains(e.target)
        ) {
          setPopoverOpen(false);
        }
      };

      document.addEventListener('click', listener, {
        capture: true,
        passive: true,
      });
      return () =>
        document.removeEventListener('click', listener, { capture: true });
    }
  }, [toolbarRef, popoverMount]);

  return (
    <div className={cx('button-container')}>
      <div
        className={cx('button', {
          'button-hover': tooltipOpen || popoverMount,
        })}
        onClick={() => {
          setPopoverOpen(true);
          onClick?.();
        }}
        onMouseDown={e => e.preventDefault()}
        onMouseEnter={() => setTooltipOpen(true)}
        onMouseLeave={() => setTooltipOpen(false)}
      >
        {children}
        {tooltipMount && <div className={cx('tooltip')}>{tooltip}</div>}
      </div>
      {popoverMount && (
        <div ref={popoverRef} className={cx('popover')}>
          {popover}
        </div>
      )}
    </div>
  );
};

export interface ToolbarItem {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  popoverRender?: (exec: Executor, close: () => void) => React.ReactNode;
  onClick?: (exec: Executor) => void;
}

export const getDefaultToolbarItemMap = (
  onInsertFile?: (
    file: File,
    options: { description: string; image: boolean },
  ) => void,
): Partial<Record<string, ToolbarItem>> => ({
  heading: {
    children: 'H',
    tooltip: '标题',
    popoverRender: (exec, close) => {
      const optionRender = (depth: 1 | 2 | 3 | 4 | 5 | 6, fontSize: string) => (
        <div
          className={cx('option')}
          style={{ fontSize }}
          onClick={() => {
            exec(toggleHandler({ type: 'heading', depth }));
            close();
          }}
        >
          标题 {depth}
        </div>
      );
      return (
        <>
          {optionRender(1, '1.6em')}
          {optionRender(2, '1.3em')}
          {optionRender(3, '1.2em')}
          {optionRender(4, '1.1em')}
          {optionRender(5, '1.0em')}
          {optionRender(6, '0.9em')}
        </>
      );
    },
  },

  thematicBreak: {
    children: '—',
    tooltip: '分隔线',
    onClick: exec => exec(toggleHandler({ type: 'thematicBreak' })),
  },

  blockquote: {
    children: '『』',
    tooltip: '引用',
    onClick: exec => exec(toggleHandler({ type: 'blockquote' })),
  },

  code: {
    children: <img src="/icons/code-library.svg" width="45%" height="45%" />,
    tooltip: '代码块',
    onClick: exec => exec(toggleHandler({ type: 'code' })),
  },

  emphasis: {
    children: <img src="/icons/italic.svg" width="45%" height="45%" />,
    tooltip: '斜体',
    onClick: exec => exec(toggleHandler({ type: 'emphasis' })),
  },

  strong: {
    children: <img src="/icons/bold.svg" width="45%" height="45%" />,
    tooltip: '粗体',
    onClick: exec => exec(toggleHandler({ type: 'strong' })),
  },

  inlineCode: {
    children: <img src="/icons/code.svg" width="45%" height="45%" />,
    tooltip: '行内代码',
    onClick: exec => exec(toggleHandler({ type: 'inlineCode' })),
  },

  link: {
    children: <img src="/icons/link.svg" width="45%" height="45%" />,
    tooltip: '链接',
    popoverRender: (exec, close) => (
      <FileInput
        onCancel={close}
        onOk={data => {
          if (data.type === 'file') {
            onInsertFile?.(data.file, {
              description: data.description,
              image: false,
            });
          } else {
            exec(
              toggleHandler({
                type: 'link',
                url: data.url,
                description: data.description,
              }),
            );
          }
          close();
        }}
      />
    ),
  },

  image: {
    children: <img src="/icons/image.svg" width="45%" height="45%" />,
    tooltip: '图片',
    popoverRender: (exec, close) => (
      <FileInput
        onCancel={close}
        onOk={data => {
          if (data.type === 'file') {
            onInsertFile?.(data.file, {
              description: data.description,
              image: true,
            });
          } else {
            exec(
              toggleHandler({
                type: 'image',
                url: data.url,
                description: data.description,
              }),
            );
          }
          close();
        }}
      />
    ),
  },

  delete: {
    children: <img src="/icons/strikethrough.svg" width="45%" height="45%" />,
    tooltip: '删除线',
    onClick: exec => exec(toggleHandler({ type: 'delete' })),
  },

  math: {
    children: 'π',
    tooltip: '公式块',
    onClick: exec => exec(toggleHandler({ type: 'math' })),
  },

  inlineMath: {
    children: '𝑥',
    tooltip: '行内公式',
    onClick: exec => exec(toggleHandler({ type: 'inlineMath' })),
  },
});

export const getDefaultToolbarItems = (): (string | ToolbarItem)[][] => [
  ['heading', 'strong', 'emphasis', 'delete'],
  ['thematicBreak', 'blockquote'],
  ['link', 'image'],
  ['inlineCode', 'code', 'inlineMath', 'math'],
];

interface ToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  itemMap: Partial<Record<string, ToolbarItem>>;
  items: (string | ToolbarItem)[][];
  exec: Executor;
}

const Toolbar = ({ className, style, itemMap, items, exec }: ToolbarProps) => {
  const toolbarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={toolbarRef} className={cx('toolbar', className)} style={style}>
      {items.map((group, index) => (
        <React.Fragment key={index}>
          {!!index && <div className={cx('divider')} />}
          {group.map((item, index) => {
            const toolbarItem = typeof item === 'string' ? itemMap[item] : item;
            if (toolbarItem) {
              const { children, tooltip, popoverRender, onClick } = toolbarItem;
              return (
                <Button
                  key={index}
                  toolbarRef={toolbarRef}
                  tooltip={tooltip}
                  popoverRender={close => popoverRender?.(exec, close)}
                  onClick={() => onClick?.(exec)}
                >
                  {children}
                </Button>
              );
            }
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Toolbar;
