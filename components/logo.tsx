import { cn } from "../lib/utils";

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon uniColor={uniColor} />
      <span className="font-semibold text-lg tracking-tight">
        SaaS AI Starter
      </span>
    </div>
  );
};

export const LogoIcon = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center font-mono font-bold",
        uniColor
          ? "text-current"
          : "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent",
        className
      )}
    >
      <span className="text-lg">&lt;/&gt;</span>
    </div>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <svg
        className="size-5"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
          fill="none"
          strokeWidth={0.5}
          stroke="currentColor"
        />
      </svg>
      <span className="font-medium text-sm">SaaS AI Starter</span>
    </div>
  );
};

export default Logo;
