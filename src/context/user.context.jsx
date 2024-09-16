import { createContext, useEffect, useState } from 'react';
// import { useLocalStorage } from '../hooks/use-localStorage.hook';

export const UserContext = createContext({
	nameProfile: '',
	loadProfile: false
});

export const UserContextProvider = ({children, profile}) => {
	const [nameProfile, setNameProfile] = useState('');
	const [loadProfile, setLoadProfile] = useState(false);

	useEffect(() => {
		const loggedInProfile = profile.find((i) => i.isLogined);
		if (loggedInProfile) {
			setNameProfile(loggedInProfile.name);
			setLoadProfile(loggedInProfile.isLogined);
		} else {
			setNameProfile('');
			setLoadProfile(false);
		}
	}, [profile]);

	return <UserContext.Provider value={{nameProfile, loadProfile, setNameProfile, setLoadProfile}}>
		{children}
	</UserContext.Provider>;
};