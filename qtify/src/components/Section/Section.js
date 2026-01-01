import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Button, Typography } from "@mui/material";
import AlbumCard from "../Card/AlbumCard";
import styles from "./Section.module.css";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const fectchAlumns = async () => {
      try {
        const res = await axios.get(
          `https://qtify-backend.labs.crio.do/albums${apiEndpoint}`
        );
        setAlbums(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectchAlumns();
  }, [apiEndpoint]);

  //   const visibleAlbums = collapsed ? albums.slice(0, 7) : albums;

  return (
    <section className={styles.section}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h6" color="var(--color-white)">
          {title}
        </Typography>

        <Button
          variant="text"
          onClick={() => setCollapsed(!collapsed)}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            color: "var(--color-primary)",
          }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{
          maxHeight: collapsed ? 250 : "none",
          overflow: "hidden",
        }}
      >
        {albums.map((album) => (
          <Grid item key={album.id} xs={6} sm={4} md={2}>
            <AlbumCard album={album} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Section;
