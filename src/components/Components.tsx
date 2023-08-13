import { ActionPanel, List, Action, Icon, useNavigation, showToast, Toast } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { parseStoriesJson } from "../utils";
import { Stories } from "./Stories";

export function Components({ url }: { url: string }) {
  const { push } = useNavigation();

  const { isLoading, data: components } = useFetch(`${url}/stories.json`, {
    parseResponse: async (response) => {
      const data = await response.json();
      return parseStoriesJson(data.stories);
    },
    onError: async () => {
      await showToast({
        style: Toast.Style.Failure,
        title: "Failed to fetch Storybook data. Please check that you configured the correct URL.",
      });
    },
  });

  return (
    <List isLoading={isLoading}>
      {!isLoading &&
        components &&
        Object.values(components).map((component) => (
          <List.Item
            key={component.name}
            title={component.name}
            icon={Icon.AppWindowList}
            actions={
              <ActionPanel>
                <Action title="Push" onAction={() => push(<Stories component={component} url={url} />)} />
              </ActionPanel>
            }
          />
        ))}
    </List>
  );
}
