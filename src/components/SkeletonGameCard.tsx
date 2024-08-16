import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card>
      <Skeleton height="180px" />
      <CardBody>
        <SkeletonText height="90px" />
      </CardBody>
    </Card>
  );
};

export default SkeletonGameCard;
