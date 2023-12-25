// import { useContext } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { updateSliderRange } from '../redux/actions';

// import { FilterContext, FilterDispatchContext } from './FilterContext';

export default function SliderRange() {
    // const [value, setValue] = useState([1923, 2023]);
    // const dispatch = useContext(FilterDispatchContext);
    // const value = useContext(FilterContext);
    const dispatch = useDispatch();
    const sliderRange = useSelector(state => state.filters.sliderRange);

    const handleChange = (_, newValue) => {
        dispatch(updateSliderRange(newValue));
        // setValue(newValue);
        // dispatch({
        //     type: 'updateSliderRange',
        //     value: newValue,
        // });
    };

    return (
        <Box sx={{ padding: '16px'}}>
            <Typography sx={{ mb: '30px'}} variant="body1" color="initial">Год релиза:</Typography>
            <Slider
                min={1900}
                max={2100}
                getAriaLabel={() => 'Years range'}
                value={sliderRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={() => sliderRange}
            />
        </Box>
    );
}