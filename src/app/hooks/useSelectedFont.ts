import {useContext, useEffect} from 'react';

import {FontContext} from '../../context/FontContext';
import {loadGoogleFont} from '../utils/loadFont';

export const useSelectedFont = () => {
	const {selectedFont, setSelectedFont} = useContext(FontContext);

	useEffect(() => {
		const defaultFont = 'Noto Sans';
		
		setSelectedFont(defaultFont);
		loadGoogleFont(defaultFont);
	}, [selectedFont, setSelectedFont]);

	const handleSetSelectedFont = (font: string) => {
		setSelectedFont(font);
		if (font) {
			sessionStorage.setItem('selectedFont', font);
		}
	};

	return {selectedFont, handleSetSelectedFont};
};
