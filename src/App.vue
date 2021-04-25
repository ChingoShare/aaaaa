<template>
  <router-view />
</template>

<style>
body {
  background-color: #0e350e;
}
article {
  margin: 0 auto;
  height: 100%;
  width: fit-content;
  display: grid;
  grid-template: repeat(6, auto) / repeat(6, auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  position: relative;
}
.card {
  transform-style: preserve-3d;
  overflow: visible;
  perspective: 500px;
  transition: transform 1s ease;
  width: 83px;
  height: 83px;
}
.front-img, .back-img {
  border-radius: 5px;
  width: 80px;
  height: 80px;
  transition: .75s;
  border: solid 3px rgb(0, 117, 0);
}
.front-img {
  position: relative;
  display: block;
  transform: rotateY(180deg);
}
.back-img {
  position: absolute;
  top: 0;
}
.rotatefront {
  transform: rotateY(360deg);
}
.rotateback {
  transform: rotateY(180deg);
}
.opacity {
  display: none;
}
p {
  color: rgb(0, 255, 0);
  font-size: 1.5em;
  font-weight: bold;
  background-color: rgb(0, 0, 0);
  border-radius: 2px;
}
.button {
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 1.5em;
  font-weight: bold;
  padding: 5px 10px;
}
.score {
  grid-column-start: 3;
  grid-column-end: 5;
}
.timer {
  grid-column-start: 5;
  grid-column-end: 7;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: calc(100% - 80px);
  left: 0px;
  width: calc(100% + 3px);
  bottom: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  transition: .5s;
}
.table {
  position: absolute;
  top: 0;
  left: -300px;
}
</style>
