import "./Loader.scss";
import Box from "@mui/material/Box";

const Loader = ({ className = "", width, height }) => (
  <Box sx={{ p: 10 }}>
    <div className={`loader ${className}`} sx={{ width: { width }, height: { height } }}></div>
  </Box>
);

export default Loader;
