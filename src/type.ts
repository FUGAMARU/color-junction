export type Color = "purple" | "yellow" | "green" | "blue"

export type Shape =
  "square" // 完全な四角形
  | "rounded" // 独立していて全て角丸
  | "topRounded" // 上だけ角丸
  | "bottomRounded" // 下だけ角丸
  | "leftRounded" // 左だけ角丸
  | "rightRounded" // 右だけ角丸
  | "topLeftRounded" // 上左が角丸
  | "topRightRounded" // 上右が角丸
  | "bottomLeftRounded" // 下左が角丸
  | "bottomRightRounded" // 下右が角丸
  | "alignedX" // X方向に平行
  | "alignedY" // Y方向に並行
  | "topAlignedX" // 上寄せでX方向に並行
  | "bottomAlignedX" // 下寄せでX方向に並行
  | "leftAlignedY" // 左寄せでY方向に並行
  | "rightAlignexY" // 右寄せでY方向に並行
