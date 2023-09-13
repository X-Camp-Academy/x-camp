import React from "react";

interface ISvgProps {
  icon: string
  color?: string,
  width?: number,
  height?: number
}

const importAll = (r: { [key: string]: any }) => {
  return r.keys()?.filter((key: string) => key.includes('src/')).map(r);
};

// @ts-ignore
const files: Module[] = importAll(require.context('@/assets/svgs', false, /\.svg$/));

const SvgIcon: React.FC<ISvgProps> = ({icon, ...props}: ISvgProps) => {

  const defaultAttr = {
    width: '1em',
    height: '1em'
  }

  return <span style={{lineHeight: 1, display: 'inline-block'}}>
    {
      files
        .filter((file) => file.default.name === `Svg${icon}`)
        .map(file => <file.default className="svg" key={file.default.name} {...{ ...defaultAttr, ...props}} />)
    }
  </span>;
};

export default SvgIcon;