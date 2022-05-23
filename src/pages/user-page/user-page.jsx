import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import {
  getPosts,
  getUserData,
  getUserList,
} from "../../firebase/firestore-methods";
import { Sidebar, SidebarRecommendations } from "../../components";

const UserPage = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.token);
  const { posts } = useSelector((store) => store.posts);
  const { userList } = useSelector((store) => store.operationData);

  useEffect(() => {
    if (token) {
      dispatch(getUserData(token));
      dispatch(getUserList());
    }
  }, [posts]);

  useEffect(() => {
    if (token) {
      dispatch(getPosts());
    }
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Content className="content">
        <Outlet />
      </Content>
      <SidebarRecommendations />
    </Layout>
  );
};

export { UserPage };