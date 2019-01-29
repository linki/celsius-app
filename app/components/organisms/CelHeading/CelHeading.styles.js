// import STYLES from '../../../constants/STYLES';
import { getThemedStyle } from '../../../utils/styles-util';
import STYLES from '../../../constants/STYLES';

const base = {
    content: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        // height: 60,
    },
    center: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    left: {
        flex: 1,
        alignItems: 'flex-start',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'

    }
}

const themed = {
    dark: {
        headingBackground: {
            backgroundColor: STYLES.COLORS.DARK_HEADER
        }
    },

    light: {
        headingBackground: {
            backgroundColor: STYLES.COLORS.WHITE
        }
    },

    celsius: {
        headingBackground: {
            backgroundColor: STYLES.COLORS.CELSIUS
        }
    },
}

const CelHeadingStyle = (theme) => getThemedStyle(theme, base, themed);

export default CelHeadingStyle