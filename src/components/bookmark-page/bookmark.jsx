import { useSelector } from "react-redux";
import { PostContainer } from "../post/post-container";
import { Typography } from "antd";
import { changeTitle } from "../../utils";

const BookmarkPage = () => {
  const { Title } = Typography;

  const { userData } = useSelector((store) => store.userData);

  changeTitle("Your Bookmarked Posts");
  return (
    <div className="bookmarks_wrapper">
      <div className="bookmark_header">
        <Title level={2}>Your Bookmarks</Title>
      </div>
      <PostContainer bookmarks={userData?.bookmarks?.bookmarks} />
    </div>
  );
};

export { BookmarkPage };
