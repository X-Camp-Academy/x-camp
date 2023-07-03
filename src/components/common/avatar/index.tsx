import React, { useMemo } from "react";
import { Tooltip, Avatar } from "antd";
import type { AvatarProps } from "antd";
import randomColor from "randomcolor";
import { UserInfo } from "@/apis/auth-client/define";

interface RealNameAvatarProps extends AvatarProps {
  user: UserInfo | null;
  tooltip?: boolean;
}

const RealNameAvatar: React.FC<RealNameAvatarProps> = ({
  style,
  user,
  tooltip = true,
  ...props
}) => {
  const name = user?.real_name?.trim() || user?.user_name?.trim() || "Unknown";

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
    <Tooltip title={name} open={tooltip}>
      <Avatar style={{ background, userSelect: "none", ...style }} {...props}>
        {name[0].toUpperCase()}
      </Avatar>
    </Tooltip>
  );
};

export default RealNameAvatar;