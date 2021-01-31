import React, { useState ,useEffect} from 'react';
import { useHistory } from "react-router-dom";

// Spacex Launch Services
import { getSpacexLaunchList } from "../../services/spacexLaunchService";

// Components
import SpacexLaunchCard from "../SpacexLaunchCard";
import FilterCard from "../FilterCard";

import { getParamsByName } from "../../lib/helper";

const MainLayout = (props) => {

    const history = useHistory();
    const [ filteredSpacexLaunchList, setFilteredSpacexLaunchList ] = useState([]);

    useEffect(() => {
        const spacex_launch_year = getParamsByName('spacex_launch_year') ? getParamsByName('spacex_launch_year') : "";
        const spacex_launch_success = getParamsByName('spacex_launch_success') ? getParamsByName('spacex_launch_success'): "";
        const spacex_landing_success = getParamsByName('spacex_landing_success') ? getParamsByName('spacex_landing_success') : "";
        async function fetchData() {
            const spacexList = await getSpacexLaunchList(spacex_launch_year, spacex_launch_success, spacex_landing_success);
            setFilteredSpacexLaunchList(spacexList.data)
        }
        fetchData();
      }, [history.location]);

    return (
        <main className="mainLayout">
            <section className="filterSection">
                <FilterCard />
            </section>
            <section className="mainContent">
                <div className="cardList">
                    {filteredSpacexLaunchList.length > 0 && filteredSpacexLaunchList.map(launchList => (
                        <SpacexLaunchCard key={launchList.flight_number} data={launchList} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default MainLayout