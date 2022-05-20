import { Avatar, Button, Card, Skeleton } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./profile-page.css";
import { EditProfileModal } from "../modals/edit-profile-modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../firebase/firestore-methods";
import { PostContainer } from "../index";
import { statusConstants } from "../../utils";

const ProfilePage = () => {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { token } = useSelector((store) => store.token);
  const { userData, status } = useSelector((store) => store.userData);
  const dispatch = useDispatch();

  return (
    <div className="user_profile_wrapper">
      {status === statusConstants.loading ? (
        <Skeleton active={true} />
      ) : (
        <div className="user_profile">
          <EditProfileModal
            editProfileModal={editProfileModal}
            setEditProfileModal={setEditProfileModal}
          />
          <div className="user_profile_avatar_wrapper">
            <Avatar
              src={userData?.userData?.dp}
              size={94}
              icon={<UserOutlined />}
            />
          </div>
          <div className="profile_name_id">
            <p className="profile_name">{userData?.userData?.fullName}</p>
            <p className="profile_id">@{userData?.userData?.handle}</p>
          </div>
          <Button
            onClick={() => setEditProfileModal((prevState) => !prevState)}
            type="primary"
          >
            Edit Profile
          </Button>
          <div className="profile_disc">
            <p className="">{userData?.userData?.bio}</p>
          </div>
          <Card className="profile_card">
            <div className="profile_card_div">
              <div className="profile_card_info">
                <p className="profile_card_number">
                  {userData?.follow?.following.length}
                </p>
                <p className="profile_card_text">Following</p>
              </div>
              <div className="profile_card_info">
                <p className="profile_card_number">
                  {userData?.posts?.posts?.length}
                </p>
                <p className="profile_card_text">Posts</p>
              </div>
              <div className="profile_card_info">
                <p className="profile_card_number">
                  {userData?.follow?.followers.length}
                </p>
                <p className="profile_card_text">Followers</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      <PostContainer userID={token} editPost={true} />
    </div>
  );
};

export { ProfilePage };
