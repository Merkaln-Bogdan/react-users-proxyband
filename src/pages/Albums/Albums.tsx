import { DefaultLayout } from "layouts/DefaultLayout";
import { Headline } from "components/Headline";

import { useAlbums } from "./Albums.hooks";
import * as SG from "global.styles";
import { AlbumType } from "types/posts.type";

function Albums(): React.ReactElement {
  const { albums } = useAlbums();
  return (
    <DefaultLayout title="Albums">
      <SG.List>
        {albums &&
          albums.map((post: AlbumType) => (
            <SG.ListItem key={post.id}>
              <Headline tag="h4">{post.title}</Headline>
            </SG.ListItem>
          ))}
      </SG.List>
    </DefaultLayout>
  );
}
export { Albums };
