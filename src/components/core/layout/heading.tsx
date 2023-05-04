import { Divider, Typography } from "@mui/material";
interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <Divider sx={{ marginBottom: 4 }}>
      <Typography variant="h3">{text}</Typography>
    </Divider>
  );
};

export default Heading;
