import apiClient from "../apiClient";

/**
 * Spacex launch list get service
 */
export const getSpacexLaunchList = (year = '', launchSuccess = '', landSuccess = '', limit = 100) => {
    return apiClient.get(`/launches?limit=${limit}&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${year}`);
}