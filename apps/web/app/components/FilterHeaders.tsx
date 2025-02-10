import { useState } from "react";
import {
  CheckCircleFilled,
  DownOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { Button, Select } from "antd";

interface IOptions {
  value: string;
  label: string;
}

interface IFilterHeaders {
  options: IOptions[];
  maxCount?: number;
  onApplyFilter: (selectedHeaders: string[]) => void;
  defaultValue?: string[];
}

export default function FilterHeaders({
  options,
  maxCount = 5,
  onApplyFilter,
  defaultValue = [],
}: IFilterHeaders) {
  const [value, setValue] = useState<string[]>(defaultValue);
  const [showSelection, setShowSelection] = useState<boolean>(false);

  const suffix = (
    <>
      <span>
        {value.length} / {maxCount}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
      {showSelection ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Select
            mode="multiple"
            maxCount={maxCount}
            value={value}
            style={{ width: "100%", marginRight: "1em" }}
            onChange={setValue}
            suffixIcon={suffix}
            placeholder="Please select fields for headers"
            options={options}
          />

          <Button
            color="green"
            type="primary"
            icon={<CheckCircleFilled />}
            size="small"
            onClick={() => {
              setShowSelection(!showSelection);
              onApplyFilter(value);
            }}
            disabled={value.length === 0}
          >
            Apply Selection
          </Button>
        </div>
      ) : (
        <Button
          type="primary"
          icon={<SettingFilled />}
          size="small"
          onClick={() => setShowSelection(!showSelection)}
        />
      )}
    </div>
  );
}
