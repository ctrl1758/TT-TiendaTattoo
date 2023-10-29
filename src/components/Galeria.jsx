import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ModalImage from "./ModalImage";
import { getGalery } from "../firebase.js";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    getimages();
  }, []);

  const getimages = async () => {
    const querySnapshot = await getGalery();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setGalery(docs);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  /* function getRandomOneOrTwo() {
    return Math.floor(Math.random() * 2) + 1;
  } */
  return (
    <>
      <div
        style={{
          paddingLeft: "5rem",
          paddingRight: "5rem",
          background: "radial-gradient(rgb(104, 108, 46), rgb(18, 30, 11))",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          className="pl-2 pb-4"
          style={{
            paddingLeft: "1rem",
            fontSize: "3rem",
            fontFamily: "FuenteLogo",
            color: "rgba(255, 255, 255, 0.78)",
            marginBottom: "0px",
          }}
        >
          Galeria:
        </Typography>
      </div>
      <div
        className="container-fluid justify-content-center d-flex"
        style={{
          background: "radial-gradient(rgb(104, 108, 46), rgb(18, 30, 11))",
          marginBottom: "0px",
        }}
      >
        <div
          style={{
            width: "100%",
            filter: "brightness(60%)", // Aplica el filtro oscuro (70% de brillo)
          }}
        >
          <ImageList
            variant="quilted"
            rowHeight={121}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            {galery.map((item) => (
              <ImageListItem
                key={item.img}
                cols={1}
                rows={2 /* getRandomOneOrTwo() */}
                onClick={() => handleOpenModal(item.img)}
                style={{ cursor: "pointer" }}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <ModalImage
            open={open}
            handleClose={handleCloseModal}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    </>
  );
}
/* 
const itemData = [
  {
    img: "https://i.pinimg.com/750x/e4/06/8f/e4068f693ebfb08ed3c5710a4d4dbd8e.jpg",
    title: "Breakfast",
  },
  {
    img: "https://i.pinimg.com/564x/15/97/d3/1597d39d7a298b43748b5c8be4395a11.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/b6/08/cb/b608cb5c2999dddf0ce3358a41a7355f.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/6d/08/cf/6d08cf8dc599604867261ae9a125e338.jpg",
    title: "Coffee",
  },
  {
    img: "https://i.pinimg.com/564x/06/7f/eb/067febc6a9cf9ac21e5cbce65b379f02.jpg",
    title: "Hats",
  },
  {
    img: "https://i.pinimg.com/564x/e4/07/19/e4071996908a041e6be7c7c4d6adb314.jpg",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://i.pinimg.com/564x/bc/37/95/bc37956019481c9e5e93a2c44b38594d.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/09/a6/29/09a6299fbc148051bed3a3b94cb512d5.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/54/59/d7/5459d7fad4b6f7918d433219aa7cd7d0.jpg",
    title: "Mushrooms",
  },
  {
    img: "https://i.pinimg.com/564x/6a/34/93/6a3493dbbb2881ca6de3ac5d50c4deda.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/67/da/24/67da24dac3b27a4e5197792820b05fa8.jpg",
    title: "Sea star",
  },
  {
    img: "https://www.lighthousetattoo.com.au/wp-content/uploads/2021/06/screen-shot-2021-06-18-at-1.59.22-pm.png",
    title: "Bike",
  },
]; */
