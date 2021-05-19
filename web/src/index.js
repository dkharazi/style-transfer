import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import InputCard from './components/InputCard';
import OutputCard from './components/OutputCard';
import images from './data/images';
import './styles/index.css';


const Index = () => {

  // Define state variables
  const [contentImg, setContentImg] = useState(images.content[0]);
  const [styleImg, setStyleImg] = useState(images.style[0]);
  const [newImg, setNewImg] = useState(images.gen[0]);
  const [openContentModal, setOpenContentModal] = useState(false);
  const [openStyleModal, setOpenStyleModal] = useState(false);

  // Handle the side effect of a style or content card changing
  useEffect(() => {
    setNewImg(images.gen.find(e => e.style === styleImg.id && e.content === contentImg.id));
  }, [contentImg, styleImg]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <header>Media Topic Classification</header>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item container xs={4} direction="column">
            <InputCard
              card={contentImg}
              title="Content Image"
              type="content"
              setCard={setContentImg}
              openModal={openContentModal}
              setOpenModal={setOpenContentModal}
            />
          </Grid>
          <Grid item container xs={4} direction="column">
            <InputCard
              card={styleImg}
              title="Style Image"
              type="style"
              setCard={setStyleImg}
              openModal={openStyleModal}
              setOpenModal={setOpenStyleModal}
            />
          </Grid>
          <Grid item container xs={4} direction="column">
            <OutputCard
              title="New Image"
              card={newImg}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

ReactDOM.render(
    <Index />,
  document.getElementById('root')
);