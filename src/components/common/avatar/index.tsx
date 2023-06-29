import React, { useMemo } from "react";
import { Tooltip, Avatar } from "antd";
import type { AvatarProps } from "antd";
import randomColor from "randomcolor";

interface RealNameAvatarProps extends AvatarProps {
  user: { realName?: string; userName?: string } | null | undefined;
}

const RealNameAvatar: React.FC<RealNameAvatarProps> = ({
  style,
  user,
  ...props
}) => {
  const name = user?.realName?.trim() || user?.userName?.trim() || "Unknown";

  const background = useMemo(
    () =>
      randomColor({
        luminosity: "bright",
        seed: name,
        format: "rgb",
      }),
    [name]
  );

  return (
    <Tooltip title={name}>
      <Avatar style={{ background, ...style }} {...props}>
        {name[0].toUpperCase()}
      </Avatar>
    </Tooltip>
  );
};

export default RealNameAvatar;
