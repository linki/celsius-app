import STYLES from '../../../constants/STYLES';
import { getThemedStyle } from '../../../utils/styles-util';

const base = {
    container: {
        height: 6,
        flexDirection: "row",
    },
    radiusLeft: {   
        borderTopLeftRadius: 30, 
        borderBottomLeftRadius: 30,
    },
    radiusRight: {
        borderTopRightRadius: 30, 
        borderBottomRightRadius: 30,    
    },
    colored: { 
        backgroundColor: STYLES.COLORS.GREEN
    },
    nonColor: {
        backgroundColor: STYLES.COLORS.GREEN_OPACITY

    }
}

const themed = {
    light: {
    },

    dark: {
    },

    celsius: {
    }
}

const ProgressBarStyle = (theme) => getThemedStyle(theme, base, themed);

export default ProgressBarStyle