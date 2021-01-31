import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Card from "../Core/Card";
import SubHeading from "../Core/SubHeading";
import styled from 'styled-components';
import { getParamsByName, generateQueryString } from "../../lib/helper";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 8px;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#76BD00' : '#C3E099')};
  padding: 5px 15px;
  border: none;
  border-radius: 3px;
  :hover {
    background-color: #76BD00;
  }
`;

const FilterCard = () => {
    // Creating history
    const history = useHistory();

    const [launchYearFilter, setLaunchYearFilter] = useState(getParamsByName('spacex_launch_year'));
    const [successfulLaunchFilter, setSuccessfulLaunchFilter] = useState(getParamsByName('spacex_launch_success'));
    const [successfulLandingFilter, setSuccessfulLandingFilter] = useState(getParamsByName('spacex_landing_success'));
    
    useEffect(() => {
        handleQueryString();
    }, [launchYearFilter, successfulLaunchFilter, successfulLandingFilter]);

    const isSelected = (paramName, value) => {
        return getParamsByName(paramName) === value;
    }

    const handleQueryString = () => {

        const fiterObj = {
        spacex_launch_year: launchYearFilter,
        spacex_launch_success: successfulLaunchFilter,
        spacex_landing_success: successfulLandingFilter,
        };

        const queryParams = generateQueryString(fiterObj);

        history.push(`?${queryParams}`);
    };

    return (
        <Card>
            <h4>Filters</h4>
            <div className="filterContentWrapper">
                <SubHeading>
                    Launch Year
                </SubHeading>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2006')} onClick={() => setLaunchYearFilter('2006')}>2006</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2007')} onClick={() => setLaunchYearFilter('2007')}>2007</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2008')} onClick={() => setLaunchYearFilter('2008')}>2008</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2009')} onClick={() => setLaunchYearFilter('2009')}>2009</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2010')} onClick={() => setLaunchYearFilter('2010')}>2010</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2011')} onClick={() => setLaunchYearFilter('2011')}>2011</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2012')} onClick={() => setLaunchYearFilter('2012')}>2012</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2013')} onClick={() => setLaunchYearFilter('2013')}>2013</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2014')} onClick={() => setLaunchYearFilter('2014')}>2014</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2015')} onClick={() => setLaunchYearFilter('2015')}>2015</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2016')} onClick={() => setLaunchYearFilter('2016')}>2016</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2017')} onClick={() => setLaunchYearFilter('2017')}>2017</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2018')} onClick={() => setLaunchYearFilter('2018')}>2018</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2019')} onClick={() => setLaunchYearFilter('2019')}>2019</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_year', '2020')} onClick={() => setLaunchYearFilter('2020')}>2020</Button>
                </ButtonWrapper>

                <SubHeading>
                    Successful Launch
                </SubHeading>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_launch_success', 'true')} onClick={() => setSuccessfulLaunchFilter('true')}>True</Button>
                    <Button type="button" isSelected={isSelected('spacex_launch_success', 'false')} onClick={() => setSuccessfulLaunchFilter('false')}>False</Button>
                </ButtonWrapper>

                <SubHeading>
                    Successful Landing
                </SubHeading>
                <ButtonWrapper>
                    <Button type="button" isSelected={isSelected('spacex_landing_success', 'true')} onClick={() => setSuccessfulLandingFilter('true')}>True</Button>
                    <Button type="button" isSelected={isSelected('spacex_landing_success', 'false')} onClick={() => setSuccessfulLandingFilter('false')}>False</Button>
                </ButtonWrapper>
            </div>
        </Card>
    )
}

export default FilterCard