import React, {createContext, useState} from "react";

export const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
	const [globalUserToken, setGlobalUserToken] = useState("");
	const [authenticated, setAuthenticated] = useState(false);

	return (
		<div>
			<ApplicationContext.Provider value={{globalUserToken, setGlobalUserToken, authenticated, setAuthenticated}}>{children}</ApplicationContext.Provider>
		</div>
	);
};

export default ApplicationProvider;