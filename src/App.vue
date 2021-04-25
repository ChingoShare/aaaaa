<template>
  <router-view/>
</template>

<style>
html {
	height: 100%;
}
body {
	margin: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
}
header {
	background-color: rgb(23, 26, 26);
	font-size: 2em;
	font-weight: bolder;
	color: white;
	text-align: center;
	flex: 0 0 auto;
	text-transform: uppercase;
  margin-bottom: 20px;
}
footer {
	background-color:rgb(23, 26, 26);
	color: white;
	text-align: center;
	flex: 0 0 auto;
  margin-top: 20px;
}
#app {
  flex: 1 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border-radius: 1vw;
  box-shadow: 0 0 .5vw black;
  margin: 10px;
  width: 280px;
  overflow: hidden;
  /* width: 20vw; */
}
img {
  width: 100%;
  height: auto;
}
p {
  font-size: 1em;
  word-break: break-all;
  margin: 1%;
}
.title {
  font-weight: bold;
  text-transform: uppercase;
}
.like {
  user-select: none;
  display: inline-block;
  font-size: 3em;
  cursor: default;
  margin: 0;
}
.red {
  color: red;
}
@media screen and (max-width: 300px) {
  header {
    margin-bottom:  6vw;
  }
  footer {
    margin-top:  6vw;
  }
  header p{
    font-size: 10.66666vw;
  }
  .card {
    width: 97vw;
    margin: 3vw;
  }
  p {
    font-size: 5.33333vw;
  }
  .like {
    font-size: 16vw;
  }
}
@media screen and (min-width: 1200px) {
  header {
    margin-bottom:  1.5vw;
  }
  footer {
    margin-top:  1.5vw;
  }
  header p{
    font-size: 2.66666vw;
  }
  .card {
    width: 24.25vw;
    margin: .75vw;
  }
  p {
    font-size: 1.33333vw;
  }
  .like {
    font-size: 4vw;
  }
}
</style>
