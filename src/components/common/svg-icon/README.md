# SvgIcon使用说明

1. 将下载好的svg文件拷贝至 `/src/assets/svgs` 下;
2. 打开svg文件，将文件中的 `fill` 属性改为 `currentColor`;(如有多个fill，选择其中需要改变颜色的fill属性修改，如果没改的话color属性不起作用)
3. 将当前组件引入所需要使用svg的文件中;
4. 将svg的文件名（不包括后缀）赋值给组件的icon属性;(文件名如果为kebab-case格式会自动转为PascalCase格式)

# demo

```tsx
import SvgIcon from '@/components/common/SvgIcon';

const Com = () => (
  <>
    <SvgIcon icon={'svg-name'} {...otherProps} />
  </>
);

export default Com;
```
