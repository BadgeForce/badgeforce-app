import { style } from 'typestyle';

const headerContainer = style({
    width: '100%',
    height: '52px',
    backgroundColor: '#292D34',
    color: 'white',
    display: 'flex',
    alignItems: 'center'
});

const headerTitle = style({
    paddingLeft: '24px',
    fontSize: '24px'
});

export const Styles = {
    headerContainer: headerContainer,
    headerTitle: headerTitle
}

