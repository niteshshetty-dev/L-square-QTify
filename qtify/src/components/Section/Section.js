// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Grid, Button, Typography } from "@mui/material";
// import AlbumCard from "../Card/AlbumCard";
// import styles from "./Section.module.css";
// import Carousel from "../Carousel/Carousel";
// import { SwiperSlide } from "swiper/react";

// function Section({ title, apiEndpoint, type }) {
//   const [albums, setAlbums] = useState([]);
//   const [collapsed, setCollapsed] = useState(true);
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState("all");

//   useEffect(() => {
//     const fectchAlumns = async () => {
//       try {
//         const res = await axios.get(
//           `https://qtify-backend.labs.crio.do/albums${apiEndpoint}`
//         );
//         setAlbums(res.data);
//       } catch (err) {
//         console.log(err);
//       }

//       if(type === "songs"){  {
//         try {
//         const res = await axios.get(
//           `https://qtify-backend.labs.crio.do/genres`
//         );
//         setGenres([{ key: "all", label: "All" }, ...res.data]);

//       } catch (err) {
//         console.log(err);
//       }
//       }
//     };
//     fectchAlumns();
//   }, [apiEndpoint,type];

//   //   const visibleAlbums = collapsed ? albums.slice(0, 7) : albums;
//   const filteredSongs =
//     type === "songs" && selectedGenre !== "all"
//       ? data.filter((song) => song.genre.key === selectedGenre)
//       : data;

//   return (
//     <section className={styles.section}>
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="space-between"
//         sx={{ mb: 2 }}
//       >
//         <Typography variant="h6" color="var(--color-white)">
//           {title}
//         </Typography>

//         <Button
//           variant="text"
//           onClick={() => setCollapsed(!collapsed)}
//           sx={{
//             textTransform: "none",
//             fontWeight: 600,
//             color: "var(--color-primary)",
//           }}
//         >
//           {collapsed ? "Show All" : "Collapse"}
//         </Button>
//       </Grid>
//       {collapsed ? (
//         <Carousel>
//           {albums.map((album) => (
//             <SwiperSlide key={album.id} style={{ width: "auto" }}>
//               <AlbumCard album={album} />
//             </SwiperSlide>
//           ))}
//         </Carousel>
//       ) : (
//         <Grid
//           container
//           spacing={3}
//           sx={{
//             maxHeight: collapsed ? 250 : "none",
//             overflow: "hidden",
//           }}
//         >
//           {albums.map((album) => (
//             <Grid item key={album.id} xs={6} sm={4} md={2}>
//               <AlbumCard album={album} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </section>
//   );
// }

// export default Section;

import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import Carousel from "../Carousel/Carousel";
import AlbumCard from "../Card/AlbumCard";
import "swiper/css";

export default function Section({ title, apiEndpoint, type }) {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [collapsed, setCollapsed] = useState(true);

  const config = {
    endpoint: "https://qtify-backend.labs.crio.do",
  };

  useEffect(() => {
    const fectchAlumns = async () => {
      if (type === "songs") {
        try {
          const res = await axios.get(`${config.endpoint}/genres`);
          setGenres([{ key: "all", label: "All" }, ...res["data"].data]);
        } catch (err) {
          console.log(err);
        }
      }

      try {
        const res = await axios.get(`${config.endpoint}/${apiEndpoint}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectchAlumns();
  }, [apiEndpoint, type]);

  const filteredData =
    type === "songs" && selectedGenre !== "all"
      ? data.filter((item) => item.genre.key === selectedGenre)
      : data;

  return (
    <Box
      sx={{
        backgroundColor: "var(--color-black)",
        padding: "24px 32px",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="var(--color-white)">
            {title}
          </Typography>

          {type !== "songs" && (
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
          )}
        </Box>

        {type === "songs" && (
          <Tabs
            value={selectedGenre}
            onChange={(e, value) => setSelectedGenre(value)}
            sx={{
              mt: 1,
              "& .MuiTab-root": {
                color: "var(--color-white)",
                textTransform: "none",
                fontWeight: 500,
                minWidth: "auto",
                padding: "6px 12px",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "var(--color-primary)",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--color-primary)",
              },
            }}
          >
            {genres.map((genre) => (
              <Tab key={genre.key} value={genre.key} label={genre.label} />
            ))}
          </Tabs>
        )}
      </Box>

      {type === "songs" && (
        <Carousel>
          {filteredData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: 180 }}>
              <AlbumCard album={item} type="songs" />
            </SwiperSlide>
          ))}
        </Carousel>
      )}

      {type !== "songs" &&
        (collapsed ? (
          <Carousel>
            {filteredData.map((item) => (
              <SwiperSlide key={item.id} style={{ width: "auto" }}>
                <AlbumCard album={item} type="albums" />
              </SwiperSlide>
            ))}
          </Carousel>
        ) : (
          <Grid container spacing={3}>
            {filteredData.map((item) => (
              <Grid item key={item.id} xs={6} sm={4} md={2}>
                <AlbumCard album={item} type="albums" />
              </Grid>
            ))}
          </Grid>
        ))}
    </Box>
  );
}
