import{create} from 'zustand';

//its equal to create from zustand which you pass a callback function
const useMacbookStore= create((set)=>({
color:'#2e2c2e',
setColor:(color)=>set({color}),
 scale:0.08,
 setScale:(scale)=>set({scale}),
texture:`${import.meta.env.BASE_URL}videos/feature-1.mp4`,
setTexture:(texture)=>set({texture}),
 reset:()=>set({color:'#2e2c3e',scale:0.08,texture:`${import.meta.env.BASE_URL}videos/feature-1.mp4`}),
}))
export default useMacbookStore;

