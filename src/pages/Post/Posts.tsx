import { DefaultLayout } from "layouts/DefaultLayout";
import { Headline } from "components/Headline";

import { usePost } from "./Posts.hooks";
import * as SG from "global.styles";

function Post(): React.ReactElement {
  const { posts } = usePost();
  return (
    <DefaultLayout title="Posts">
      <SG.List>
        {posts &&
          posts.map((post) => (
            <SG.ListItem key={post.id} isPosts>
              <Headline tag="h4">{post.title}</Headline>

              <Headline>{post.body}</Headline>
            </SG.ListItem>
          ))}
      </SG.List>
    </DefaultLayout>
  );
}
export { Post };
