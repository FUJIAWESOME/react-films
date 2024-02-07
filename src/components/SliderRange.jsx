import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { updateSliderRange } from "../redux/actions";

export default function SliderRange() {
  const dispatch = useDispatch();
  const sliderRange = useSelector((state) => state.filters.sliderRange);

  const handleChange = (_, newValue) => {
    dispatch(updateSliderRange(newValue));
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography sx={{ mb: "30px" }} variant="body1" color="initial">
        Год релиза:
      </Typography>
      <Slider
        min={1900}
        max={2100}
        getAriaLabel={() => "Years range"}
        value={sliderRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={() => sliderRange}
      />
    </Box>
  );
}
