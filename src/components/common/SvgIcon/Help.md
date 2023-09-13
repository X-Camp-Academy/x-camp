# SvgIcon使用说明

1. 将下载好的svg文件拷贝至 ``/src/assets/svgs`` 下;
2. 将当前组件引入所需要使用svg的文件中
3. 将svg的文件名（不包括后缀）赋值给组件的icon属性

# demo

```tsx
import SvgIcon from "@/components/common/SvgIcon";

const Com = () => <>
  <SvgIcon icon={'your svg filename'} {...otherProps} />
</>

export default Com
```