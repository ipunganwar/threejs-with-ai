import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#03f0fc',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
})

export default state