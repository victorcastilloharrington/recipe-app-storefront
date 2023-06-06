import UserDetailsComponent from "@components/user";
import { Box, Container } from "@mui/material";
import { User } from "@typedefs/user";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import nookies from "nookies";

const UserPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Box>
      <Container maxWidth="md">
        <UserDetailsComponent />
      </Container>
    </Box>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  const userString = cookies?.user;

  if (!userString)
    return {
      notFound: true,
    };

  const user: User = JSON.parse(userString);

  return { props: { user } };
};
