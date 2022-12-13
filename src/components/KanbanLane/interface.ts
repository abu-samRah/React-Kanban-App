import { Cards } from "../../interfaces/card";

export interface KanbanLaneProps {
  title: string;
  items: Cards[];
}

export interface KanbanItemProps {
  title: string;
  index: number;
  parent: string;
}
