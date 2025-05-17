const getInitialTheme = (): boolean => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('isDarkTheme');
        return storedTheme ? JSON.parse(storedTheme) : true; // Default to dark if not set
    }
    return true;
};

export default getInitialTheme;