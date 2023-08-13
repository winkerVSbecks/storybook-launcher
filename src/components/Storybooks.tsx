import { ActionPanel, List, Action, Icon, useNavigation } from "@raycast/api";
import { Storybook } from "../types";
import { Components } from "./Components";
import AddStorybookAction from "./AddStorybookAction";

export function Storybooks({
  storybooks,
  onCreate,
}: {
  storybooks: Storybook[];
  onCreate: (name: string, url: string) => void;
}) {
  const { push } = useNavigation();

  return (
    <>
      {storybooks.map((storybook) => (
        <List.Item
          key={storybook.name}
          title={storybook.name}
          icon={Icon.Book}
          actions={
            <ActionPanel>
              <Action title="Push" onAction={() => push(<Components url={storybook.url} />)} />
              <AddStorybookAction onCreate={onCreate} />
            </ActionPanel>
          }
        />
      ))}
    </>
  );
}
