import React from "react";

interface ISvgProps {
  icon: string
  color?: string,
  width?: number,
  height?: number,
  className?: string
}

const importAll = (r: { [key: string]: any }) => {
  return r.keys()?.filter((key: string) => key.includes('src/')).map(r);
};

/**
 * 将 kebab-case 格式 修改为 PascalCase
 * @param str
 */
const convertToCamelCase = (str: string) => {
  let result = str;
  if (str) {
    result = str.split('-').map(word =>  word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
  return result;
};

// @ts-ignore
const files: Module[] = importAll(require.context('@/assets/svgs', false, /\.svg$/));

const SvgIcon: React.FC<ISvgProps> = ({ icon, className, ...props }: ISvgProps) => {
  
  const defaultAttr = {
    width: '1em',
    height: '1em'
  };

  return <span style={{ lineHeight: 1, display: 'inline-block' }} className={className} >
    {
      files
        .filter((file) => file.default.name === `Svg${convertToCamelCase(icon)}`)
        .map(file => <file.default className="svg" key={file.default.name} {...{ ...defaultAttr, ...props }} />)
    }
  </span>;
};

export default SvgIcon;