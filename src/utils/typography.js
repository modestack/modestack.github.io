import Typography from "typography"

const typography = new Typography({
    /*headerFontFamily: ['Abel', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Ubuntu', 'serif'],*/
    baseFontSize: '18px',
    googleFonts: [
        {
            name: 'Abel',
            styles: [
                '400',
            ],
        },
        {
            name: 'Ubuntu',
            styles: [
                '400',
                '500',
                '700'
            ],
        },
    ],
});

export default typography