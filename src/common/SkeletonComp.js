import { Skeleton } from "antd";
const SkeletonComp = () => {
  return (
    <Skeleton avatar active paragraph={{ rows: 4 }}>
      <Skeleton.Avatar size="large" />
    </Skeleton>
  );
};
export default SkeletonComp;
