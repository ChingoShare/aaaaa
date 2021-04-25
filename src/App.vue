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
</style>
