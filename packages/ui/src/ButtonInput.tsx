import { Button } from "antd";

type ButtonProps = {
  label: string;
  variant: "primary" | "link" | "text" | "default" | "dashed";
  blocked?: boolean;
  onClick?: () => void;
};

export default function ButtonInput({ label, variant, onClick }: ButtonProps) {
  return (
    <Button type={variant} onClick={onClick}>
      {label}
    </Button>
  );
}
