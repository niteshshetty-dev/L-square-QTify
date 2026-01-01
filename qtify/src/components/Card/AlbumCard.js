import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import "./AlbumCard.css";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function Albumcard({ album }) {
  console.log(album);
  return (
    <>
      <Card sx={{ width: 180, height: 250 }} key={album.id}>
        <CardActionArea sx={{ height: 170 }}>
          <CardMedia
            component="img"
            height="100%"
            image={album.image}
            alt="card"
          />
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Chip
            label={`${album.follows} follows`}
            variant="outlined"
            sx={{
              width: 90,
              height: 25,
              backgroundColor: "var(--color-black)",
            }}
            classes={{ label: "chipLabel" }}
          />
        </CardActions>
        <CardContent
          sx={{
            paddingTop: 1,
            backgroundColor: "var(--color-black)",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "var(--color-white)" }}
            noWrap
          >
            {album.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
