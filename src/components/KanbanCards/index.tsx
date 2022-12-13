import { Flex } from "@chakra-ui/react";
import KanbanCard from "./KanbanCard";
import { Cards } from "../../interfaces/card";

const KanbanCards = ({ cards }: { cards: Array<Cards> }) => {
  return (
    <Flex flexDirection="column" flex="1" padding="5">
      {cards.map(({ title }, key) => {
        return <KanbanCard title={title} key={key} index={key} />;
      })}
    </Flex>
  );
};

export default KanbanCards;
