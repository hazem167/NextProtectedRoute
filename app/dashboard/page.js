import { Container, Typography, Button, Stack, Divider } from "@mui/material";
import ProtectedRoute from "../componet/ProtectedRoute";
import LogoutButton from "../componet/LogoutButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await res.json();

  return (
    <ProtectedRoute>
      <Container>
        <Stack sx={{mt:2}} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Dashboard!
          </Typography>
          {/* Render Logout Button from client component */}
          <LogoutButton />
        </Stack>
        {posts.map((post) => {
          return <PostCard title={post.title} body={post.body} key={post.id} />;
        })}
      </Container>
    </ProtectedRoute>
  );
};

const PostCard = ({ title, body }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 4 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {title}
        </Typography>
        <Divider color="primary" />
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default page;
