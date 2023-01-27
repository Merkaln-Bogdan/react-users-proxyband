import { Headline } from "components/Headline";
import { Modal } from "components/Modal";

import { AlbumType } from "types/posts.type";

import { useAlbums } from "./Albums.hooks";

import * as SG from "global.styles";
import { ListModal } from "./Albums.styles";

import { useNavigate } from "react-router-dom";

function Albums(): React.ReactElement {
  const { albums } = useAlbums();

  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)}>
      <ListModal>
        {albums &&
          albums.map((post: AlbumType) => (
            <SG.ListItem key={post.id}>
              <Headline tag="h4">{post.title}</Headline>
            </SG.ListItem>
          ))}
      </ListModal>
    </Modal>
  );
}
export { Albums };
