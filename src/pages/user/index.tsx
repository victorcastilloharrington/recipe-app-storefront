import UserDetailsComponent from "@components/user";
import { Box, Container } from "@mui/material";

const UserPage = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <UserDetailsComponent />
      </Container>
    </Box>
  );
};

export default UserPage;
