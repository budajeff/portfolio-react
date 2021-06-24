import React, { useState, useEffect, createContext } from "react";
import SiteData from './SiteData';

export const SiteDataContext = createContext();

export function SiteDataContextProvider({ children }) {
    const [siteData, setSiteData] = useState();
    useEffect(() => {
        async function loadSiteData() {
            const siteData = await SiteData();
            setSiteData(siteData);
        }
        loadSiteData();
    },
        []); // run once

    return (
        <SiteDataContext.Provider
            // Add required values to the value prop within an object (my preference)
            value={siteData}
        >
            {children}
        </SiteDataContext.Provider>
    );
}
