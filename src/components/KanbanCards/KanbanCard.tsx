import { Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface KanbanCardProps {
  title: string;
  index: number;
}

export const KanbanCard = ({ title, index }: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Flex
      padding="2"
      backgroundColor="white"
      margin="2"
      borderRadius="3"
      border="2px solid gray.500"
      boxShadow="0px 0px 5px 2px #2121213b"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      transform={style.transform}
    >
      <Text>{title}</Text>
    </Flex>
  );
};

export default KanbanCard;