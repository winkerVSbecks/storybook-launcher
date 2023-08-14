import { Action, Icon } from "@raycast/api";

export default function DeleteStorybookAction(props: { id: string; onDelete: (id: string) => void }) {
  return (
    <Action
      icon={Icon.Trash}
      title="Delete Storybook"
      shortcut={{ modifiers: ["ctrl"], key: "x" }}
      onAction={() => props.onDelete(props.id)}
    />
  );
}
