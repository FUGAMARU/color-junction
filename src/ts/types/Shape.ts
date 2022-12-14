export type Shape =
  "blank" // 空欄
  | "square" // 完全な四角形
  | "rounded" // 独立していて全て角丸
  | "topRounded" // 上だけ角丸
  | "bottomRounded" // 下だけ角丸
  | "leftRounded" // 左だけ角丸
  | "rightRounded" // 右だけ角丸
  | "topLeftRounded" // 上左が角丸
  | "topRightRounded" // 上右が角丸
  | "bottomLeftRounded" // 下左が角丸
  | "bottomRightRounded" // 下右が角丸