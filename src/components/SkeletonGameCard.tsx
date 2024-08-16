import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card width="280px" borderRadius={10} overflow="hidden">
      <Skeleton height="180px" />
      <CardBody>
        <SkeletonText height="90px" />
      </CardBody>
    </Card>
  );
};

export default SkeletonGameCard;
